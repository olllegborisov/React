import './App.css'
import persons from './data/persons'
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person id={persons.id}/>
    </div>
  )
}

export default App
