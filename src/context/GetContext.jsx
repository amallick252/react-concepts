import LoginContext from "./LoginContext";
import { useContext } from "react";
import SyntaxWrap from "../components/SyntaxWrap";

const GetContext = ({ style }) => {
  const { userObj, userArr, setAppData } = useContext(LoginContext);
  // const value = useContext(LoginContext)
  console.log(userObj);

  const LoginContextString = `import React, { createContext, useContext } from 'react';

const LoginContext = createContext();
export default LoginContext

export const LoginProvider = LoginContext.Provider

export function useLogin(){
      return useContext(LoginContext)
  }`;

  const AppString = `import { LoginProvider} from './contexts/LoginContext.js'
  import Children1 from './components/Children1'
  
  function App() {
    const [todos, setTodos] = useState([])
    
    const addTodo = (todo)=>{setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])}
  
    const updateTodo = (id, todo)=>{setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo : prevTodo)))}
  
    const deleteTodo = (id)=>{setTodos((prev)=> prev.filter((todo)=> todo.id!==id))}
  
    return (
      <LoginProvider value = {{todos, addTodo, updateTodo, deleteTodo}}>
        <Children1>
      </LoginProvider>
    )
  }
  
  export default App`;

  const TodoFormString = `import { useLogin } from '../contexts/LoginContext.js'

  function TodoItem({ todo }) {
  
    const{todos, updateTodo, deleteTodo}= useLogin()
  
    const editTodo = () => {updateTodo(todo.id, {...todo, todo: todoMsg})}
  
    return (
            
    <div>
      <p>I am consumer component!</p>
      {todos.map((todo)=><div key={todo.id}>{todo.name}</div>)}
    </div>
    );
  }
  
  export default TodoItem;`;

  return (
    <div style={style}>
      <h2>Context API</h2>I am from GetContext
      <p>{userObj.skills.language}</p>
      <p>{userArr[1]}</p>
      {setAppData("yolo")}
      <div style={{ padding: "1px" }}>
        <h2>Way-1</h2>
        <h3>Step-1(Create Context file)</h3>
        <p>create a context file eg: LoginContext.js in contexts folder</p>
        <p>{`there: import { createContext } from "react"|| const LoginContext= createContext()|| export default LoginContext `}</p>
      </div>
      <h3>Step-2(Provide context to parent)</h3>
      <div>
        <p>
          You can import the LoginContext file to the parent lavel component
          file(eg:App.jsx){" "}
        </p>
        <p>{`Wrap the child lavel components with the imported context's provider <LoginContext.Provider> </LoginContext.Provider>`}</p>
        <p>{`Pass it the object, state, Array as props (eg: value = {{userObj,userArr, setAppData}}`}</p>
        <h3>Step-3(Consume context)</h3>
        <p>{`For using the context data in a component, import useContext hook to it , destructure the received data eg: const { userObj, userArr, setAppData } = useContext(LoginContext), and use it.`}</p>

        <p>{`
        Note: 
        I. in React componet names has to be capitalized(first letter), ${""}II. This provider part can be done directly in the common parent file(eg: App.jsx) or a separate ContextNamerovider.jsx file which receives {children} as props and passes them data using provider. This provider component can be exported and it can wrap the App.js.

        Step3: Multiple data can be passed in a single value as an object to the .Provider wrapper(eg: <LoginContext.Provider value= {{myObj, myArr, setUsername}}>)
        
        `}</p>
        <hr />
        <h2>Way-2(prefered)</h2>
        <h3>Step-1(Create Context file)</h3>
        <p>{`create a LoginContext.js file in src/contexts folder, add the below codes there`}</p>
        <SyntaxWrap>{LoginContextString}</SyntaxWrap>
        <p>{`We can import the useLogin hook we created, where we need to use the context, we wont have to import useContext hook and LoginContexts any more`}</p>
        <p>{`We can import the LoginProvider in the parent to wrap all the accessing components/children with the provider for passing values eg:<LoginProvider value= {{myObj, myArr}}>, we dont need to import LoginContext and provied with <LoginContext.Provider>, separately`}</p>
        <h3>Step-2(Provide context to parent)</h3>

        <p>{`We need to create a provider of the context name to wrap all the accessing components eg: <ContextName.Provider><Children/></ContextName.Provider>. `}</p>
        <SyntaxWrap>{AppString}</SyntaxWrap>
        <h3>Step-3(Consume context)</h3>
        <p>{`import the custon hook useLogin() to consume the context`}</p>
        <SyntaxWrap>{TodoFormString}</SyntaxWrap>
      </div>
    </div>
  );
};

export default GetContext;
