import React from "react";
import '../css/App.css'
import { useNavigate } from "react-router-dom";

function TodoItem(props) {
  const navigate = useNavigate()
  const editar = () => {
    navigate(`/edittodo/${props.id}`)
  }

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
        onClick={editar}
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