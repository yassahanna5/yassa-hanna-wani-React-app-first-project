import React from 'react';
import { useState } from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Product from "./Product";


   
 
function App() {
  let [count, setCount] = useState(0)

  

  return (
    
      
      <div>
        <button onClick={() => setCount((count) => count +1)}>
          count increment {count}
        </button>
        <br></br>
        <br></br>
        <button onClick={() => setCount((count) => count -1)}>
          count decrement {count}
        </button>
         <Product />
        <Home />
        <About />
        <Contact />
        
      </div>
    
  )
}
export default App;


