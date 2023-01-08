import React from "react";
import './App.css'


function TodoSearch() {

  const onSearch = (event) => {
    console.log(event.target.value)
  }
  return (
    <input
    className="search"
    placeholder="Buscar"
    onChange={onSearch}
    />
  )
}

export {TodoSearch}