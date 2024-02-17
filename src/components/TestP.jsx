// import React, { useState } from 'react'
// import TestC from './TestC'

// const TestP = () => {
//     const [data, setData] = useState("")
//     const getData= function(cdata){
//         setData(cdata)
//     }
//   return (
//     <div><TestC childData={getData}/>
//     <p>{`Child data: ${data}`}</p>
//     </div>
//   )
// }

// export default TestP

// import React from 'react'
// import TestC from './TestC'

// const TestP = () => {
//     const myObj= {name:'Abinash', age:32, language:{first:'JS', second:'ReactJS'}}
//     const myArr= ['abc', 'xyz']
//     const Wife='Sonali'

//   return (
//     <div><TestC myObj= {myObj} myArr= {myArr} wife= {Wife}/></div>
//   )
// }

// export default TestP

// import React, { useState } from 'react'

// const TestP = () => {
//   return (
//     <div><HOC CounterFunc={redCounter}/></div>
//   )
// }

// const HOC= (props)=>{
//   return(
//     <div style={{backgroundColor:'tomato', padding:'10px 0px'}}><props.CounterFunc/></div>
//   )
// }

// const redCounter=()=>{
//     const [counter, setCounter]= useState(0)
//     return(
//         <div>
//             <h3>{`Counter is ${counter}`}</h3>
//             <button onClick={()=>setCounter(counter+1)}>Increase</button>
//             <button onClick={()=>setCounter(counter-1)}>Decrease</button>
//         </div>
//     )
// }

// export default TestP