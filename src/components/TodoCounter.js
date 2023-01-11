import React from "react";
import { TodoContext } from "./TodoContext";
import '../css/App.css'


function TodoCounter() {
  const value = React.useContext(TodoContext)

  return (
    <h2 className="title">
      Has completado {value.completedTodos} de {value.totalTodos} Todos
    </h2>
  )
}

export {TodoCounter}