import React from 'react'

const PropPass1 = ({name, age, userObj, userArr} ) => {
  return (
    <>
    <h2>Passing props(1)</h2>
    <div>{`Hello ${name} from PropPass1, You are ${age} || ObjName: ${userObj.name} || Arr[1]: ${userArr[1]}`}</div>
    <p>-----------</p>
    <h3>Notes</h3>
    <h4>Sending from Parent</h4>
    <p>{`Data to the child can be passed as "<PropPass1 name= "Abinash"(str) age= {31}(num) userObj={userObj}(obj) userArr={userArr}(arr)/>"`} </p>
    <h4>Destructuring</h4>
    <div>{`when object/ arr is passed to an childen it can be received like ({name, age, userObj, userArr} ), and can be used as {userObj.skill}, {userArr[1]}`}</div>
    <h4>props</h4>
    <div>{`IF we dont destructure we can use just (props) without {}in the parameter, and can use the passed props in JSX as: {props.userObj.skill}, {props.userArr[1]}`}</div>
    <h4>import and export</h4>
    <div>{`we can import and export variables, functions, objects, Arrays, componets eg: export const myObject = {key: 'value'};`}</div>
    <div>{`For default exports we import with out {} from the file path`}</div>
    <div>{`For named exports(not default) we import them with {} from the file path eg: import {useLogin} from '../contexts/LoginContext'`}</div>
    </>

  )
}

export default PropPass1