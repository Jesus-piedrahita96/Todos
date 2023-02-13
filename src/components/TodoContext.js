import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { usePostApi } from "../hooks/usePostApi";
import { useDelete } from "../hooks/useDelete";
import { useUpdate } from "../hooks/useUpdate";
import swal from "sweetalert";

const TodoContext = React.createContext()


function TodoProvider(props) {

  //recibiendo datos de la funcion de localStorage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronizeItem: sincronizeTodos,
  } = useLocalStorage('TODOS_V2', [])
  const API = 'http://localhost:8000/api/todos/'
  const post = usePostApi()
  const deleted = useDelete()
  const update = useUpdate()

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
  const completeTodo = (id) => {
    let todoIndex = todos.findIndex(todo => todo.id === id)
    let aux = [ ...todos ]
    aux[ todoIndex ].completed = true
    saveTodos(aux)
  }


  //funcion para eliminar todos
  const deleteTodo = (id) => {
    let todoIndex = todos.findIndex(todo => todo.id === id)
    let aux = [ ...todos ]

    if (aux[ todoIndex ].completed) {
      swal({
        icon: 'warning',
        text: 'Seguro quiere eliminar el TODO',
        buttons: true,
        dangerMode: true
      }).then(response => {
        if (response) {
          aux.splice(todoIndex, 1)
          saveTodos(aux)
          deleted.eliminar(API, id)
          swal({
            text: 'Eliminado con exito',
            icon: 'success',
            buttons: false,
            timer: 1800
          })
        }
      }).catch(error => console.log(error))
        .finally(() => console.log('finalizado'))

    } else {
      swal({
        icon: 'error',
        text: 'Error solo puede borrar los todo completados',
        buttons: false,
        timer: 1800
      })
    }
  }

  //funcion para agregar mas items
  const addTodo = (text) => {
    const aux = [ ...todos ]
    aux.push({
      text: text,
      completed: false
    })

    saveTodos(aux)
    post.postFuntion(text, API
    )
  }


  //editar todos
  const onEditar = (todo) => {
    const aux = [ ...todos ]
    const indice = aux.findIndex(data => data.id === todo.id)
    if (aux[ indice ]) {
      aux[ indice ].text = todo.text
      saveTodos(aux)
      update.update(API, todo.id, todo.text)
    } else {
      swal({
        icon: 'error',
        text: 'no se pudo realizar la actualizacion',
        buttons: false,
        timer: 1500
      })
    }
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
      addTodo,
      sincronizeTodos,
      onEditar,
      saveTodos
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

// function generatorIds(todos) {
//   if (!todos.length) {
//     return 1
//   } else {
//     const id = todos.map(todo => todo.id)
//     const cont = Math.max(...id)
//     return cont + 1
//   }
// }

export { TodoContext, TodoProvider }