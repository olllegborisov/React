import persons from '../data/persons'

function Person({ id }) {
  {
    persons.map((person) => {
      return <h1>{person.id}</h1>
    })
  }
}

export default Person
