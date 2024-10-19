import { useState } from "react"

export default function Team(){
      const [team,setTeam]= useState(11);
      const teamStyle = {
            border:'2px solid yellow',
            margin: '15px',
            padding: '15px',
            borderRadius: '15px'
      }
  
      const handelClickIncrease = ()=>{
            let newCount = team +1;
             setTeam(newCount)
            }
            
      const handelClickDecrease =()=>{
            let newcount = team - 1;
            setTeam(newcount);
      }
      return(
            <div style={teamStyle}>
                  <h3>Players:{team}</h3>
<button onClick={handelClickIncrease}>Add</button>
<button onClick={handelClickDecrease}>Remove</button>
            </div>
      )
}