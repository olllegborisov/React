
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { useForm } from 'react-hook-form';
import { BiLoaderAlt } from "react-icons/bi";
import { Backdrop } from '@material-ui/core';
import Close from '../../images/main/form/close';
import { useResize } from '../../hooks/useResize'
import Button from '../../ui-components/Button'
import image from '../../images/about/desktop/item.webp'
import Logo from '../../images/main/form/logo';
import imageMob from '../../images/about/mobile/item.webp'
import styles from '../../styles/about/Order.module.css'
import Checkbox from '../../ui-components/Checkbox'
import Submit from '../../utilities/sending/Submit';

const Order = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderID, setOrderID] = useState('')
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenFeedback, setModalOpenFeedback] = useState(false);

    const {register, handleSubmit, reset, formState: {errors}} = useForm()

    const handleModalOpen = () => {
        setModalOpen(true);
      };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleModalOpenFeedback = () => {
        setModalOpenFeedback(true);
        setModalOpen(false);
      };
    const handleModalCloseFeedback = () => {
        setModalOpenFeedback(false);
    };
    

    const onSubmit = (data) => {
        Submit(data, setIsLoading, setOrderID, reset, handleModalOpen, handleModalCloseFeedback, modalOpenFeedback);
   };

   console.log(register);




    
    const adaptive = useResize()
  return (
    <div className={styles.order}>

        <Backdrop open={isLoading ? true : false } style={{zIndex: '50'}}/>

        <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="loading-modal"
        >
            <div className={styles.modal}>
                <Close className={styles.modalClose} onClick={handleModalClose} />
                <div className={styles.modalWrapper}>
                    <Logo className={styles.modallLogo} />
                    <span className={styles.modalTitle}>Спасибо!</span>
                    <span className={styles.modalTextID}>Номер вашей заявки: <span className={styles.modalID}>{orderID}</span></span>
                    <span className={styles.modalText}>Наш менеджер свяжется с вами в течение 30 минут</span>
                </div>
            </div>
      </Modal>

      <BiLoaderAlt className={styles.icon} style={isLoading ? {opacity: '1', visability: 'visible' } : {opacity: '0', visability: 'hidden'}}/> 

        <Modal
            open={modalOpenFeedback}
            onClose={handleModalCloseFeedback}
            aria-labelledby="loading-modal"
        >
            <div className={styles.form}>
                <Close className={styles.modalClose} onClick={handleModalCloseFeedback} />
                <h2 className={styles.formSubtitle}>Заказать обратный звонок</h2>
                <span className={styles.formText}>Введите имя и телефон и наш менеджер перезвонит Вам в течение 5 минут. Пожалуйста, не отключайте свой телефон</span>
                <div className={styles.formWrapper}>
                    <form className={styles.form1}  onSubmit={handleSubmit(onSubmit)} action="#">
                        <div className={styles.inputWrapper}>
                            <input {...register('userName', {required: 'Поле обязательно для заполнения'})} className={styles.input}  placeholder='Ваше имя' />
                            <p className={styles.error}>{errors.userName?.message}</p>
                        </div>
                        <div className={styles.inputWrapper}>
                            <input  {...register('phone', {required: 'Поле обязательно для заполнения', minLength: {
                                value: 4,
                                message: 'Минимальная длина — 4 символа'
                            }})} className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} placeholder="Контактный телефон"/>
                            <p className={styles.error}>{errors.phone?.message}</p>
                        </div>
                        <Checkbox register={register} errors={errors}/>
                        <Button  className={styles.formButton} buttonText={'Перезвонить мне'} />
                    </form>
                </div>
            </div>
        </Modal>

        <div className="container-box">
            <div className={styles.wrapper}>
                <div className={styles.textGroup}>
                    <h2 className={styles.subtitle}>Помочь сделать выбор?</h2>
                    {adaptive.isScreenSm ? <img className={styles.img}src={imageMob} alt="мужчина"/> : <></> } 
                    <span className={styles.text}>Мы поможем Вам на видеоконсультации! Оставьте заявку и наш менеджер перезвонит Вам в течение 5 минут.</span>
                    <Button buttonText={'Оформить заявку'} className={styles.button} onClick={handleModalOpenFeedback}/>
                </div>
                {adaptive.isScreenSm ? <></> : <img className={styles.img}src={image} alt="мужчина"/>} 

            </div>
        </div>
    </div>
  )
}

export default Order