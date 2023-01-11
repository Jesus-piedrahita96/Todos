import React from "react";
import '../css/App.css';
import { TodoCounter } from './TodoCounter'
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./TodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";


function AppUi(){
  const value = React.useContext(TodoContext)

  return (
    <>
      <header>
        <TodoCounter/>
        <TodoSearch/>
      </header>
      <main>
        <TodoList>
          {value.error && <p>Ocurrio un error, contactar tecnicos</p>}
          {value.loading && <p>Estamos cargando, por favor espere</p>}
          {(!value.loading && !value.searchTodo.length && !value.error) && <p>Puede crear nuevos TODOS</p>}
          {value.searchTodo.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => value.completeTodo(todo.text)}
              onDelete={() => value.deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {value.openModal &&(
          <Modal>
            <TodoForm/>
          </Modal>
        )}
        <CreateTodoButton/>
      </main>
    </>
  )
}

export {AppUi}