import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const inputText = event.target.text.value
    const text = [
      inputText
    ]
    console.log(text);
    addTodo(JSON.stringify(text[0]))
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
