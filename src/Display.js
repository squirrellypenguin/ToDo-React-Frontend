import React from "react";

const Display = (props) => {
  const {todos } = props
  const loaded = () => (
    <div style={{textAlign: "center"}}>
      {todos.map((todo) => (
       <article key={todo._id}>
       
       <h1>{todo.name}</h1>
       <h3>{todo.body}</h3>
       <h3>{todo.done}</h3>
       <button onClick={() => {
            props.selectTodo(todo)
            props.history.push("/edit")
          }}>
            edit
          </button>
          <button onClick={() => {
            props.deleteTodo(todo)
          }}>
            Delete
          </button>
     </article>
      ))}
    </div>
  )  
  const loading = () => {
   return  <h1> Loading . . . .</h1>
    }
    
  return todos.length > 0 ? loaded() : loading() 
};

export default Display;