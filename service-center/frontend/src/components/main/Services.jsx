import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  A11y } from 'swiper/modules';
import { useResize } from "../../hooks/useResize"
import services from "../../data/main/services"
import styles from '../../styles/main/Services.module.css'
import 'swiper/css/autoplay'
import 'swiper/css';





const Services = () => {
const apdaptive = useResize()
  return (
    <>
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
                        <SwiperSlide key={i}>
                            <div className={styles.item} >
                                <span className={styles.title}>{item.title}</span>
                                <span className={styles.text}>{item.text}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    )
}

export default Services