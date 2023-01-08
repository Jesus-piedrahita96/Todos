//import './App.css';
import React from "react";
import './App.css'
import { TodoCounter } from "./TodoCounter";
import { TodoItem} from "./TodoItem";
import { CreateTodoButton } from "./TodoButton";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";

const todos = [
  {text:'cebolla', completed: false},
  {text:'tomate', completed: false},
  {text:'papa', completed: false},
  {text:'zanahoria', completed: false},
  {text:'coliflor', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <header>
        <TodoCounter />
        <TodoSearch />
      </header>
      <main>
        <TodoList>
          {todos.map(todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </main>
    </React.Fragment>
  );
}

export default App;
