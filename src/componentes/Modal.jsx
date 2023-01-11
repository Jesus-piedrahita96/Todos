import  ReactDOM  from "react-dom"
import '../css/App.css'

function Modal(props){
  return ReactDOM.createPortal(
    props.children,
    document.getElementById('modal')
  )
}

export {Modal}