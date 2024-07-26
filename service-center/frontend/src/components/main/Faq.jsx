import { useState } from "react"
import faqData from "../../data/main/faq"
import Arrow from '../../images/shared/faq/Arrow';
import { useResize } from "../../hooks/useResize"
import styles from '../../styles/main/Faq.module.css'




const Faq = () => {
  const [dropDownVisible, setdropDownVisible] = useState(null);
  const apdaptive = useResize()


  const handleClick = (index) => {
    setdropDownVisible(dropDownVisible === index ? null : index);

  }
  return (
    <div className="container-box">
      <div className={styles.container}>
        <h2 className={styles.title}>Вопросы и ответы</h2>
        <div className={styles.questionGroup}>
          {faqData.map((item, i) => ( 
            <div className={styles.item} key={i}  >
                <Arrow className={`${dropDownVisible === i ? styles.dropDownImgOn : styles.dropDownImgOff }  ${apdaptive.isScreenL === true ? styles.desktop : styles.mobile}`} />
                <div className={styles.question} onClick={() => handleClick(i)}>{item.question}</div>
                <p className={`${styles.answer} ${dropDownVisible === i ? styles.dropDownOn : styles.dropDownOff }`} >{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq