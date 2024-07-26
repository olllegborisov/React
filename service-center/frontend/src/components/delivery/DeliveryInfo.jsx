import image from '../../images/delivery/deliveryInfo/item.webp'
import styles from '../../styles/delivery/DeliveryInfo.module.css'

const DeliveryInfo = () => {
  return (
    <>
        <div className={styles.title}>Доставка</div>
        <div className={`${styles.wrapper} container-box`}>
            <div className={styles.textGroup}>
                <div className={styles.item}>
                    <span className={styles.name}>Выезд мастера</span>
                    <span className={styles.text}>выезд на дом, диагностика и ремонт (без учета стоимости деталей)</span>
                    <ul className={styles.ul}>
                        <li className={styles.li}>3000 руб. + 30 руб./км за МКАД</li>
                        <li className={styles.li}>Бесплатно для гарантийных случаев</li>
                        <li className={styles.li}>Уточнить стоимость по телефону</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <span className={styles.name}>Самостоятельная доставка</span>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Доставка в сервисный центр и обратно осуществляется за ваш счет</li>
                        <li className={styles.li}>Стоимость зависит от расстояния и веса оборудования</li>
                    </ul>
                </div>
            </div>
            <img className={styles.image} src={image} alt="автомобиль"/>
        </div>
    </>
  )
}

export default DeliveryInfo