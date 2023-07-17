import React, { useState } from 'react'
import './App.css'


const App = () => {
  const [myFavColor, updateTheColor] = useState({ color: "red" , change: ' white'})

  const color = myFavColor.color

  const  change = myFavColor.change

function changingColor(){
  updateTheColor(previousState => {return {...previousState , color:"blue" , change:"green"}
})
}

  return (
    <div>
      <h2>My fav color <br /><br />
        {color}{change}  <br /> <br />
        but my pure color is
        <button onClick={changingColor}></button>
      </h2>
    </div>
  )
}

export default App

//   //example One
//   const [setState , setUpdate] = useState({
//     count: 4 , theme: "Red"
//   })

//   const count = setState.count
//   const  theme = setState.theme

// function decrement (){
//   //  setCount(previousCount  => previousCount - 1)

  // setUpdate(prevState => {
  //   return {...prevState ,count: prevState.count - 1}
  // })



// }

//  function increment (){
//   // setCount(previousCount  => previousCount + 1)
//   setUpdate(prevState => {
//     return {...prevState ,count: prevState.count + 1}
//   })
//  }

// export default App
//    <button onClick={decrement}>-</button>
//      {count}{theme}
//      <button onClick={increment}>+</button> 


