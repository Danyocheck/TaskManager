import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TaskList from './Task/TaskList'

function App() {
  const tasks = [
    {id: 1, completed: false, task: 'подготовиться к осям'},
    {id: 2, completed: false, task: 'подготовиться к матану'},
    {id: 3, completed: false, task: 'подготовиться к физике'},
  ]
  return (
    <div className='wrapper'>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App