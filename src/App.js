function App() {
  const date = new Date()
  const hour = date.getHours()
  let timeOfDay

  if (hour < 12) {
    timeOfDay = 'Morning'
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = 'Afternoon'
  } else {
    timeOfDay = 'Evening'
  }

  return (
    <div>
      <h1>good {timeOfDay}</h1>
    </div>
  )
}

export default App
