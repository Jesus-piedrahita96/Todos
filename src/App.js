//import './App.css';
import React from "react";
import { AppUi } from "./componentes/AppUi"; //importacion del archivo appUi.js
import {TodoProvider} from "./componentes/TodoContext"

// const defaultTodos = [
//   { text: 'cebolla', completed: false },
//   { text: 'tomate', completed: false },
//   { text: 'papa', completed: false },
//   { text: 'zanahoria', completed: false },
//   { text: 'coliflor', completed: false },
//   { text: 'papaya', completed: false },
//   { text: 'cachama', completed: false }
// ]

function App() {

  //retorna el componente para que se renderice y envia parametros
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App
