import { useState, useEffect } from "react"
import axios from "axios"
export const Listingapi = () => {
   // https://jsonplaceholder.typicode.com/users
   const[list, setList] = useState();
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setList(data.data))
   },[])
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {list.map((data)=>{
                return (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}
