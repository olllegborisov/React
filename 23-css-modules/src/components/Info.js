import './Info.css'
import styles from './Info.module.css'

console.log(styles)

// {
//   "info": "Info_info__E8j0H",
//   "myOtherButton": "Info_myOtherButton__BgSZT"
// }

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading in the Info component</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className={styles.myOtherButton}>
        button with local CSS styles
      </button>
    </div>
  )
}

export default Info
