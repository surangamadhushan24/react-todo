import { useState } from "react";
import './App.css';
import Form from "./form";


export default function App() {


  const [todos, setTodos] = useState([]);


  function create(title) {

    setTodos(previousTodos => {
      return [...previousTodos, { id: crypto.randomUUID(), title, completed: false }]
    });

  }

  function deleteItem(id) {
    setTodos(currenttodos => {
      return currenttodos.filter(todo => {
        return todo.id !== id;
      })
    })
  }

  return (
    <div className="all">
      {/* app componnet */}
      <h1 className="header">To Do List</h1>
      {/* form componnet */}
      <Form onSubmit={create} />
      {/* list componnet */}
      <ul>
        {/* list item component */}
        
        {todos.map((todo) => (
          
          <li key={todo.id}>
            <div className="list">
            <span>{todo.title}</span>

            <button onClick={() => {
              deleteItem(todo.id)
            }}>Delete</button>
            </div>
          </li>
          

        ))}
        
       
      </ul>
    </div>
  );
}