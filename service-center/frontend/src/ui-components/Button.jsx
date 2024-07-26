import styles from './Button.module.css'

const Button = ({className, onClick, buttonText}) => {
    return (
        <>
            <button  className={`${styles.button} ${className}`} onClick={onClick}>{buttonText}</button>
        </>
    )
}
export default Button