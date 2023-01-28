import React from "react";
import '../css/App.css'

function TodoItem(props) {

  return (
    <li>
      <span
        className="aceptar efecto"
        onClick={props.onComplete}
      ></span>
      <p className={`${props.completed && "completed-line"}`}>
        {props.text}
      </p>
      <span
        className="editar efecto"
        onClick={props.onEdit}
      >
      </span>
      <span
        className="cancelar efecto"
        onClick={props.onDelete}
      ></span>
    </li>
  )
}

export { TodoItem }