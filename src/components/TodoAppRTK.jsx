import React from 'react'
import SyntaxWrap from './SyntaxWrap'

function TodoAppRTK() {
    const storejsString=`import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
    
export const store = configureStore({
    reducer: todoReducer
})`
    const todoSlicejsString=`import {createSlice, nanoid} from '@reduxjs/toolkit'

    const initialState= {
        todos:[]
    }
    
    const todoSlice= createSlice({
        name: 'todo',
        initialState,
        reducers:{
            addTodo:(state,action)=>{
                const todo= {
                    id:nanoid(),
                    msg: action.payload,
                    isComplete:false
                }
                state.todos.unshift(todo)
            },
            deleteTodo:(state, action)=>{
                state.todos=state.todos.filter(todo=> todo.id!== action.payload)
            },
            updateTodo:(state, action)=>{
                state.todos= state.todos.map(todo=>todo.id==action.payload.id? action.payload: todo)
            },
            toggleComplete:(state, action)=>{
                state.todos= state.todos.map(todo=>todo.id==action.payload ? {...todo, isComplete:!todo.isComplete} : todo)
            },
            localDataGet:(state,action)=>{
                state.todos= action.payload
            }
        }
    })
    
    export const {addTodo, deleteTodo, updateTodo,  toggleComplete, localDataGet}= todoSlice.actions
    
    export default todoSlice.reducer`
    const mainjsxString=`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Provider store= {store}>
        <App />
        </Provider>
      </React.StrictMode>,
    )
    `
    const AppjsxString=`import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'
import {localDataGet} from './store/todoSlice'
import { useEffect } from 'react'
    
    function App() {
      const todos = useSelector(state=>state.todos)
      const dispatch = useDispatch()
    
      useEffect(()=>{
        const localTodos= JSON.parse(localStorage.getItem('todos'))
        if(localTodos && localTodos.length>0) dispatch(localDataGet(localTodos))
      }, [])
    
      useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])
        
      return (
        <>
          <h3>RTK Todo App</h3>
          <AddTodo/>
          {todos.map(todo=> <EditTodo key={todo.id} todo={todo}/>)}
        </>
      )
    }
    
    export default App`
    const AddTodojsxString=`import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'
    
    function AddTodo() {
        const [msg, setMsg]= useState('')
        const dispatch = useDispatch()
        const handleAdd=(e)=>{
            e.preventDefault()
            if(!msg) return
            dispatch(addTodo(msg))
            setMsg('')
        }
      return (
        <div>
            <form onSubmit={handleAdd}>
                <input type="text" value={msg} onChange={(e)=> setMsg(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
      )
    }
    
    export default AddTodo`
    const EditTodojsxString=`import React, { useState } from 'react'
import { deleteTodo, updateTodo, toggleComplete } from '../store/todoSlice'
import { useDispatch } from 'react-redux'
    
    function EditTodo({todo}) {
        const dispatch= useDispatch()
        const [newMsg, setNewMsg] = useState(todo.msg)
        const [isEditable, setIsEditable] = useState(false)
    
        const editTodo=()=>{
            dispatch(updateTodo({...todo, msg:newMsg}))
            setIsEditable(p=>!p)
        }
        const toggleCheck=()=>{
            dispatch(toggleComplete(todo.id))
            setIsEditable(false)
        }
    
      return (
        <div>
            <input type= 'checkbox' checked={todo.isComplete} onChange={toggleCheck}/>
            <input type="text" value={newMsg} 
            disabled={!isEditable}
            onChange={(e)=> setNewMsg(e.target.value)}/>
            <button 
            disabled={todo.isComplete}
            onClick={()=>{
                if(isEditable){
                    editTodo()
                }else{
                    setIsEditable(p=>!p)
                }
            }}>{isEditable?'Save':'Edit'}</button>
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      )
    }
    
    export default EditTodo`

  return (
    <div style={{backgroundColor: '#eaeaea'}}>
        <h2>Todo App RTK</h2>
        <h4>install RTK</h4>
        <p>npm install @reduxjs/toolkit react-redux</p>
        <h3>src/store/store.js</h3>
        <SyntaxWrap children={storejsString}/>
        <h3>src/store/todoSlice.js</h3>
        <SyntaxWrap children={todoSlicejsString}/>
        <h3>src/main.jsx</h3>
        <SyntaxWrap children={mainjsxString}/>
        <h3>src/App.jsx</h3>
        <SyntaxWrap children={AppjsxString}/>
        <h3>src/components/AddTodo.jsx</h3>
        <SyntaxWrap children={AddTodojsxString}/>
        <h3>src/components/EditTodo.jsx</h3>
        <SyntaxWrap children={EditTodojsxString}/>
    </div>
  )
}

export default TodoAppRTK