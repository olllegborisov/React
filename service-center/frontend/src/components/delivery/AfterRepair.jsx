import { useResize } from '../../hooks/useResize'
import afterRepairData from '../../data/delivery/afterRepairData'
import arrow from '../../images/delivery/arrow.svg'
import arrowMob from '../../images/delivery/arrow-mob.svg'
import styles from '../../styles/delivery/AfterRepair.module.css'

const AfterRepair = () => {
    const adaptive = useResize()
  return (
    <div className={styles.container}>
        <h2 className={styles.subtitle}>После ремонта</h2>
        <div className={`${styles.wrapper} container-box`}>
            {afterRepairData.map((item, i) => {
                return (
                    <>
                        <div className={styles.item} key={i}>
                            {item.text2 
                            ? <>
                                <span className={styles.name}>{item.title}</span>
                                <span className={styles.text}>{item.text1}</span>
                                <span className={styles.text}>{item.text2}</span>
                            </> : <>
                                <span className={styles.name}>{item.title}</span>
                                <span className={styles.text}>{item.text1}</span>
                                <span className={styles.text}>{item.text2}</span>
                            </>}
                        </div>
                        {i === 2 ? <></> : <img className={`${styles.arrow} ${adaptive.isScreenSm ? styles.imageMobile : ''}`} src={adaptive.isScreenSm ? arrowMob : arrow } alt='стрелка'/>}
                    </>
            )})}
        </div>
    </div>
  )
}

export default AfterRepair