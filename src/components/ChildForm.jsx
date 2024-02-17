// import React, { useState } from 'react'

// const ChildForm = ({Parentdata}) => {
//     const [name, setName] = useState("")

//     const handleData= ()=>{
//         Parentdata(name)
//     }

//   return (
//     <>
//         <input type= "text" placeholder= "Name" value= {name} onChange={(e)=> setName(e.target.value)}></input>
//         <button onClick={handleData}>Submit</button>
//     </>
//   )
// }

// export default ChildForm

import React, { useState } from 'react'

function ChildForm({parentFunc}) {
    const [name, setName] = useState('')
    const handleSubmit =()=>{
        parentFunc(name)
    }
  return (
    <div>
        <input type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ChildForm