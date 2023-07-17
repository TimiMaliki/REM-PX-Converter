import React , {useState} from 'react'
import './App.css'

function App() {

  const [setState , setUpdate] = useState({
    count: 4 , theme: "Red"
  })

  const count = setState.count
  const  theme = setState.theme

function decrement (){
  //  setCount(previousCount  => previousCount - 1)

  setUpdate(prevState => {
    return {...prevState ,count: prevState.count - 1}
  })



}

 function increment (){
  // setCount(previousCount  => previousCount + 1)
  setUpdate(prevState => {
    return {...prevState ,count: prevState.count + 1}
  })
 }

  return (
    <>
     <button onClick={decrement}>-</button>
     {count}{theme}
     <button onClick={increment}>+</button>
    </>
  )
}

export default App
