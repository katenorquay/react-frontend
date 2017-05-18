import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import Edit from './Edit'

function App({state, dispatch}) {
  if (!state.loggedIn && state.newSignUp) {
    return (
      <div>
        <button onClick={()=>{dispatch({type:'TOGGLE_SIGNUP_LOGIN'})}}>Log in</button>
        <Signup state={state} dispatch={dispatch} />
      </div>
    )
  } else if (!state.loggedIn) {
      return (
        <div>
          <button onClick={()=>{dispatch({type: 'TOGGLE_SIGNUP_LOGIN'})}}>Sign Up</button>
          <Login state={state} dispatch={dispatch} />
        </div>
      )
    } else {
    return (
      <Edit state={state} dispatch={dispatch} />
    )
  }
}

export default App
