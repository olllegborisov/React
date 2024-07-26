import { Link } from 'react-scroll'
import Button from '../../ui-components/Button'
import styles from '../../styles/main/Description.module.css'


const Description = () => {
    return (
        <div className={`"app-section" ${styles.description}`}>
            <div className={styles.background}>
                <div className="container-box">
                    <h1 className={styles.title}>Официальный  Сервисный центр Yamaguchi</h1>
                    <p className={styles.text}>Мы обслуживаем и ремонтируем любой сложности поломки и
                            предоставляем клиенту услуги высокого уровня. Мы считаем, что лучше быть профессионалом 
                            в своем деле и не пытаемся охватить весь рынок.</p>
                    <p className={styles.text}>Поэтому наш богатый опыт и желание помочь направлены на то, 
                    чтобы решить все проблемы, возникшие у клиента с его техникой.</p>      
            <Link 
            to={"form"} 
            smooth={true} 
            offset={0} 
            duration={500} 
            >                                  
                <Button buttonText={'Оформить заявку'}/>
            </Link>
            </div>
            </div>
        </div>
    )
}
export default Description