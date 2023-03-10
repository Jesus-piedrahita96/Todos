import React from "react"


function useLocalStorage(itemName, initialValue) {
  //estados
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [ item, setItem ] = React.useState(initialValue)

  //funcion que actualiza el localStorage y el estado de todo
  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifyItem)
      setItem(newItem)

    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  React.useEffect(() => {

    setTimeout(() => {
      try {
        let parsedItem
        const localStorageItem = localStorage.getItem(itemName)

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]))
          parsedItem = []

        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }, 2000);
  }, [itemName])

  return {
    item,
    saveItem,
    loading,
    setLoading,
    error,
  }
}

export {useLocalStorage}