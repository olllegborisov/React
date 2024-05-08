import './App.css'
import Test from './components/Test'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Info />
      {/* {CSS rule from the Info CSS module doesn't work here} */}
      <div childrenclassName="info">
        <h1>App component heading</h1>
        <h2>Heading in the Info component</h2>
        <button className="my-button">App component heading</button>
      </div>
      <Test />
    </div>
  )
}

export default App
