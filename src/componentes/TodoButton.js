import React from "react";
import { TodoContext } from "./TodoContext";
import '../css/App.css'

function CreateTodoButton(props) {
  const value = React.useContext(TodoContext)

  const onModal = () => {
    value.setOpenModal(state => !state)
  }

  return (
    <button
      className="boton"
      onClick={onModal}
    >
      +
    </button>
  )
}

export {CreateTodoButton}