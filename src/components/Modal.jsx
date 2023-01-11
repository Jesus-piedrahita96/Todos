import  ReactDOM  from "react-dom"
import '../css/App.css'

//funcion para transportar nodo

function Modal(props){
  return ReactDOM.createPortal(
    props.children,
    document.getElementById('modal')
  )
}

export {Modal}