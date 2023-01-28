import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "./TodoContext";

function EditTodo() {
  const localDataStorage = useContext(TodoContext)
  const {id} = useParams()
  const local = localDataStorage.searchTodo.find(todo => todo.id == id)
  const [data, setData] = React.useState({
    text: local.text,
    completed: local.completed,
    id: local.id
  })
  const navigate = useNavigate()

  const editar = (event) => {
    event.preventDefault()
    localDataStorage.onEditar(data)
    navigate('/')
  }

  const escuchador = (event) => {
    setData({...data, text:event.target.value})
  }

  return(
    <>
      <h2>EDITAR TODO</h2>
      <form onSubmit={editar}>
        <label htmlFor="uid">id</label>
        <input id="uid" value={data.id} disabled/>
        <br/>
        <label htmlFor="text">Text</label>
        <input id="text" value={data.text} onChange={escuchador}/>
        <br/>
        <button type="submit">Editar</button>
        <button onClick={() => navigate('/')}>Regresar</button>
      </form>
    </>
  )
}

export {EditTodo}