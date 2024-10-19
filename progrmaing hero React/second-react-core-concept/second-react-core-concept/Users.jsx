import { useEffect, useState } from "react"

export default function users(){
      const [users,setUsers]= useState([]);

      useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then (res =>res.json())
            .then(data => setUsers(data))
      },[])

      return(
            <div>
                  <h3>Users: {users.length}</h3>

            </div>
      )
}
// 1.delcare a state to hold data. 
// 2. useEffect with call back and dependency array
// 3.Use fetch data  to load data 