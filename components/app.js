import React, { Component } from 'react'
import Login from './Login'

function App({state, dispatch}) {
  if (!state.loggedIn) {
    return (
      <div>
        <Login state={state} dispatch={dispatch} />
        <h2>Sign up instead!</h2>
      </div>
    )
  } else {
    return (
      <h2>oh hey gurl</h2>
    )
  }
}

export default App
