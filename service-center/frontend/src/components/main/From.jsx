import React from 'react'
import {useForm} from 'react-hook-form'
import styles from './Form.module.css'
import image from '../../images/main/form/item.webp'
import Button from './Button'


let renderCount = 0

    const From = () => {
        const {register, handleSubmit,  formState: {errors}} = useForm()

        renderCount++




        const onSubmit = async (data) => {
        try {
            const response = await fetch('https://ваш-сервер/конечная-точка-api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Добавьте любые другие заголовки по необходимости
            },
            body: JSON.stringify(data)
            });
        
            if (response.ok) {
            // Запрос прошел успешно
            const responseData = await response.json();
            console.log('Данные успешно отправлены:', responseData);
            } else {
            // Обработка ошибочного ответа
            console.error('Ошибка отправки данных:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Ошибка отправки данных:', error);
        }
        };

        // const [formData, setFormData] = useState('')
        // const [isLoading, setIsloading] = useState(false)
        // const [username, setUsername] = useState('text')
        // const [email, setEmail] = useState('');
        // const [validEmail, setValidEmail] = useState(false);
        // const API_URL = 'https://jsonplaceholder.typicode.com/posts'


        // console.log(watch("example"))
        

        
        // function handleFormSubmit(event) {
        //     event.preventDefault()
        //     const userData = {
        //       username: event.target.username.value,
        //       phone: event.target.phone.value,
        //       email: event.target.email.value,
        //       message: event.target.message.value,
        //     }
            
        //     setFormData(userData) 
        //     setUsername(userData.username)
        //     setEmail(userData.email)

        //     const isValidEmail = /\S+@\S+\.\S+/.test(email);
        //     setValidEmail(isValidEmail);


        //     // console.log(userData)
        //     // alert(JSON.stringify(userData))
        //     fetchData()
        // }



        // async function fetchData() {
        //     setIsloading(true)

        //     try {
        //         const res = await fetch(API_URL)
        //         const posts = await res.json()
        //         console.log(posts);
        //     } catch (error) {
        //         console.log(error);
        //     }
        //     setIsloading(false)
        // }



        // console.log(formData);

  return (
    <div className={styles.form2}>
        <div className="container-box">
            <h2 className={styles.title}>Оформить заявку на ремонт</h2>
            <div  className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)} action="#" className={styles.form}>
                    <div>
                        <input {...register('userName', {required: 'Поле обязательно для заполнения'})} className={styles.input}  placeholder='Ваше имя' />
                        <p className={styles.error}>{errors.userName?.message}</p>
                    </div>
                    <div>
                        <input  {...register('phone', {required: 'Поле обязательно для заполнения', minLength: {
                            value: 4,
                            message: 'Минимальная длина — 4 символа'
                        }})} className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} placeholder="Контактный телефон"/>
                        <p className={styles.error}>{errors.phone?.message}</p>
                    </div>
                    <div>
                        <input className={`${styles.input} ${errors.email ? styles.inputError : ''}`} {...register( 'email', {required: 'Поле обязательно для заполнения', pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Введенное значение не соответствует формату электронной почты'
                        }
                        })}  placeholder="E-mail"></input>
                        <p className={styles.error}>{errors.email?.message}</p>
                    </div>
                    <div>
                        <textarea  id="" cols="30" rows="10"  {...register('message', {required: 'Поле обязательно для заполнения'})} className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`} placeholder="Модель оборудования, симптомы поломки"></textarea>
                        <p className={styles.error}>{errors.message?.message}</p>
                    </div>
                    <label className={styles.checkbox}>
                        <input type="checkbox"  value="value"/>
                        <span className={styles.checkboxText}><span href="/pages/personal-data.html">Я ознакомлен(а) с <span className="link">политикой конфиденциальности</span> и даю согласие на обработку персональных данных</span></span>
                    </label>
                    <div>
                        <Button />
                    </div>
                </form>
                <img className={styles.image} src={image} alt="нотубук" />
            </div>

        </div>
        {/* {isLoading ? (
        <h1>Loading...</h1>
      ) : '' } */}
      <p style={{marginLeft: '200px', marginTop: '50px'}}>{`Render Count: ${renderCount}`}</p>

    </div>

  )
}

export default From