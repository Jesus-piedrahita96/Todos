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
import { TodoHeader } from "./TodoHeader";
import { TodoMain } from "./TodoMain";


function AppUi(){
  const value = React.useContext(TodoContext)

  return (
    <>
      <TodoHeader>
        <TodoCounter/>
        <TodoSearch/>
      </TodoHeader>
      <TodoMain>
        <TodoList>
          {value.error && <p>Ocurrio un error, contactar tecnicos</p>}
          {value.loading && <div className="animation"></div>}
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
      </TodoMain>
    </>
  )
}

export {AppUi}