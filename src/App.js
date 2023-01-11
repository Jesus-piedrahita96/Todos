//import './App.css';
import React from "react";
import { AppUi } from "./componentes/AppUi"; //importacion del archivo appUi.js

// const defaultTodos = [
//   { text: 'cebolla', completed: false },
//   { text: 'tomate', completed: false },
//   { text: 'papa', completed: false },
//   { text: 'zanahoria', completed: false },
//   { text: 'coliflor', completed: false },
//   { text: 'papaya', completed: false },
//   { text: 'cachama', completed: false }
// ]

function useLocalStorage(itemName, initialValue) {
  //estado de carga
  const [loading, setLoading] = React.useState(true)
  //estado de error
  const [error, setError] = React.useState(false)
  //estado de los todos
  const [ item, setItem ] = React.useState(initialValue)

  //funcion que actualiza el localStorage y el estado de todo
  const saveItem = (newItem) => {
    try {
      //variable que almacena un json en formato de string
      //que se le pasa por parametro
      const stringifyItem = JSON.stringify(newItem)
      //se almacena la variable anterior en el localStorage
      localStorage.setItem(itemName, stringifyItem)
      //actualiza el estado de todo con el parametro que se le pase
      setItem(newItem)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem //variable que almacena los datos final del localStorage
        //variable que almacena los datos que obtiene del localStorage
        const localStorageItem = localStorage.getItem(itemName)

        //validacion del localStorage
        if (!localStorageItem) { //si no hay datos que entre aca
          //asignacion de datos en un array nuevo
          localStorage.setItem(itemName, JSON.stringify([]))
          parsedItem = []
        } else { // si no
          // se muestran los datos que estan actualmente
          // convierte el json que esta en cadena de nuevo a su estado original
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }, 1000);
  })

  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App() {
  const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V1', [])
  //estado del buscador
  const [ searchValue, setSearchValue ] = React.useState('')
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

  //retorna el componente para que se renderice y envia parametros
  return (
    <AppUi
      loading={loading}
      error={error}
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

export default App
