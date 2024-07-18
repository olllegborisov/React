import { useState } from "react"
import faqData from "../../data/main/faq"
import styles from './Faq.module.css'
import arrow from '../../images/main/faq/arrow-white.svg'



const Faq = () => {
  const [visibilityIndex, setVisibilityIndex] = useState(null);



  const handleClick = (index) => {
    setVisibilityIndex(visibilityIndex === index ? null : index);

  }
  return (
    <div className="container-box">
      <div className={styles.container}>
        <h2 className={styles.title}>Вопросы и ответы</h2>
        <div className={styles.questionGroup}>
          {faqData.map((item, i) => ( 
            <div className={styles.item} key={i}  >
                <img  style={ visibilityIndex === i 
                  ? {
                    transform: "rotate(90deg)",
                    position: 'absolute',  
                    top: '35px', 
                    right: '0px', 
                    transition: 'all .2s linear'
                   } : {
                    transform: "rotate(270deg)",
                    position: 'absolute', 
                    top: '35px', right: '0px', 
                    transition: 'all .2s linear'
                  } }  img src={arrow} alt="" />

                <div className={styles.question} onClick={() => handleClick(i)}>{item.question}</div>
                <p className={styles.answer} onClick={() => handleClick(i)} style={ visibilityIndex === i 
                  ? {
                    opacity: '1',
                    transition: 'all .1s linear',
                    position: 'absolute',
                    backgroundColor: '#fff',
                    padding: "0px 0px 40px 0px", 
                    borderBottom: '2px solid #e1eeff',
                    top: '100%'
                  } : {
                    position: 'absolute',
                    opacity: '0',
                    visibility: 'hidden',
                    transition: 'all .2s linear'
                  }  } >{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq