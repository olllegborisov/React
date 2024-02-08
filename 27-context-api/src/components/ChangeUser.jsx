import UserContext from '../context/UserContext'
import { useContext } from 'react'

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext)

  function handleFormSubmit(event) {
    event.preventDefault()
    changeUserName(event.target.username.value)
  }
  console.log(userName)

  return (
    <form onSubmit={handleFormSubmit}>
      <button type="submit">Change user</button>
      <input type="text" name="username"></input>
    </form>
  )
}

export default ChangeUser
