import React from 'react'

function useAddLocalStorage() {

  const add = ((name, data) => {
    const jsonString = JSON.stringify(data)
    localStorage.setItem(name, jsonString)

  })

  const get = () => {
    const data = JSON.parse(localStorage.getItem('TODOS_V2'))
    return data
  }

  const data = { add, get }
  return data
}

export { useAddLocalStorage }