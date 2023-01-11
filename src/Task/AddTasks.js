import React, {useState} from "react"

function AddTasks({ onCreate }) {
    const [text, setText] = useState('Введите текст')
    const [isEdit, setIsEdit] = useState(true)

    function saveClick(event) {
        event.preventDefault()
        if (text !== 'Введите текст' && text.trim()) {
            onCreate(text)
            setText('Введите текст')
        }
    }

    return (
        <div>
            {isEdit ? (
                <input
                style={{
                    width: '557px',
                    alignItems: 'center',
                    padding: '.5rem 1rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: '.5rem',
                    marginRight: '1rem'}
                }
                value={text}
                onFocus={() => {
                    if (text === 'Введите текст')
                    setText('')
                }}
                onChange={(e) => setText(e.target.value)}
                onBlur={() => {
                    if (text === '')
                    setText('Введите текст')
                }}
                />
            ) :
                <div onClick={() => setIsEdit(true)}></div>
            }
            <button onClick={saveClick}>+</button>
        </div>
    )
}

export default AddTasks