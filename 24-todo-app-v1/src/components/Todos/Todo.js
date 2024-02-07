<<<<<<< HEAD
function Todo({ todo }) {
  return <div><button onClick={''}>{todo}</button></div>
=======
import { RiTodoFill } from 'react-icons/ri'

import styles from './Todo.module.css'

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
>>>>>>> 155a56149da106fdff18ccddeb52197fe999f2ea
}

export default Todo