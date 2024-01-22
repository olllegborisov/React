import styles from './Test.module.css'

function Test() {
  return (
    <div className={styles.test}>
      <h1>Hello from the Test Component</h1>
      <input className={styles.inputBoxShadow} type="text"></input>
      <button className={styles.buttonTest}>Click</button>
    </div>
  )
}

export default Test
