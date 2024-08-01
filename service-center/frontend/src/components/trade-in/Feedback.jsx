import img1 from '../../images/trade-in/feedback/item1.svg'
import img2 from '../../images/trade-in/feedback/item2.svg'
import img3 from '../../images/trade-in/feedback/item3.svg'
import img4 from '../../images/trade-in/feedback/item4.webp'


import styles from './Feedback.module.css'

const Feedback = () => {
  return (
    <div className='container-box'>
        <div className={styles.wrapper}>
            <div className={styles.textGroup}>
                <h2 className={styles.subtitle}>Хотите узнать, сколько?</h2>
                <div className={styles.item}>
                    <img className={styles.logo} src={img1} alt="телефон" />
                    <span className={styles.text}>Позвоните по номеру 8 800 333-12-81</span>
                </div>
                <div className={styles.item}>
                    <img className={styles.logo} src={img2} alt="кресло" />
                    <span className={styles.text}>Расскажите о кресле, которое хотите обменять</span>
                </div>
                <div className={styles.item}>
                    <img className={styles.logo} src={img3} alt="календарь" />
                    <span className={styles.text}>Расскажите о кресле, которое хотите обменять</span>
                </div>
            </div>
            <img className={styles.img} src={img4} alt="девушка" />
        </div>
    </div>
  )
}

export default Feedback