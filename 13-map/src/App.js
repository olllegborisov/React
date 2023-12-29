// .map нужен key иначе будет выдавать ошибку. так как здесь текст уникальный , мы можем использовать слово text для обозначение "key", если бы text не был
// уникальным мы не могли бы его так использовать. В ином случае нужно добавить второй параметр index. Можно использовать индекс но крайне рекомендуется
// использовать другое значение которое есть в массиве. По типо text. Этот ключ нужен для того что бы быстрее совершать обновления в виртуальном DOM  и реальном DOM

import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

const texts = ['Button1', 'Button2', 'Button3', 'Button4', 'Button5', 'Button6']

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />
      })}
      {/* 
      Код ниже равносилен коду .map
      {[ 
        <Button onClick={incrementCount} text={texts[0]} />,
        <Button onClick={incrementCount} text={texts[1]} />,
        <Button onClick={incrementCount} text={texts[2]} />,
        <Button onClick={incrementCount} text={texts[3]} />,
        <Button onClick={incrementCount} text={texts[4]} />,
        <Button onClick={incrementCount} text={texts[5]} />,
      ]} */}
    </div>
  )
}

export default App
