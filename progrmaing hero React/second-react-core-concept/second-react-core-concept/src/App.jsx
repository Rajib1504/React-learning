import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../counter'
import Team from '../team'
import Users from '../Users'
import Friends from '../Friends'

function App() {
function handleClick(){
  alert('button clicked');
}
const handleClick2 = ()=>{
  alert("clicked 2");
}
const addToFive = (num) =>{
  alert(num +5)
}
  return (
    <>
     <h3>React Core Concept 2</h3>
     <Users></Users>
     
     <Friends></Friends>
     <Team ></Team>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click Me</button>
     <button onClick={()=>{alert("Third clicked")}}>Third</button>
     {/* on button click  */}
     <button onClick={()=>addToFive(3)}>four</button>
    <Counter></Counter>
    <Counter></Counter>
    </>
  )
}

export default App
