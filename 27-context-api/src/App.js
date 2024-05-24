import { useState } from 'react'
import UserContext from './context/UserContext'
import User from './components/User'
import './App.css'

function App() {
  const [user, setUser] = useState('Oleg')

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <User />
      </div>
    </UserContext.Provider>
  )
}

export default App
