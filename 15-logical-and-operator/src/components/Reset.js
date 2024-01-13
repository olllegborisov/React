const buttonStyle = { backgroundColor: 'lightgreen' }

function Reset({ count, resetCount }) {
  return (
    <div>
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default Reset
