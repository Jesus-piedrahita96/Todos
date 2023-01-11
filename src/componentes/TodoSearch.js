import React from "react";
import '../css/App.css'


function TodoSearch({searchValue, setSearchValue}) {

  const onSearch = (event) => {
    console.log(event.target.value)
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