
import axios from "axios";

function usePostApi() {

  const postFuntion = (text, api) => {
    setTimeout(() => {
      axios.post(api, {text: text})
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        .finally(() => console.log('finalizado'))

    }, 2000);
  }

  const crud = { postFuntion }
  return crud
}

export { usePostApi }