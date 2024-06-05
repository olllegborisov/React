import UserContext from '../context/UserContext'
import { useContext, useState } from 'react'

function ChangeUser() {
  const { userName: userName, changeUserName: changeUserName } =
    useContext(UserContext)
  const [data, setData] = useState('')

  function handleInputChange(e) {
    setData(e.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    changeUserName(data)
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input onChange={(e) => handleInputChange(e)} />
        <button>Change user</button>
      </form>
    </>
  )
}

export default ChangeUser
