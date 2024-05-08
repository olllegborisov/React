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
<<<<<<< HEAD
  console.log(text);

  return (
    <form onSubmit={onSubmitHandler}>
      <input name="text" type="text" placeholder="Enter new todo" />
      <button type="submit">Submit</button>
    </form>
=======
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
>>>>>>> 155a56149da106fdff18ccddeb52197fe999f2ea
  )
}

export default TodoForm