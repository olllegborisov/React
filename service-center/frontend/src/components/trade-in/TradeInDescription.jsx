import styles from '../trade-in/TradeInDescription.module.css'
import item1 from '../../images/trade-in/item1.webp'
import item2 from '../../images/trade-in/item2.webp'
import item3 from '../../images/trade-in/item3.webp'


const TradeInDescription = () => {
  return (
    <>
      <span className={styles.title}>Trade-In</span>
      <div className={`${styles.wrapper} container-box`}>
        <div className={styles.item}>
          <div className={styles.textGroup}>
            <span className={styles.subtitle}>Обновляться выгодно!</span>
            <p className={styles.text}>Обменяйте с доплатой такое привычное для Вас, 
              но износившееся массажное кресло на новое, инновационное с 
              большим усовершенствованным функционалом. Это отличная возможность сэкономить 
              на покупке нового кресла и не думать об утилизации старого оборудования</p>
            <span className={styles.highlightedText}>Уточняйте детали у наших менеджеров</span>
          </div>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={item1} alt="девушка" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.textGroup}>
            <span className={styles.subtitle}>Обменяем Ваше старое массажное кресло на новое со скидкой в Trade-in</span>
            <p className={styles.text}>Вы можете сдать Yamaguchi Axiom YA- 6000,US Medica Jet или кресло Orion с доплатой,
              обменять его на кресло YAMAGUCHI Xi. При этом вы заплатите намного меньше, чем указано на сайте — 
              мы вычтем актуальную стоимость старого кресла от цены нового.
            </p>
          </div>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={item2} alt="массажное кресло" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.textGroup}>
            <p className={styles.text}>Оценка старого массажного кресла производится нашим специалистом, окончательная 
              стоимость зависит от 2 видов износа - физический (исправность, комплектация, внешний вид), 
              функциональный (функциональность кресла по отношению к современным аналогам).
            </p>
            <span className={styles.highlightedText}>Trade-in – это очевидная выгода!</span>
            <p className={styles.text}>Вы меняете старое массажное оборудование на новое,
              внося при этом небольшую доплату. В итоге вы не только продадите старое кресло или массажер, 
              но и заплатите гораздо меньше за новое.                 
            </p>
          </div>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={item3} alt="массажные кресла" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TradeInDescription