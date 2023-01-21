import React, {useState} from "react"
import TaskViewer from "./TaskViewer"

function TaskList(props) {
    const [currentTask, setCurrentTask] = useState({})

    function dragStartHandler(e, todo) {
        setCurrentTask(todo)
    }

    function dragLeaveHandler(e) {
        
    }

    function dragEndHandler(e) {
        
    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    function dragDrop(e, todo) {
        e.preventDefault()
        props.setTasks(props.tasks.map(old_tasks => {
            if (old_tasks.id === todo.id) {
                return {...old_tasks, id: currentTask.id}
            }
            if (old_tasks.id === currentTask.id) {
                return {...old_tasks, id: todo.id}
            }
            return old_tasks
        }))
    }

    const sortTasks = (a, b) => {
        if (a.id > b.id) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div>
            {props.tasks.sort(sortTasks).map(tasks => {
                return (
                    <TaskViewer
                        tasks={tasks}
                        key={tasks.id}
                        onChange={props.onToggle}
                        dragStartHandler={dragStartHandler}
                        dragLeaveHandler={dragLeaveHandler}
                        dragEndHandler={dragEndHandler}
                        dragOverHandler={dragOverHandler}
                        dragDrop={dragDrop}
                    />
                )
            })}
        </div>
    )
}

export default TaskList