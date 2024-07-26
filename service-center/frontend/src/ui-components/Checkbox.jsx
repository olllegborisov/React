import styles from './Checkbox.module.css'
import { Link } from 'react-router-dom';


const Checkbox = ({errors, register}) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox"  {...register('checkbox', {required: 'Поле обязательно для заполнения'})}  value="value"/>
      <span className={styles.checkboxText}><span href="/pages/personal-data.html">Я ознакомлен(а) с <Link className="link" to="/personalData">политикой конфиденциальности</Link> и даю согласие на обработку персональных данных</span></span>
      <p style={{top: '100%'}} className={styles.error}>{errors.checkbox?.message}</p>
    </label>
  )
}

export default Checkbox