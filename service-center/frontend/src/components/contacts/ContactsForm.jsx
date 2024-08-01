import {useForm} from 'react-hook-form'
import { BiLoaderAlt } from "react-icons/bi";
import { useState } from 'react'
import { Backdrop } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import contactsDetails from '../../data/footer/contactsDetails'
import Submit from '../../utilities/sending/Submit';
import brand1 from '../../images/contacts/brand1.svg'
import brand2 from '../../images/contacts/brand2.svg'
import brand3 from '../../images/contacts/brand3.svg'
import Logo from '../../images/main/form/logo';
import Close from '../../images/main/form/close';
import Button from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import TextArea from '../../ui-components/Textarea'
import styles from './ContactsForm.module.css'
import stylesForm from '../../styles/form.module.css'


const ContactsForm = () => {
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
    <>
        <div className={`${styles.mainWrapper} container-box`}>
            <div className={styles.itemGroup}>
                <div className={styles.item}>
                    <a className={styles.contactsPhone} href={contactsDetails[0].phoneLink}>{contactsDetails[0].phone}</a>
                    <a className={styles.webAdress} href={contactsDetails[0].webAdress}>yamaguchi-service-remont.ru</a>
                </div>
                <div className={styles.item}>
                    <div className={styles.name}>
                        <span className={styles.name}>Гарантийное обслуживание брендов</span>
                    </div>
                    <div className={styles.brandsGroup}>
                        <img className={styles.brand} src={brand1} alt='yamagchi' />
                        <img className={styles.brand} src={brand2} alt="us medica" />
                        <img className={styles.brand} src={brand3} alt="anatomico" />
                    </div>
                </div>
            </div>
            <div className={styles.form2} >
        
                <Backdrop open={isLoading ? true : false } style={{zIndex: '50'}}/>

                <Modal
                    open={modalOpen}
                    onClose={handleModalClose}
                    aria-labelledby="loading-modal"
                >
                    <div className={stylesForm.modal}>
                        <Close className={stylesForm.modalClose} onClick={handleModalClose} />
                        <div className={stylesForm.modalWrapper}>
                            <Logo className={stylesForm.modallLogo} />
                            <span className={stylesForm.modalTitle}>Спасибо!</span>
                            <span className={stylesForm.modalTextID}>Номер вашей заявки: <span className={styles.modalID}>{orderID}</span></span>
                            <span className={stylesForm.modalText}>Наш менеджер свяжется с вами в течение 30 минут</span>
                        </div>
                    </div>
                </Modal>

                <BiLoaderAlt className={stylesForm.icon} style={isLoading ? {opacity: '1', visability: 'visible' } : {opacity: '0', visability: 'hidden'}}/> 
                <div className="container-box">
                    <h2 className={styles.subtitle}>Оформить заявку на ремонт</h2>
                    <div  className={styles.wrapper}>
                        <form onSubmit={handleSubmit(onSubmit)} action="#" className={styles.form}>
                            <Input  className={styles.input}  register={register('userName', 
                                {required: 'Поле обязательно для заполнения'})} errors={errors} placeholder={'Ваше имя'}/>
                            <Input   register={register('phone', 
                                {required: 'Поле обязательно для заполнения', minLength: {
                                    value: 4,
                                    message: 'Минимальная длина — 4 символа'
                            }})} errors={errors}  placeholder={'Контактный телефон'}/>
                            <Input   register={register( 'email', 
                                {required: 'Поле обязательно для заполнения', pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Введенное значение не соответствует формату электронной почты'
                                }
                                })} errors={errors}  placeholder={'E-mail'}/>
                            <TextArea stylesForm={stylesForm}  register={register('message', 
                                {required: 'Поле обязательно для заполнения'})} errors={errors} placeholder={'Модель оборудования, симптомы поломки'}/>
                            <div>
                                <Button style123={{width: '100%'}} buttonText={'Оформить заявку'} />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default ContactsForm