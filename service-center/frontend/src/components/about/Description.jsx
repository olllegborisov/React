import image1 from '../../images/about/desktop/about/item1.webp'
import image2 from '../../images/about/desktop/about/item2.webp'
import styles from '../../styles/about/Description.module.css'

const Description = () => {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>О нас</h2>
      <span className={styles.subtitle}>Yamaguchi – эксперт в области массажного и фитнес-оборудования. Компания занимает лидирующие позиции в мире.</span>
      <div className="container-box">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.textGroup}>
              <span className={styles.textSubtitle}>Японские инновации в каждом продукте</span>
              <p className={styles.text}>
                Японские инновации в каждом продукте
                Оборудование Yamaguchi – это воплощение последних разработок в 
                индустрии здорового образа жизни, фитнеса и массажа. В совокупности 
                со смелым дизайном каждый продукт – шедевр. Продажи продукции компании 
                осуществляются через собственную розничную сеть от Калининграда до Владивостока.
              </p>  
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.img} src={image1} alt="девушка" />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <img className={styles.img} src={image2} alt="массжаное кресло" />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.textGroup}>
              <span className={styles.textSubtitle}>Наша миссия — <br /> Прививать любовь к здоровью </span>
              <p className={styles.text}>
                Здоровье – главный ресурс человечества. Красота, долголетие, крепкий иммунитет – 
                такой эффект от «вакцины здоровья» Yamaguchi. Технологии, позволяющие моментально 
                восстанавливать энергию и силы, приводить тело в отличную форму и поддерживать идеальный вес,
                делают продукцию компании бесценно полезной.              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description