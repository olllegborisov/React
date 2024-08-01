import { Link } from 'react-router-dom';
import contacts from "../../data/contacts/contacts"
import styles from "./ContactsInfo.module.css"

const ContactsInfo = () => {
  return (
    <div className={styles.contacts}>
        <h1 className={styles.title}>Контакты</h1>
        <div className={`${styles.wrapper} container-box`}>
            {contacts.map((item, i)  => (
                <div  key={i} className={styles.item}>
                    <img className={styles.img} src={item.image} alt={item.imageAlt} />
                    <span className={styles.name}>{item.title}</span>
                    <span className={styles.text}>{item.text}</span>
                    {item.text3 ? 
                        <div className={styles.schedule}>
                            <span className={styles.days}>{item.text2}</span>
                            <span className={styles.days}>{item.text3}</span>
                        </div> : <></>
                     } 
                    {item.text2 && !item.text3 ? 
                        <>
                            <Link className={styles.tradeInLink} to="/trade-in">{item.text2}</Link>
                        </> : <></>
                    }
                </div>
            ))}
        </div>
    </div>
  )
}

export default ContactsInfo