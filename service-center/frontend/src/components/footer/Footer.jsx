import { NavLink } from 'react-router-dom'
import contactsDetails from '../../data/footer/contactsDetails'
import navigation from '../../data/navigation'
import Mastercard from '../../images/main/footer/mastercard'
import Logo from '../../images/main/footer/logo'
import Visa from '../../images/main/footer/visa'
import Mir from '../../images/main/footer/mir'
import styles from '../../styles/footer/Footer.module.css'

const Footer = () => {
  
  return (
    <div className={styles.footer}>
      <div className="container-box">
        <div className={styles.wrapper}>
          <div className={styles.group}>
            <Logo className={styles.logo} />
            <div className={styles.contactsWrapper}>
              <a className={styles.contactsPhone} href={contactsDetails[0].phoneLink}>{contactsDetails[0].phone}</a>
              <a className={styles.webAdress} href={contactsDetails[0].webAdress}>yamaguchi-service-remont.ru</a>
            </div>
            <div className={styles.sheduleWrapper}>
              <span>Пн-пт: 9.00-18.00</span>
              <span>Сб: 9.00-17.00</span>
            </div>
          </div>
          <div className={styles.group}>
            <span className={styles.navSubtitle}>Разделы</span>
            <div className={styles.navGroup}>
              {navigation.map((nav, i) => {
                return <NavLink className={styles.navPage} to={nav.name} key={i}>{nav.title}</NavLink>
              })}
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.phoneWrapper}>
              <span className={styles.phoneName}>Телефон для справок</span>
              <a className={styles.informationHotline} href={contactsDetails[0].phoneLink}>{contactsDetails[0].phone}</a>
            </div>
            <div className={styles.paymentWrapper}>
              <span className={styles.paymentTitle}>Принимаем к оплате</span>
              <div className={styles.paymentGroup}>
                <Mastercard className={styles.paymentItem}  />
                <Visa className={styles.paymentItem} />
                <Mir className={styles.paymentItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer