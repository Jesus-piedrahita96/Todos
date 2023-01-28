//import './App.css';
import React from "react";
import { AppUi } from "./components/AppUi"; //importacion del archivo appUi.js
import {TodoProvider} from "./components/TodoContext"
import { HashRouter, Route, Routes } from "react-router-dom";
import { NewTodo } from "./components/NewTodo";
import { EditTodo } from "./components/EditTodo";

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
    <HashRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<AppUi/>}/>
          <Route path="/newtodo" element={<NewTodo />} />
          <Route path="/edittodo/:id" element={<EditTodo />} />
        </Routes>
    </TodoProvider>
    </HashRouter>
  );
}

export default App
