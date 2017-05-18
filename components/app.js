import React, { Component } from 'react'
import Edit from './Edit'
import Login from './Login'
import generateLabels from '../helpers/generateLabels'

function App({state, dispatch}) {
  var labels = generateLabels(state.signUp)
  if (state.loggedIn) {
    return (
      <Edit state={state} dispatch={dispatch} />
    )
  } else {
    return (
      <div>
        <button onClick={()=>{dispatch({type:'TOGGLE_SIGNUP_LOGIN'})}}>{labels.button}</button>
        <Login state={state} dispatch={dispatch} headerText={labels.title} />
      </div>
    )
  }
}

export default App
