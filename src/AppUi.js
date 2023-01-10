import React from "react";
import './css/App.css';
import { TodoCounter } from './TodoCounter'
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./TodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";


function AppUi(props){
  return (
    <>
      <header>
        <TodoCounter
          total={props.totalTodos}
          completed={props.completedTodos}
        />
        <TodoSearch
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
        />
      </header>
      <main>
        <TodoList>
          {props.searchTodo.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => props.completeTodo(todo.text)}
              onDelete={() => props.deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </main>
    </>
  )
}

export {AppUi}