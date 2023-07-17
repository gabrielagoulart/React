
/* 
========= useState =========
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')

  const IncrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={IncrementCount}>Incremet</button>
    </div>
  )
  
}

export default App;
*/


import { useState, useEffect } from 'react';
 
const App = () => {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState('posts')

   useEffect (() => {
    const fetchResourceTypes = async () => {

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      
      const responseJSON = await response.json();

        setItems(responseJSON)  
    }

    fetchResourceTypes();
   }, [resourceType])

   

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType)
  }

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: "flex", alignItems: "center"}}>

      <button onClick={() => changeResourceType("posts")}>Posts</button>

      <button onClick={() => changeResourceType("comments")}>Comments</button>

      <button onClick={() => changeResourceType("todos")}>Todos</button>

      </div>

      {items.map((item) => (
        <p>{item.id}</p>
      ))}
    </div>
  )
}

export default App;


