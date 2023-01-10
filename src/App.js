//import './App.css';
import React from "react";
import { AppUi } from "./AppUi";

const defaultTodos = [
  { text: 'cebolla', completed: false },
  { text: 'tomate', completed: false },
  { text: 'papa', completed: false },
  { text: 'zanahoria', completed: false },
  { text: 'coliflor', completed: false },
  { text: 'papaya', completed: false },
  { text: 'cachama', completed: false }
]

function App() {
  const [ todos, setTodos ] = React.useState(defaultTodos)
  const [ searchValue, setSearchValue ] = React.useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length
  let totalTodos = todos.length
  let searchTodo = []

  if (searchValue <= 0) {
    searchTodo = todos
  } else {
    searchTodo = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
      //return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  const completeTodo = (text) => {
    let todoIndex = todos.findIndex(todo => todo.text === text)
    let aux = [ ...todos ]
    aux[ todoIndex ].completed = true
    setTodos(aux)
  }

  const deleteTodo = (text) => {
    let todoIndex = todos.findIndex(todo => todo.text === text)
    let aux = [ ...todos ]
    if (aux[ todoIndex ].completed) {
      aux.splice(todoIndex, 1)
      setTodos(aux)
    } else {
      alert('Error solo puede borrar los todo completados')
    }
  }

  return (
    <AppUi
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodo={searchTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
