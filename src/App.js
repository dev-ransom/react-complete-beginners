function App() {
  const date = new Date()
  const hour = date.getHours()
  let timeOfDay

  if (hour < 12) {
    timeOfDay = 'Morning'
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'Evening'
  }

  return (
    <div>
      <h1 style={{ color: 'blue', background: 'red', padding: '20px'}}>good {timeOfDay} it's currently { hour % 12} O'clock</h1>
    </div>
  )
}

export default App
