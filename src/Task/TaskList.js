import React from "react"
import TaskViewer from "./TaskViewer"

function TaskList(props) {
    return (
        <div>
            {props.tasks.map(tasks => {
                return (
                    <TaskViewer
                        tasks={tasks}
                        key={tasks.id}
                        onChange={props.onToggle}
                    />
                )
            })}
        </div>
    )
}

export default TaskList