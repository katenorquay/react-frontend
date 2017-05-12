import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import Edit from './Edit'

function App({state, dispatch}) {
  if (!state.loggedIn) {
    return (
      <div>
        <Login state={state} dispatch={dispatch} />
        <Signup state={state} dispatch={dispatch} />
      </div>
    )
  } else {
    return (
      <Edit state={state} dispatch={dispatch} />
    )
  }
}

export default App
