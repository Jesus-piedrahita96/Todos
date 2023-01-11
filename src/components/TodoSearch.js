import React from "react";
import { TodoContext } from "./TodoContext";
import '../css/App.css'


function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearch = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input
    className="search"
    placeholder="Buscar"
    value={searchValue}
    onChange={onSearch}
    />
  )
}

export {TodoSearch}