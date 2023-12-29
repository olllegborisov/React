import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNum'

function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNumber] = useState(generateRandomNum(maxNum))
  const changeRandomNum = () => {
    setRandomNumber(generateRandomNum(maxNum))
  }
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber
