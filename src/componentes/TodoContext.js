import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  //estado del buscador
  const [ searchValue, setSearchValue ] = React.useState('')
  //estado del modal
  const [ openModal, setOpenModal ] = React.useState(false)
  //filtra la cantidad de todos verdaderos
  const completedTodos = todos.filter(todo => !!todo.completed).length
  //cuenta la cantidad de todos que hay sin importar si es verdadero o falso
  let totalTodos = todos.length
  let searchTodo = []

  //validacion del input de busqueda
  if (searchValue <= 0) { //si no hay nada
    searchTodo = todos // muestre todos los todos
  } else { // si no
    //realice la filtracion de datos que hay en el buscador
    searchTodo = todos.filter(todo => {
      //convierte en el texto en minusculas que hay en el objeto
      const todoText = todo.text.toLowerCase()
      //convierte en minisculas el texto que hay en el buscador
      const searchText = searchValue.toLowerCase()

      //retorna los datos que busca dentro de texto si hay algun dato que
      //coincida con el texto que hay en el buscador
      return todoText.includes(searchText)
      //return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  //funcion que da por completado el todo
  const completeTodo = (text) => {
    //devuelve la posicion del dato que se busca (indice)
    let todoIndex = todos.findIndex(todo => todo.text === text)
    //se crea una copia de los datos del todo
    let aux = [ ...todos ]
    //una vez encuentre la posicion reasigna un valor por true
    aux[ todoIndex ].completed = true
    //se pasa los nuevos datos para que se guarden en el localStorage y se actualice el estado
    saveTodos(aux)
  }

  //funcion para eliminar todos
  const deleteTodo = (text) => {
    //devuelve la posicion de los datos que se buscan
    let todoIndex = todos.findIndex(todo => todo.text === text)
    //crea una copia de los todos
    let aux = [ ...todos ]
    //si la posicion que se encontro es verdadero
    if (aux[ todoIndex ].completed) {
      //recorta la posicion y solo se elimina un puesto apartir del valor de la
      aux.splice(todoIndex, 1) //posicion que se le indico
      //se envian los nuevos datos para que se guarden en el
      saveTodos(aux) //localStorage y se actualice el estado de todos
    } else { //si no
      //arroja una alerta de error
      alert('Error solo puede borrar los todo completados')
    }
  }

  const addTodo = (text) => {
    const aux = [...todos]
    aux.push({
      text: text,
      completed: false
    })
    saveTodos(aux)
  }

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