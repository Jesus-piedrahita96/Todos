import axios from "axios";


function useDelete() {

  const eliminar = (api, id) => {
    axios.delete(`${api}${id}/`)
      .catch(error => console.log(error))
      .finally(() => console.log('finalizado'))
  }

  const crud = {eliminar}
  return crud
}

export {useDelete}