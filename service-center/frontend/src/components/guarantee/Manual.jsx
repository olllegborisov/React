import guarantee from '../../data/guarantee/guarantee'
import styles from '../../styles/guarantee/Manual.module.css'
const Manual = () => {
  return (
    <div className={`${styles.guarantee} container-box` }>
        <h1 className={styles.title}>Гарантия</h1>
        <span className={styles.subtitle}>Как получить гарантийное обслуживание</span>
        <div className={styles.wrapper}>
          {guarantee.map((item, i) => (
            <div className={styles.item} key={i}>
                <img className={styles.image} src={item.image} alt="логотип"/>
                { item.text2 ? <span className={styles.text}>{item.text}<br />{item.text2}</span> : <span className={styles.text}>{item.text} </span> }
                {item.phone && item.phoneLink ? <a className={styles.phoneLink} href={item.phoneLink}>{item.phone}</a> : ''}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Manual