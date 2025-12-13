import reactLogo from './assets/react.svg'
import './App.css'
import Task2 from './components/Task2'

function App() {
  return (
  <div className="App">
    <h1>Props Overview - `children` demo</h1>

    <Task2
      firstName="Hristo"
      lastName="Minchev"
      title="Student"
      image={reactLogo}
    >
      This is the "children" prop
    </Task2>
  </div>
)
}

export default App
