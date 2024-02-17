import LoginContext from "./LoginContext";
import { useContext } from "react";

const GetContext = ({ style }) => {
  const { userObj, userArr, setAppData } = useContext(LoginContext);
  // const value = useContext(LoginContext)
  console.log(userObj);

  return (
    <div style={style}>
      <h3>Context API</h3>I am from GetContext
      <p>{userObj.skills.language}</p>
      <p>{userArr[1]}</p>
      {setAppData("yolo")}
      <div style={{ padding: "1px" }}>
        <h2>Way-1</h2>
        <h3>Step-1</h3>
        <p>create a context file eg: LoginContext.js in contexts folder</p>
        <p>{`there: import { createContext } from "react"|| const LoginContext= createContext()|| export default LoginContext `}</p>
      </div>
      <h3>Step-2</h3>
      <div>
        <p>
          You can import the LoginContext file to the parent lavel component
          file(eg:App.jsx){" "}
        </p>
        <p>{`Wrap the child lavel components with the imported context's provider <LoginContext.Provider> </LoginContext.Provider>`}</p>
        <p>{`Pass it the object, state, Array as props (eg: value = {{userObj,userArr, setAppData}}`}</p>
        <h3>Step-3</h3>
        <p>{`For using the context data in a component, import useContext hook to it , destructure the received data eg: const { userObj, userArr, setAppData } = useContext(LoginContext), and use it.`}</p>

        <p>{`
        Note: 
        I. in React componet names has to be capitalized(first letter), ${""}II. This provider part can be done directly in the common parent file(eg: App.jsx) or a separate ContextNamerovider.jsx file which receives {children} as props and passes them data using provider. This provider component can be exported and it can wrap the App.js.

        Step3: Multiple data can be passed in a single value as an object to the .Provider wrapper(eg: <LoginContext.Provider value= {{myObj, myArr, setUsername}}>)
        
        `}</p>
        <hr />
        <h2>Way-2(prefered)</h2>
        <p>{`step-1: create a ContextName.js file in context/contexts folder, add the below codes there`}</p>
        <p>{`import React, { createContext, useContext } from 'react';

const LoginContext = createContext();
export default LoginContext
export const LoginProvider = LoginContext.Provider
export function useLogin(){
    return useContext(LoginContext)
}`}</p>
<p>{`We can import the useLogin hook we created, where we need to use the context, we wont have to import useContext hook and LoginContexts any more`}</p>
<p>{`We can import the LoginProvider in the parent to wrap all the accessing components/children with the provider for passing values eg:<LoginProvider value= {{myObj, myArr}}>, we dont need to import LoginContext and provied with <LoginContext.Provider>, separately`}</p>
        <p>{`
        step-2: We need to create a provider of the context name to wrap all the accessing components eg: <ContextName.Provider><Children/></ContextName.Provider>. `}</p>
      </div>
    </div>
  );
};

export default GetContext;
