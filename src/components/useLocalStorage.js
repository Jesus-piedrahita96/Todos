import React from "react"


function useLocalStorage(itemName, initialValue) {
  //estados
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
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

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

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
        setSincronizedItem(true);
      }
    }, 2000);
  }, [])

  return {
    item,
    saveItem,
    loading,
    setLoading,
    error,
    sincronizeItem,
  }
}

export {useLocalStorage}