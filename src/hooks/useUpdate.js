import axios from "axios";

function useUpdate() {

  const update = (api, id, text) => {
    axios.put(`${api}${id}/`, {
      text: text
    }).then(response => console.log(response))
      .catch(error => console.log(error))
      .finally(() => console.log('finalizado'))
  }

  const crud = {update}
  return crud
}

export {useUpdate}