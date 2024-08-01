import styles from './Button.module.css'

const Button = ({className, onClick, buttonText, buttonStyles}) => {
    return (
        <>
            <button  style={buttonStyles} className={`${styles.button} ${className}`} onClick={onClick}>{buttonText}</button>
        </>
    )
}
export default Button