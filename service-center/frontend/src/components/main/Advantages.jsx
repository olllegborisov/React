import advantages from '../../data/main/advantages'
import styles from '../../styles/main/Advantages.module.css'

const Advantages = () => {
    return (
        <div className="container-box">
            <h2 className={`${styles.title} app-title`}>Преимущества</h2>
            <div className={styles.wrapper}>
                {advantages.map((item, i) => ( 
                        <div key={i} className={styles.item}>
                            <img className={styles.image} src={item.image} alt={item.alt} />
                            <span className={styles.subtitle} >{item.subtitle}</span>
                            <span className={styles.text}>{item.text}</span>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
export default Advantages
