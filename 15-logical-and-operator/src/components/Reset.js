import Button from '../components/Button'
import App from '../App'

const buttonStyle = { backgroundColor: 'lightgreen' }

function Reset() {
  count > 0 && (
    <div>
      <button style={buttonStyle} onClick={resetCount}>
        Reset
      </button>
    </div>
  )
}

export default Reset
