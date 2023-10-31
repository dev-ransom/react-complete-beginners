import Joke from './Joke'
import jokesData from './jokesData';
function App() {

  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.punchLine} punchLine={joke.punchLine} />)
  return (
    <div className="Jokes">
      {jokeComponents}
    </div>
  )
}

export default App

