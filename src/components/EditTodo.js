import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "./TodoContext";
import swal from "sweetalert";

function EditTodo() {
  const localDataStorage = useContext(TodoContext)
  const {id} = useParams()
  const num = Number(id)
  const local = localDataStorage.searchTodo.find(todo => todo.id === num)

  const [data, setData] = React.useState({
    text: local.text,
    completed: local.completed,
    id: local.id
  })
  const navigate = useNavigate()

  const editar = (event) => {
    swal({
      icon : 'info',
      text: 'Seguro quiere editar',
      buttons: true
    }).then(response => {
      if(response){
        swal({
          text:'editado con exito',
          icon: 'success',
          buttons: false,
          timer: 2000
        })
        event.preventDefault()
        localDataStorage.onEditar(data)
        navigate('/')
      }else{
        swal({text:'No se edito el TODO', buttons: false, timer:2000})
      }
    })
  }

  const escuchador = (event) => {
    setData({...data, text:event.target.value})
  }

  return(
    <>
      <div className="content-edit">
        <h2 className="content-edit__title">EDITAR TODO</h2>
        <form
          className="content-edit__form"
          onSubmit={editar}
        >
          <input
            className="content-edit__effect"
            id="uid"
            value={data.id}
            disabled
          />
          <input
            className="content-edit__effect"
            id="text"
            value={data.text}
            onChange={escuchador}
          />
          <div className="content-edit__form-button">
            <button
              className='button2'
              onClick={() => navigate('/')}
            >Regresar</button>
            <button className="button" type="submit">Editar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export {EditTodo}