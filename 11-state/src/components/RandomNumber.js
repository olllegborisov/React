import { useState } from 'react'
import generateRundomNum from '../utils/generateRundomNum'

function RandomNumber() {
  const [randomNum, setRandomNumber] = useState(generateRundomNum())

  const changeRandomNum = () => {
    setRandomNumber(generateRundomNum())
  }
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber
