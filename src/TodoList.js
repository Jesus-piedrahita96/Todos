import React from "react";
import './css/App.css'

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