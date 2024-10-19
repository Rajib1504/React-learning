import { useState } from "react"

export default function Counter(){
      const [count,setCount] = useState(0)
      // console.log(count,setCount)
      
      const handelAdd = ()=>{
            const newCount = count +1;
            setCount(newCount)
      }
const handelMinus = ()=>{
                  const newCount = count -1;
                  setCount(newCount)
            }
      
      return(
            <div style={{border: '2px solid blue'}}>
                  <h3>Counter :{count}</h3>
                  <button onClick={handelAdd}>add</button>

                  <button onClick={handelMinus}>Reduce</button>
            </div>
      )
}

