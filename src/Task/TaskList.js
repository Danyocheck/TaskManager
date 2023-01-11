import React from "react"
import TaskViewer from "./TaskViewer"

function TaskList(props) {
    return (
        <div>
            {props.tasks.map(tasks => {
                return (
                    <TaskViewer tasks={tasks} key={tasks.id}/>
                )
            })}
        </div>
    )
}

export default TaskList