import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import reducer from './reducer.js'
import {createStore} from 'redux'

const initialState = {
  loggedIn: false,
  loginInProgress: false,
  loginUnsuccessful: false,
  signupUnsuccessful: false,
  currentUser: {}
}

const store = createStore(reducer, initialState)
store.subscribe( () => {
  var state = store.getState()
  render(<App state={state} dispatch={store.dispatch} />, document.querySelector('main'))
})

store.dispatch({type: 'INIT'})
