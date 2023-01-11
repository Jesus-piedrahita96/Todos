import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
  //recibiendo datos de la funcion de localStorage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  //declaracion de estados
  const [ searchValue, setSearchValue ] = React.useState('')
  const [ openModal, setOpenModal ] = React.useState(false)

  //contador del total de todos y todos completados
  const completedTodos = todos.filter(todo => !!todo.completed).length
  let totalTodos = todos.length

  let searchTodo = []

  //validacion del input de busqueda para filtrar datos
  if (searchValue <= 0) {
    searchTodo = todos

  } else {
    searchTodo = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  //funcion que da por completado el todo
  const completeTodo = (text) => {
    let todoIndex = todos.findIndex(todo => todo.text === text)
    let aux = [ ...todos ]
    aux[ todoIndex ].completed = true
    saveTodos(aux)
  }

  //funcion para eliminar todos
  const deleteTodo = (text) => {
    let todoIndex = todos.findIndex(todo => todo.text === text)
    let aux = [ ...todos ]

    if (aux[ todoIndex ].completed) {
      aux.splice(todoIndex, 1)
      saveTodos(aux)
    } else {
      alert('Error solo puede borrar los todo completados')
    }
  }

  //funcion para agregar mas items
  const addTodo = (text) => {
    const aux = [...todos]
    aux.push({
      text: text,
      completed: false
    })
    saveTodos(aux)
  }

  //retornando las variables a un estado global
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }