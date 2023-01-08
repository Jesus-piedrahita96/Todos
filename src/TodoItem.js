import React from "react";


function TodoItem(props) {
  return (
    <li>
      <span></span>
      {props.text}
      <span></span>
    </li>
  )
}

export {TodoItem}