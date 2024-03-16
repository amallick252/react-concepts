import React from 'react'
import SyntaxWrap from './SyntaxWrap'
function TodoAppContextAPI() {
    const TodoContextjsString=`import { useContext } from "react";
import { createContext } from "react";
    
    const TodoContext= createContext({
        todos:[{
            id:'1',
            todoMsg:'Helo Test!',
            isCompleted: false
        }],
        addTodo:(todoMsgNStatus)=>{},
        deleteTodo:(id)=>{},
        updateTodo:(id, newTodo)=>{},
        toggleComplete:(id)=>{}
    })
    
    export const TodoProvider= TodoContext.Provider
    export const useTodo= function(){
        return useContext(TodoContext)
    }`
    const AppjsxString=`import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider, useTodo } from './context/TodoContext'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'
    
    function App() {
      const [todos, setTodos] = useState([])
    
      const addTodo=(todoMsgNStatus)=>{
        setTodos((prev) => [{id:Date.now(),...todoMsgNStatus},...prev])
        console.log(todos);
      }
    
      const deleteTodo=(id)=>{
        setTodos(prev => prev.filter(i=>i.id!==id))
      }
      const updateTodo=(id, newTodo)=>{
        setTodos(prev => prev.map(item=>(item.id===id?newTodo:item)))
      }
    
      const toggleComplete= (id)=>{
        setTodos(prev=> prev.map((item)=>(item.id==id? {...item, isCompleted: !item.isCompleted}: item)))
      }
    
      useEffect(()=>{
        const todosLocal = JSON.parse(localStorage.getItem('todos'))
        if(todosLocal && todosLocal.length>0) {
          setTodos(todosLocal)
        }
      },[])
    
      useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
      },[todos])
    
      return (
        <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
          <div>
            <h2>Todo App Context API</h2>
            <AddTodo/>
            {todos.map(item => <div key = {item.id}><EditTodo todo={item}/></div>)}
          </div>
        </TodoProvider>
      )
    }
    
    export default App`
    const AddTodojsxString=`import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'
    
    const AddTodo = () => {
    const [todoMsg, setTodoMsg] = useState('')
    const {addTodo}= useTodo()
    
    const add=(e)=>{
        e.preventDefault()
        if(!todoMsg)return
        addTodo({todoMsg, isCompleted:false})
        setTodoMsg('')
    }
    
      return (
        <form onSubmit={add}>
            <input type="text" value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
      )
    }
    
    export default AddTodo`
    const EditTodojsxString=`import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'
    
    function EditTodo({todo}) {
        const [newTodoMsg, setNewTodoMsg] = useState(todo.todoMsg)
        const [isTodoEditable, setIsTodoEditable] = useState(false)
        const {deleteTodo, updateTodo, toggleComplete}= useTodo()
        const editTodo=()=>{
            updateTodo(todo.id, {...todo, todoMsg:newTodoMsg})
            setIsTodoEditable(p=>!p)
        }
        const handleToggle=()=>{
            toggleComplete(todo.id)
            setIsTodoEditable(false)
        }
    
      return (
        <div>
            <input type="checkbox" checked={todo.isCompleted} onChange={()=>{handleToggle()}}/>
            <input type="text" value={newTodoMsg} onChange={(e)=>{setNewTodoMsg(e.target.value)}} disabled={!isTodoEditable}/>
            <button 
            disabled={todo.isCompleted}
            onClick={()=>{
                if(isTodoEditable){
                    editTodo()
                }else{
                    setIsTodoEditable(p=>!p)
                }
            }}>{isTodoEditable?'Save':'Edit'}</button>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
      )
    }
    
    export default EditTodo`

  return (
    <div style={{backgroundColor: '#eaeaea'}}>
        <h2>Todo App Context API</h2>
        <h3>src/context/TodoContex.js</h3>
        <SyntaxWrap children={TodoContextjsString}/>
        <h3>src/App.js</h3>
        <SyntaxWrap children={AppjsxString}/>
        <h3>src/components/AddTodo.jsx</h3>
        <SyntaxWrap children={AddTodojsxString}/>
        <h3>src/components/EditTodo.jsx</h3>
        <SyntaxWrap children={EditTodojsxString}/>
    </div>
  )
}

export default TodoAppContextAPI