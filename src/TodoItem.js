import React from "react";
import './App.css'

function TodoItem(props) {

  const onComplete = () => {
    alert(`ya completo el todo ${props.text}`)
  }

  const onDelete = () => {
    alert(`estas eliminando el todo ${props.text}`)
  }

  return (
    <li>
      <span
      className="aceptar efecto"
      onClick={onComplete}
      ></span>
      <p className={`${props.completed && 'completed-line'}`}>
        {props.text}
      </p>
      <span
      className="cancelar efecto"
      onClick={onDelete}
      ></span>
    </li>
  )
}

export {TodoItem}