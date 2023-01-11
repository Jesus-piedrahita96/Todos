import React from "react";
import '../css/App.css'


function TodoCounter(props) {
  return (
    <h2 className="title">
      Has completado {props.completed} de {props.total} Todos
    </h2>
  )
}

export {TodoCounter}