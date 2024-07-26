import { useResize } from '../../hooks/useResize'
import image1 from '../../images/main/order/item1.webp'
import image2 from '../../images/main/order/item2.webp'
import list from '../../images/main/order/list.svg'
import listMobile from '../../images/main/order/list-mobile.svg'

import styles from '../../styles/main/Order.module.css'

const Order = () => {
  const apdaptive = useResize()
  const styleMob = 'padding: 0 3vw'
  const styleDesk = 'padding: 0 1vw'

  return (
    <div className={styles.order}>
        <div style={apdaptive.isScreenL === true ? {styleDesk} : {styleMob}} className="container-box">
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>
                    Как мы ремонтируем
                </h2>
            </div>
            <div className={`${styles.wrapper} `}>
                <div className={styles.imageGroup}>
                    <img className={styles.image} src={image1} alt="call-центер" />
                    <img className={styles.image} src={image2} alt="шуруповёрт" />
                </div>
                <div className={styles.listGroup}>
                    <img className={styles.listImg} src={apdaptive.isScreenL === true ? list : listMobile} alt="" />
                    <div className={styles.textWrapper}>
                        <div className={styles.textGroup}>
                            <span className={styles.name}>Создание заявки</span>
                            <span className={styles.text}>
                                Клиент оставляет заявку на сайте или по телефону
                                для ремонта массажного кресла.
                            </span>
                        </div>
                        <div className={styles.textGroup}>
                            <span className={styles.name}> 
                                Доставка кресла в сервисный центр
                            </span>
                            <ul className={styles.ul}>
                                <li className={styles.li}>
                                    Клиент может самостоятельно привезти кресло
                                    в сервисный центр или воспользоваться услугами доставки.
                                </li>
                                <li className={styles.li}>
                                    Если ваше кресло находится в гарантийном периоде,
                                    то выезд и диагностика проводятся бесплатно.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.textGroup}>
                            <span className={styles.name}> 
                                Диагностика и согласование
                                стоимости ремонта
                            </span>
                            <ul className={styles.ul}>
                                <li className={styles.li}>
                                    После получения кресла нашими специалистами, мы 
                                    связываемся с клиентом, для согласования 
                                    стоимости ремонта, если случай не является
                                    гарантийным.
                                </li>
                                <li className={styles.li}>
                                    После согласования, цены на услуги и запчасти не меняются.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.textGroup}>
                            <span className={styles.name}>Ремонт и выдача</span>
                            <ul className={styles.ul}>
                                <li className={styles.li}>
                                    Когда ремонт будет завершен, кресло будет 
                                    помещено на полку для выдачи.
                                </li>
                                <li className={styles.li}>
                                    Если клиент оставляет заявку на доставку, 
                                    мы согласуем дату доставки на следующий день 
                                    после готовности ремонта.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order