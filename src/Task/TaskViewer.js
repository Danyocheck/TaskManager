import React, {useContext} from "react"
import Context from "../context"

const styles = {
    span: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem',
        padding: '5rem',
    },
}

function TaskViewer({ tasks, onChange }) {
    const {removeTask} = useContext(Context)
    const classes = []

    if (tasks.completed) {
        classes.push('done')
    }

    return (
        <span className={classes.join(' ')} style={styles.span}>
            <p>{tasks.task}</p>
            <div>
                <input
                    style={styles.input}
                    type="checkbox"
                    checked={tasks.completed}
                    onChange={() => onChange(tasks.id)}/>
                <button className="rm" onClick={removeTask.bind(null, tasks.id)}>&times;</button>
            </div>
        </span>
    )
}

export default TaskViewer