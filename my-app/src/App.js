
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


/* 
======== useState =========
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
*/


/*

========== useRef ==========

Exemplo 1:

import { useEffect, useState, useRef } from 'react'

const App = () => {
  const [name, setName] = useState("");

  const renders = useRef(0)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      
      <p>Hello! My names is {name}</p>
      <p>Renders: {renders.current}</p>
    </div>
  )
}

export default App;

---------------------------------------------------
Exemplo 2 (Referenciar elementos HTML):

import { useEffect, useState, useRef } from 'react'

const App = () => {
  const [name, setName] = useState("");

  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <p>Hello! My names is {name}</p>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default App;

-------------------------------------------------
Exemplo 3 (guardar o valor anterior do state):

*/

/*
import { useEffect, useState, useRef } from 'react'

const App = () => {
  const [name, setName] = useState("");

  const previousName = useRef()

  useEffect(() =>{
    previousName.current = name
  }, [name])

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <p>Hello! My names is {name}</p>
      <p>And my name was {previousName.current}</p>

    </div>
  )
}

export default App; */



