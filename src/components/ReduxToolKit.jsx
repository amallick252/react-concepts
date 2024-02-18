import React from "react";
import reduxFlowImage from "../assets/redux-flow.png";
import SyntaxWrap from "./SyntaxWrap";

const ReduxToolKit = () => {
  const storeString = `import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
//import counterReducer from './counterSlice';
  
  const store = configureStore({
    reducer: {
      auth: authReducer,
      //counter: counterReducer,
    },
  })
  
export default store`;

  const authSliceString = `import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    status: false,
    userData: null,
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action) => {
        state.status = true;
        state.userData = action.payload;
      },
      logout: (state) => {
        state.status = false;
        state.userData = null;
      },
    },
  });

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;`

const counterSliceString = `import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    value: 0,
  };

  const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
    },
  });

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
`
const counterComponentString = `
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

const SomeComponent = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.counter.value);

  return (
    <div>
      <p>Counter Value: {counterValue}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default SomeComponent;
`
  return (
    <div style={{ backgroundColor: "#eaeaea" }}>
      <h2>Redux Tool Kit</h2>
      <img src={reduxFlowImage} alt="redux-flow" style={{ width: "500px" }} />
      <p>
        Reducers: These are pure JS functions that can take 2 things! previous
        state('initialState' is the default value) and an action, reducers
        return the newly updated state
      </p>
      <p>
        Actions: These are objects that contains payload of information. They
        are the only source for the Redux store to be updated
      </p>
      <p>{`Payload: it is additional data that is included with an action when it is despatched. It can be an object, string, nmber or any js data type (eg: const someAction = { type: "Test", payload: {user: "Test User", age: 25}, })`}</p>
      <h3>Step-1(Create Store)</h3>
      <p>Create a store.js, inside src/store folder </p>
      <SyntaxWrap children={storeString}/>

      <h3>Step-2(Create Slice)</h3>
      <p>Create a slice(authSlice.js), inside src/store folder </p>
      <SyntaxWrap children={authSliceString}/>

      <h4>only if you need a 2nd slice</h4>
      <SyntaxWrap children={counterSliceString}/>
      <p>Note: You can have multiple slices in one store</p>

      <h3>Step-3(Component using ReduxStore)</h3>
      <p>Create a component(counterComponnet.jsx), inside src/component folder </p>
      <SyntaxWrap children={counterComponentString}/>

    </div>
  );
};

export default ReduxToolKit;


