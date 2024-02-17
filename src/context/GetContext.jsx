import LoginContext from './LoginContext'
import { useContext } from 'react'


const GetContext = ({style}) => {
  const {userObj, userArr, setAppData} = useContext(LoginContext)
    // const value = useContext(LoginContext)
    console.log(userObj)

  return (
    <div style={style} >I am from GetContext
        <p>{userObj.skills.language}</p>
        <p>{userArr[1]}</p>
        {setAppData('yolo')}
        <div style={{padding:'1px'}}>
            <h3>Step-1</h3>
            <h3>Step-1</h3>
        <p>create a context file eg:LoginContext.jsx in contexts file</p>
        <p>{`there: import { createContext } from "react"|| const LoginContext= createContext()|| export default LoginContext `}</p>
        </div>
        <hr/>
            <h3>Step-2</h3>
        <div>
        <p>You can import the LoginContext file to the parent lavel component file(eg:App.jsx) </p>
        <p>{`Wrap the child lavel components with the imported context's provider <LoginContext.Provider> </LoginContext.Provider>`}</p>
        <p>{`Pass it the object, state, Array as props (eg: data= {myObj}, name= "Abinash")`}</p>
        <p>{`step-1: create a ContextName.js file in context/contexts folder

        step-2: We need to create a provider of the context name to wrap all the accessing components eg: <ContextName.Provider><Children/></ContextName.Provider>. 

        Note: 
        I. in React componet names has to be capitalized(first letter), ${''}II. This provider part can be done directly in the common parent file(eg: App.jsx) or a separate ContextNamerovider.jsx file which receives {children} as props and passes them data using provider. This provider component can be exported and it can wrap the App.js.

        Step3: Multiple data can be passed in a single value as an object to the .Provider wrapper(eg: <LoginContext.Provider value= {{myObj, myArr, setUsername}}>)
        

        
        
        `}</p>
        </div>
    </div>
  )
}

export default GetContext