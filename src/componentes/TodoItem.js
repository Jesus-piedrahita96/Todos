import React from "react";
import '../css/App.css'

function TodoItem(props) {

  //const [ estado, setestado ] = React.useState()

  // const onComplete = () => {
  //   alert(`ya completo el todo ${props.text}`)
  //   setestado()
  // }

  // const onDelete = () => {
  //   alert(`estas eliminando el todo ${props.text}`)
  // }

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
        className="cancelar efecto"
        onClick={props.onDelete}
      ></span>
    </li>
  )
}

export { TodoItem }