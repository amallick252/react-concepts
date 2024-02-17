
// import React from 'react'

// const PropPass2 = ({name, age, skills, userArr}) => {
//   // const {name, age, skills, userArr }=props
//   return (
//     <>
//     <h2>Passing props(2)</h2>
//     <div>{`Hello ${name}, from PropPass2, You are ${age} || ObjSkill: ${skills} || Arr[1]: ${userArr}`}</div>
//     <p>-----------</p>
//     <h3>Notes</h3>
//     <h4>Sending from Parent</h4>
//     <p>{`Data to child can also be passed using spread operator as "<PropPass2 {...userObj}(obj) {...userArr}(arr)/>"`} </p>
//     <h4>Destructuring</h4>
//     <div>{`While spreading{...Obj} data is received like ({key1, key2}) For spreading {...arr}, data is receved like({0:arrElem1, 1:arrElem2}), these prop names can be used in the jsx directly within{}, eg:{key1},{arrElem2} `}</div>
//     {/* <h4>props</h4> */}
//     </>
//   )
// }

// export default PropPass2

import React from 'react'

const PropPass2 = ({age1, age, name, skills, 0:arrElem1, 1:arrElem2, unPassedProp= "I am an unPassedProp"}) => {
  return (
    <>
    <h2>Passing props(2)</h2>
    <div>{`Hello ${name} from PropPass2, You are ${age} || ObjSkill: ${skills.language} || Arr[1]: ${arrElem2} || ${unPassedProp}`}</div>
    <p>-----------</p>
    <h3>Notes</h3>
    <h4>Sending from Parent</h4>
    <p>{`Data to child can also be passed using spread operator as "<PropPass2 {...userObj}(obj) {...userArr}(arr)/>"`} </p>
    <h4>Destructuring</h4>
    <div>{`While spreading{...Obj} data is received like ({key1, key2}) For spreading {...arr}, data is receved like({0:arrElem1, 1:arrElem2}), these prop names can be used in the jsx directly within{}, eg:{key1},{arrElem2} `}</div>
    <h4>props</h4>
    <div>{`If there are multiple data, its better to destructure them and then use`}</div>

    {/* <h4>props</h4> */}
    </>
  )
}

export default PropPass2