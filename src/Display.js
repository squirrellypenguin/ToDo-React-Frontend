import React from "react";

const Display = (props) => {
  const {todos } = props
  const loaded = () => (
    <div style={{textAlign: "center"}}>
      {todos.map((dog) => (
       <article key={dog._id}>
       <img src={dog.img}/>
       <h1>{dog.name}</h1>
       <h3>{dog.age}</h3>
       <button onClick={() => {
            props.selectDog(dog)
            props.history.push("/edit")
          }}>
            edit
          </button>
          <button onClick={() => {
            props.deleteDog(dog)
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