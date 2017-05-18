import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import Edit from './Edit'
import LoginScreen from './LoginScreen'

function App({state, dispatch}) {
  if (state.signUp) {
    var buttonText = 'Log In!'
    var headerText = 'Sign In!'
  } else {
    buttonText = 'Sign In!'
    headerText = 'Log In!'
  }
  if (state.loggedIn) {
    return (
      <Edit state={state} dispatch={dispatch} />
    )
  } else {
    return (
      <div>
        <button onClick={()=>{dispatch({type:'TOGGLE_SIGNUP_LOGIN'})}}>{buttonText}</button>
        <LoginScreen state={state} dispatch={dispatch} headerText={headerText} />
      </div>
    )
  }
}

export default App
