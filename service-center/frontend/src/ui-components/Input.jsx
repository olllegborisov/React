import styles from '../ui-components/Input.module.css'

const Input = ({register, errors, required, placeholder, className }) => {
    const inputName = register.name
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
        <input className={styles.input}  placeholder={placeholder} {...register}/>
        <p className={styles.error}>{errors[inputName]?.message}</p>
    </div>
  )
}

export default Input