import React , {useState} from 'react'
import './App.css'

function App() {
  const [count , setCount] = useState(4)

function decrement (){
   setCount(previousCount  => previousCount - 1)
}
 function increment (){
  setCount(previousCount  => previousCount + 1)
 }

  return (
    <>
     <button onClick={decrement}>-</button>
     {count}
     <button onClick={increment}>+</button>
    </>
  )
}

export default App
