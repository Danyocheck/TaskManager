import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TaskList from './TaskList'
import Context from '../../context'
import AddTasks from './AddTasks'

function TaskManager() {
  const [tasks, setTasks] = useState([])

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
        <TaskList tasks={tasks} onToggle={toggleTodo} setTasks={setTasks}/>
    </div>
    </Context.Provider>
  )
}

export default TaskManager