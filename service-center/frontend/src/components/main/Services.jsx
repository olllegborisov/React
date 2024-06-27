import services from "../../data/main/services"
import styles from './Services.module.css'

const Services = () => {
  return (
    <div className="container-box">
        <h2 className={`${styles.titleWrapper} app-title`}>
            Услуги по ремонту
        </h2>
        <div className={styles.wrapper}>
            {services.map((item, i) => (
                <div className={styles.item} key={i}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.text}>{item.text}</span>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Services