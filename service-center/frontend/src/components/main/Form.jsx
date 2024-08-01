import {useForm} from 'react-hook-form'
import { BiLoaderAlt } from "react-icons/bi";
import { useState } from 'react'
import { Backdrop } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import image from '../../images/main/form/item.webp'
import Logo from '../../images/main/form/logo';
import Close from '../../images/main/form/close';
import Button from '../../ui-components/Button';
import Checkbox from '../../ui-components/Checkbox';
import Submit from '../../utilities/sending/Submit';
import Input from '../../ui-components/Input';
import TextArea from '../../ui-components/Textarea'
import styles from '../../styles/main/Form.module.css'
import stylesForm from '../../styles/form.module.css'



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
            <h2 className={styles.title}>Оформить заявку на ремонт</h2>
            <div  className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)} action="#" className={styles.form}>
                    <Input    register={register('userName', 
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
                    <Checkbox stylesForm={stylesForm} className={styles.checkbox}  errors={errors} register={register}  />
                    <div>
                        <Button style123={{width: '100%'}} buttonText={'Оформить заявку'} />
                    </div>
                </form>
                <img  className={styles.image} src={image} alt="нотубук" />
            </div>

        </div>
    </div>

  )
}

export default From