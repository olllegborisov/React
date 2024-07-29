const Submit = async (data, setIsLoading, setOrderID, reset, handleModalOpen, handleModalCloseFeedback, modalOpenFeedback) => {
    setIsLoading(true)
    if (modalOpenFeedback) {
        handleModalCloseFeedback()
    }
    
    try {
        const response = await fetch('https://olllegbo.isp29.admintest.ru/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        });
    
        if (response.ok) {

        // Запрос прошел успешно
        const responseData = await response.json();
        setOrderID(responseData.randomNumber)
        console.log('Данные успешно отправлены:', responseData);
        } else {
        // Обработка ошибочного ответа
        console.error('Ошибка отправки данных:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Ошибка отправки данных:', error);
    }
    setIsLoading(false)
    handleModalOpen();
    reset()
};

export default Submit