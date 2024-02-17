// import React, { useState } from 'react'
// import ChildForm from './ChildForm'

// const ParentForm = () => {
//     const [parentData, setParentData] = useState("")
//     const handleData= (data)=>{
//         const message = `Hello from the parent, ${data}`
//         setParentData(message)
//         console.log(message)
//     }
//   return (
//     <div>

//     <ChildForm Parentdata= {handleData}/>
//     <div>{parentData}</div>

//     </div>
//   )
// }

// export default ParentForm

import React, { useState } from 'react'
import ChildForm from './ChildForm'

function ParentForm() {
    const [data, setData] = useState('')
    const getData = (childData)=>{
        console.log(childData)
        setData(childData)
    }
  return (
    <>
    <h2>Sending data from child to parent</h2>
    <ChildForm parentFunc= {getData}/>
    <div>{`ChildData: ${data}`}</div>
    </>
  )
}

export default ParentForm