import React from 'react'
import '../css/App.css'

function TodoHeader(props) {
  return (
    <header>
      {props.children}
    </header>
  )
}

export { TodoHeader }