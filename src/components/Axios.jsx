import React from 'react'
import SyntaxWrap from './SyntaxWrap'

const Axios = () => {
    const AxiosGetString = `import axios from 'axios'
import React, { useEffect, useState } from 'react'
    
    function AxiosGet() {
      const [userData, setUserData] = useState([])
      const [error, setError]= useState({})
      useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=> {
          setUserData(response.data)
          console.log(response)
        })
        .catch(error=>setError(error), console.log(error))
      }, [])
      return (
        <div>
          {userData.map((item)=><div>{item.name} {item.email}</div>)}
          <h3>Error: {error.message}</h3>
        </div>
      )
    }`
    const AxiosPostString = `import axios from 'axios'
import React, { useState } from 'react'
    
    function AxiosPost() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const userData= {name:userName, email: email}
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('https://jsonplaceholder.typicode.com/users', userData)
      .then(res=> console.log(res))
    }
    const handleUpdate=(e)=>{
      e.preventDefault()
      axios.put('https://jsonplaceholder.typicode.com/users/10', userData)
      .then(res=> console.log(res))
    }
    const handleDelete=()=>{
      axios.delete('https://jsonplaceholder.typicode.com/users/10')
      .then(res=> console.log(res))
    }
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            
            <label htmlFor="userName">User Name:</label>
            <input type="text" name="userName" placeholder='Enter Name' value= {userName} onChange={(e)=> setUserName(e.target.value)}/>
            <br/>
            
            <label htmlFor="email">User email:</label>
            <input type="text" name="email" placeholder='Enter email' value= {email} onChange={(e)=> setEmail(e.target.value)}/><br/>
            
            <button type='submit'>Submit</button>
          </form>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )
    }
    
    export default AxiosPost`
  return (
    <div style={{backgroundColor: '#eaeaea'}}>
        <h2>Axios</h2>
        <h3>AxiosGet</h3>
        <SyntaxWrap children={AxiosGetString}/>
        <h3>Axios post(create), put(update), delete</h3>
        <SyntaxWrap children={AxiosPostString}/>
    </div>
  )
}

export default Axios