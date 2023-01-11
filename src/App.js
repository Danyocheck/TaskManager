import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TaskList from './Task/TaskList'
import Context from './context'
import AddTasks from './Task/AddTasks'

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, completed: false, task: 'подготовиться к осям'},
    {id: 2, completed: false, task: 'подготовиться к матану'},
    {id: 3, completed: false, task: 'подготовиться к физике'},
  ])

  function toggleTodo(id) {
    setTasks(
      tasks.map(param => {
        if (param.id === id) {
          param.completed = !param.completed
        }
      return param
      })
    )
  }

  function removeTask(id) {
    setTasks(tasks.filter(tasks => tasks.id !== id))
  }

  function addTask(text) {
    setTasks(
      tasks.concat([
        {
          id: Date.now(),
          completed: false,
          task: text
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTask }}>
      <div className='wrapper'>
        <h1>Таск менеджер</h1>
        <AddTasks onCreate={addTask}/>
        <TaskList tasks={tasks} onToggle={toggleTodo}/>
      </div>
    </Context.Provider>
  )
}

export default App