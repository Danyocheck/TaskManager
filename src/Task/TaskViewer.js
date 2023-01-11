import React from "react"

const styles = {
    span: {
        display: 'flex',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    p: {
        marginRight: '10rem'
    }
}

function TaskViewer({ tasks }) {
    return (
        <span style={styles.span}>
            <p style={styles.p}>{tasks.task}</p>
            <input type="checkbox"/>
            <button>&times;</button>
        </span>
    )
}

export default TaskViewer