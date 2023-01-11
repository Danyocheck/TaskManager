import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const style = {
  border: '1px solid black'
}

function Table() {
  const [text, setText] = useState('Введите текст')
  const [isEdit, setIsEdit] = useState(true)
  const [texts, setTexts] = useState([])

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = () => {
    let newText = text
    setTexts((prevTexts) => [...prevTexts, newText])
  }

  const saveClick = (oldText, newText) => {
    let newDocs = texts.map((tex) => {
      if (tex.title === oldText) {
        tex.title = newText
      }
      return tex
    })
    setTexts(newDocs)
  }

  return (
    <div className="wrapper">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Заголовок 1</th>
              <th>Заголовок 2</th>
              <th>Заголовок 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">Содержимое ячейки</td>
              <td colspan="2">Содержимое ячейки</td>
            </tr>
            <tr>
              <td>Содержимое ячейки</td>
              <td>Содержимое ячейки</td>
            </tr>
            <tr class="success">
              <td>Содержимое ячейки</td>
              <td rowspan="2">Содержимое ячейки</td>
            </tr>
            <tr>
              <td colspan="2">Содержимое ячейки</td>
            </tr>
          </tbody>
        </table>
        <div>
        <h1 class="text-center">
          Таск менеджер
        </h1>
        <input type="text" name="name"/>
        <button></button>
        <p class="text-start">Текст с выравниванием по левому краю для всех размеров области просмотра.</p>
        <p class="text-center">Выровненный по центру текст на всех размерах области просмотра.</p>
        <p class="text-end">Текст с выравниванием по правому краю для всех размеров области просмотра.</p>

        <p class="text-sm-start">Выровненный по левому краю текст на размерных области просмотра SM (маленький) или шире.</p>
        <p class="text-md-start">Выровненный по левому краю текст на размерных области просмотра MD (средний) или шире.</p>
        <p class="text-lg-start">Выровненный по левому краю текст на размерных области просмотра LG (большой) или шире.</p>
        <p class="text-xl-start">Выровненный по левому краю текст на размерных области просмотра XL (очень большой) или шире.</p>

        <p class="fs-1">.fs-1 text</p>
        <p class="fs-2">.fs-2 text</p>
        <p class="fs-3">.fs-3 text</p>
        <p class="fs-4">.fs-4 text</p>
        <p class="fs-5">.fs-5 text</p>
        <p class="fs-6">.fs-6 text</p>
      </div>



      {isEdit ? (
        <input
        value={text}
        onFocus={() => {
          if (text === 'Введите текст')
            setText('')
        }}
        onChange={handleTextChange}
        onBlur={() => {
          if (text === '')
            setText('Введите текст')
        }}
        />
      ) :
        <div onClick={() => setIsEdit(true)}></div>
      }
      <button style={style} onClick={handleClick}>+</button>
    </div>
  );
}

export default Table