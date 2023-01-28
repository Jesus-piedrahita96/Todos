import React from 'react'
import '../css/App.css'

function TodoMain({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}

export { TodoMain }