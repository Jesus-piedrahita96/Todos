import React from "react";
import './App.css'

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export {TodoList}