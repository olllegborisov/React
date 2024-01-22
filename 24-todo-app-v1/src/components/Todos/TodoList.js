import Todo from './Todo'

function TodoList({ todos }) {
  return todos.map((todo, index) => <Todo ley={index} todo={todo} />)
}

export default TodoList
