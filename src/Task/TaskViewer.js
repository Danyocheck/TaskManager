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
        marginBottom: '.5rem',
        cursor: 'grab'
    },
    input: {
        marginRight: '1rem',
        padding: '5rem',
    },
}

function TaskViewer({ tasks, onChange, dragStartHandler, dragLeaveHandler, dragEndHandler, dragOverHandler, dragDrop }) {
    const {removeTask} = useContext(Context)
    const classes = []

    if (tasks.completed) {
        classes.push('done')
    }

    return (
        <span
            onDragStart={e => dragStartHandler(e, tasks)}  // схватили
            onDragLeave={e => dragLeaveHandler(e)} // вышли за границы области над которой держали объект
            onDragEnd={e => dragEndHandler(e)} // отпустили
            onDragOver={e => dragOverHandler(e)} // нааходимся над другим объектом
            onDrop={e => dragDrop(e, tasks)} // отпустили карточку, хотим чтобы произошло какое-то связанное с этим действие
            className={classes.join(' ')}
            style={styles.span}
            draggable={true}>
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