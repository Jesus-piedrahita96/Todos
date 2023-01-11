import React from 'react'
import {TodoContext} from './TodoContext'
import '../css/App.css'

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const value = React.useContext(TodoContext)

  const onSubmit = (event) => {
    event.preventDefault()
    value.addTodo(newTodoValue)
    value.setOpenModal(false)
  }

  const onCancel = () => {
    value.setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return(
    <form className="formulario" onSubmit={onSubmit}>
      <label
        htmlFor="campo"
        className='headForm'
      >
        Crea un <strong>TODO</strong>
      </label>
      <textarea
        className='bodyForm'
        onChange={onChange}
        value={newTodoValue}
        name="campo"
        id="campo"
        cols="5"
        rows="5"
        placeholder='Escribe el todo'></textarea>
      <div className='botonForm'>
        <button
          className='button2'
          type="button"
          onClick={onCancel}
        > Cancelar</button>
        <button
          className='button'
          type="submit"
          onClick={onSubmit}
        >Crear</button>
      </div>
    </form>
  )
}

export {TodoForm}