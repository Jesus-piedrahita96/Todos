import React from "react"


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

export {useLocalStorage}