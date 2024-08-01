import { useState } from 'react'
import {useForm} from 'react-hook-form'
import { Backdrop } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { BiLoaderAlt } from "react-icons/bi";


import Input from '../../ui-components/Input'
import Checkbox from '../../ui-components/Checkbox'
import Button from '../../ui-components/Button'
import img from '../../images/trade-in/form/item.webp'
import Submit from '../../utilities/sending/Submit';
import Close from '../../images/main/form/close'
import Logo from '../../images/main/form/logo'

import styles from './TradeInForm.module.css'
import stylesForm from '../../styles/form.module.css'


const TradeInForm = () => {
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
    
    <div className={styles.tradiInForm}>
      <div className='container-box'>
                    
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

        <div className={styles.wrapperMain}>
          <div className={styles.formWrapper}>
            <div className={styles.subtitleWrapper}>
              <h2 className={styles.subtitle}>Оформить заявку на Trade-In</h2>
            </div>
            <div className={styles.wrapper}>
              <form onSubmit={handleSubmit(onSubmit)}  className={styles.form} action="#">
                <Input register={register('userName', 
                  {required: 'Поле обязательно для заполнения'})} errors={errors} placeholder={'Ваше имя'}/>
                <Input register={register('phone', 
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
                <Checkbox stylesForm={stylesForm} className={styles.checkbox}  errors={errors} register={register}  />
                <Button buttonStyles={{width: '100%', marginBottom: '50px', padding: '22px 66px'}} buttonText='Оформить заявку' />
              </form>
            </div>
          </div>
          <img className={styles.img} src={img} alt='ноутбук' />
        </div>
      </div>
    </div>
  )
}

export default TradeInForm