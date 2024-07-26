import { useState } from 'react'
import { useResize } from '../../hooks/useResize'
import text from '../../data/guarantee/text'
import faq from '../../data/guarantee/faq'
import Arrow from '../../images/shared/faq/Arrow'
import styles from '../../styles/guarantee/Faq.module.css'

const Faq = () => {
  const [dropDownVisible, setdropDownVisible] = useState(null);
  const apdaptive = useResize()

  const handleClick = (index) => {
    setdropDownVisible(dropDownVisible === index ? null : index);
  }

  return (
    <div className='container-box'>
      <div className={styles.container}>
          <div className={styles.infoListWrap}>
            {text.map((item, i) => {
              return (
                <div key={i} className={styles.infoItem}>
                  <span className={styles.infoName}>{item.title}</span>
                  <ol className={`{styles.infoList} ${!item.text2 ? styles.infoListNoPadding : ''}`}>
                    <li className={styles.infoText}>{item.text1}</li>
                    {item.text2 && <li className={styles.infoText}>{item.text2}</li>}
                    {item.text3 && <li className={styles.infoText}>{item.text3}</li>}
                  </ol>
                </div>
            )})}
          </div>
          <div className={styles.faqContent}>
            <h2 className={styles.faqTitle}>FAQ</h2>
              <ol className={styles.faqList}>
                  {faq.map((item, i) => {
                    return (
                      <li className={styles.faqItem} key={i}>
                          <Arrow className={`${dropDownVisible === i ? styles.dropDownImgOn : styles.dropDownImgOff }  ${apdaptive.isScreenL === true ? styles.desktop : styles.mobile}`} />
                          <p className={styles.faqQuestion} onClick={() => handleClick(i)}>{item.question}</p>
                          <p className={`${styles.faqAnswer} ${dropDownVisible === i ? styles.dropDownOn : styles.dropDownOff }`}>{item.answer}</p>
                      </li>
                  )})}
              </ol>
          </div>
      </div>
    </div>
  )
}

export default Faq