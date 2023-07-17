import React, { useState } from 'react'
import './App.css'




const App = () => {

  const [origin , updates] = useState({
    name: 'Timi',
    age: 24,
    occupation: 'front-End', 
    degree: 'Bsc',
    relationshipStatus: 'Single',
    netWorth: 0,
  })


    const name = origin.name
    const   age = origin.age
    const   occupation = origin.occupation
    const   degree = origin.degree
    const   relationshipStatus = origin.relationshipStatus
    const   netWorth = origin.netWorth

    function BioUpdate(){
      updates(previous => {return{ ...previous , name:'TimiMaliki' , age : 29 ,
    occupation: 'FullStack Developer' , relationshipStatus : "Married",  netWorth: 10956789450 , degree:'PHD'
    }})
    }

  return (
    <div>
      <h1> My BioData now</h1>
            <ul>
              <li>{name}</li>
              <li>{age}</li>
              <li>{occupation}</li>
              <li>{degree}</li>
              <li>{relationshipStatus}</li>
              <li>{netWorth}</li>
            </ul>

            <h1> My BioData in 5years

              <br />

              <button onClick={BioUpdate}>Click Me</button>
            </h1>
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
//    <button onClick={decrement}>-</button>
//      {count}{theme}
//      <button onClick={increment}>+</button> 
// export default App






 //   // exampleTwo
// const App = () => {
 
  //   const [myFavColor, updateTheColor] = useState({ color: "red" , change: ' white'})
  
  //   const color = myFavColor.color
  
  //   const  change = myFavColor.change
  
  // function changingColor(){
  //   updateTheColor(previousState => {return {...previousState , color:"blue" , change:"green"}
  // })
  // }
  
  //   return (
  //     <div>
  //       <h2>My fav color <br /><br />
  //         {color}{change}  <br /> <br />
  //         but my pure color is
  //         <button onClick={changingColor}></button>
  //       </h2>
  //     </div>
  //   )
  // }
  
  // export default App