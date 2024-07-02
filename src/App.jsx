import './App.css'
import TaskList from './components/TaskList'

function App() {  
  return (
    <div className="App">
    <div className='tareas-lista-principal'>
      <h1>My tasks</h1>
      <TaskList/>
    </div>
  </div>
  )
}

export default App
