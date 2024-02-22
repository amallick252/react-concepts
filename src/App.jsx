import './App.css'
import React, {useState} from 'react'
import PropPass1 from './components/PropPass1'
import PropPass2 from './components/PropPass2'
import ParentForm from './components/ParentForm'
import HOC from './components/HOC'
import LoginContext from './context/LoginContext'
import GetContext from './context/GetContext'
import ReactInterview from './components/ReactInterview'
import ReduxToolKit from './components/ReduxToolKit'
import ReactRouterDom from './components/ReactRouterDom'



function App() {

  const userObj = {name: "Rinku", age :21, skills: {language: "JS, ReactJS"}}
  const userArr= ['Sonali', 'Omm', '27'] 
  const [appData, setAppData] = useState("test")
  
  return (
    <>
    <LoginContext.Provider value = {{userObj,userArr, setAppData}} >
      {/* {appData} */}
       <PropPass1 name= "Abinash" age= {31} userObj={userObj} userArr={userArr}/>
       <hr/>
       <PropPass2 age1= {37} {...userObj} {...userArr} />
       <hr/>
       <ParentForm/>
       <p>Child can send data to parent, using callback Fn passed down by parent to child as a props</p>
       <hr/>
       <HOC/>
       <GetContext style={{backgroundColor:"#eaeaea"}}/>
       <ReduxToolKit/>
       <ReactRouterDom/>
       <ReactInterview/>
       </LoginContext.Provider>
    </>
  )
}

export default App


// import { useState } from 'react'
// import LoginContext from './context/LoginContext'
// import GetContext from './context/GetContext'



// function App() {

//   const userObj = {name: "Rinku", age :21, skills: {language: "JS, ReactJS"}}
//   const userArr= ['Sonali', 'Omm', '27'] 
//   return (
//     <>
//     <LoginContext.Provider value = {{userObj, userArr}}>
//        <GetContext/>
//     </LoginContext.Provider>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import LoginContext from './LoginContext'
// import { useContext } from 'react'

// const GetContext = () => {
// const {userObj} = useContext(LoginContext)
  
//   return (
//     <div>I am from GetContext
//         <p>{userObj.age}</p>
//     </div>
//   )
// }

// export default GetContext

// import { createContext } from "react";
// import React from 'react'

// const LoginContext = createContext();

// export default LoginContext