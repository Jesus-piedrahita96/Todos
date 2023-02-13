import React from 'react'
import axios from 'axios'
// import { usePostApi } from './usePostApi'
import { useLocalStorage } from '../components/useLocalStorage'


//Obtiene los datos de una api y los envia al localStorage
function useGetApi(api) {
  const { saveItem } = useLocalStorage('TODOS_V2', [])
  const [data, setdata] = React.useState([])

  React.useEffect(() => {
    setTimeout(async () => {
      const response = await axios(api)
      saveItem(response.data)
      setdata(response.data)

    }, 1500);

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ api])

  return data
}

export { useGetApi }