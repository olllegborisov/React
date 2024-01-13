import persons from '../data/persons'
import Person from '../components/Person.js'

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}

export default Persons
