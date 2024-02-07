import { useState } from 'react'

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
  console.log(text);

  return (
    <form onSubmit={onSubmitHandler}>
      <input name="text" type="text" placeholder="Enter new todo" />
      <button type="submit">Submit</button>
    </form>
  )
}
export default TodoForm
