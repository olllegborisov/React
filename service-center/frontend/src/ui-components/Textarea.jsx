import styles from './Textarea.module.css'

const TextArea = ({register, errors, required,  stylesForm, placeholder}) => {
    const textField = register.name
  return (
    <div className={styles.inputWrapper}>
        <textarea  cols="30" rows="10"  {...register} className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`} placeholder={placeholder}></textarea>
        <p   className={styles.error}>{errors[textField]?.message}</p>
    </div>
  )
}

export default TextArea