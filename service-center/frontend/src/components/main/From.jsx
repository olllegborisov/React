import {useForm} from 'react-hook-form'
import { BiLoaderAlt } from "react-icons/bi";
import { useState } from 'react'
import { Backdrop } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import styles from './Form.module.css'
import image from '../../images/main/form/item.webp'
import Logo from '../../images/main/form/logo';
import Close from '../../images/main/form/close';
import Button from './Button'
import Submit from '../../utils/sending/Submit';

    const From = () => {
        const [isLoading, setIsLoading] = useState(false)
        const [modalOpen, setModalOpen] = useState(false);
        const [orderID, setOrderID] = useState('')
        const {register, handleSubmit, reset,  formState: {errors}} = useForm()

        
        const handleModalOpen = () => {
            setModalOpen(true);
          };
        
        const handleModalClose = () => {
            setModalOpen(false);
        };

        const onSubmit = (data) => {
               Submit(data, setIsLoading, setOrderID, reset, handleModalOpen);
          };

  return (
    <div className={styles.form2} >
        
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
                        <input type="checkbox"  {...register('checkbox', {required: 'Поле обязательно для заполнения'})}  value="value"/>
                        <span className={styles.checkboxText}><span href="/pages/personal-data.html">Я ознакомлен(а) с <span className="link">политикой конфиденциальности</span> и даю согласие на обработку персональных данных</span></span>
                        <p style={{top: '100%'}} className={styles.error}>{errors.checkbox?.message}</p>

                    </label>

                    <div>
                        <Button />
                    </div>
                </form>
                <img className={styles.image} src={image} alt="нотубук" />
            </div>

        </div>
    </div>

  )
}

export default From