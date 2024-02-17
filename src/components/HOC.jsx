import React, { useState } from 'react'

const HOC = () => {

  return (
    <>
    <h2>HOC</h2>
    <Counter />
    <CounterReuseable color="red"/>
    <CounterReuseable color="green"/>
    <CounterReuseable color="Blue"/>
    <CounterHOCPurple Comp= {Counter}/>
    </>
  )
}

//Higher Order function( this takes a function as an argument and returns a modified function)
function CounterHOCPurple({Comp}){
    return(
        <div style={{backgroundColor:'purple', color:'white'}}>
            <Comp/>
            <div>{`If we destructure data while receving it eg: ({Comp}) we can use it directly eg: {Comp}/ <Comp/>`}</div>
            <p>{`If we don't destructure data while receving it eg:(props) we have to use {props.Comp}/ <props.Comp/>`}</p>
        
        </div>
    )
}

//
function CounterReuseable({color}){
    return(
        <div style={{backgroundColor:`${color}`,}}><Counter/></div>
    )
}

function Counter(){
    const [count, setCount] = useState(0)
    return(
        <div style={{color:'white', padding:'10px 0px'}}>
        <h3>count is: {count} </h3>
        <button onClick={()=> setCount(count+1)}>Increase</button>
        <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    )
}
export default HOC


