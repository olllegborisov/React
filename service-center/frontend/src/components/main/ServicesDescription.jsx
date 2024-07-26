import image1 from '../../images/main/serviceDescription/item1.webp'
import image2 from '../../images/main/serviceDescription/item2.webp'
import styles from '../../styles/main/ServicesDescription.module.css'

const ServicesDescription = () => {
  return (
    <div className="container-box">
        <div className={`${styles.wrapper}`}>
            <div className={styles.textGroup}>
                <p className={styles.text}>Наш сервисный центр не только предоставляет ремонтные услуги,
                    но и обеспечивает долгий срок службы вашего массажного оборудования. Мы понимаем, что 
                    каждое устройство имеет свои особенности, поэтому мы оснащены знаниями и опытом для 
                    ремонта различных видов и типов массажного оборудования. Независимо от того, 
                    является ли вашим оборудованием массажное кресло, массажер, беговая дорожка 
                    или фитнес-тренажер, мы обеспечим его полноценное восстановление.
                </p>
                <p className={styles.text}>Наши услуги охватывают широкий спектр возможностей. Мы 
                    проведем комплексную диагностику вашего массажного оборудования Yamaguchi, 
                    выявим все неисправности и незамедлительно устраним их. При необходимости
                    мы заменим детали и комплектующие только оригинальными запчастями 
                    Yamaguchi, чтобы гарантировать надежность и долговечность ремонта.
                </p>
            </div>
            <div className={styles.imageGroup}>
                <img className={styles.image} src={image1} alt="кресла" />
                <img className={styles.image} src={image2} alt="тренажеры" />
            </div>
        </div>
    </div>
  )
}

export default ServicesDescription