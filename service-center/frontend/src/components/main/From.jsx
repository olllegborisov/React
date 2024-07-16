import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'
import image from '../../images/main/form/item.webp'
import Button from './Button'


const From = () => {
    const [formData, setFormData] = useState('')
    function handleFormSubmit(event) {
        event.preventDefault()
        const userData = {
          username: event.target.username.value,
          phone: event.target.phone.value,
          email: event.target.email.value,
          message: event.target.message.value,
        }
        setFormData(userData) 
        console.log(userData)
        alert(JSON.stringify(userData))
      }
      console.log(formData);

  return (
    <div className={styles.form2}>
        <div className="container-box">
            <h2 className={styles.title}>Оформить заявку на ремонт</h2>
            <div onSubmit={handleFormSubmit} className={styles.wrapper}>
                <form action="#" className={styles.form}>
                    <input type="text" className={styles.input} name="username" placeholder='Ваше имя' />
                    <input type="text" className={styles.input} name="phone" placeholder="Контактный телефон"/>
                    <input type="text" className={styles.input} name="email" placeholder="E-mail"></input>
                    <textarea  id="" cols="30" rows="10" name="message" class={styles.textarea} placeholder="Модель оборудования, симптомы поломки"></textarea>
                    <label className={styles.checkbox}>
                        <input type="checkbox"  value="value"/>
                        <span className={styles.checkboxText}><span href="/pages/personal-data.html">Я ознакомлен(а) с <span class="form__link">политикой конфиденциальности</span> и даю согласие на обработку персональных данных</span></span>
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