import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import services from "../../data/main/services"
import { useResize } from "../../hooks/useResize"
import styles from './Services.module.css'



const Services = () => {
const apdaptive = useResize()
  return (

    <div className={styles.services}>
        {apdaptive.isScreenL === true ? (
            <div className="container-box">
                <h2 className={`${styles.titleWrapper} app-title`}>
                    Услуги по ремонту
                </h2>
                <div className={styles.wrapper}>
                    {services.map((item, i) => (
                        <div className={styles.item} key={i}>
                            <span className={styles.title}>{item.title}</span>
                            <span className={styles.text}>{item.text}</span>
                        </div>
                    ))}
                </div>
                
            </div>
                ) : (
                <Swiper
                modules={[ Autoplay, A11y]}
                    spaceBetween={20}
                    slidesPerView={1.4}
                    centeredSlides={true}
                    loop={true}
                    autoplay={true}
                    >
                    {services.map((item, i) => (
                        <SwiperSlide>
                            <div className={styles.item} key={i}>
                                <span className={styles.title}>{item.title}</span>
                                <span className={styles.text}>{item.text}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>

    )
}

export default Services