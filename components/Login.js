import React, { Component } from 'react'
import loginService from '../API/loginService'
import signupService from '../API/signUpService'

function Login({state, dispatch, headerText}) {
  const inputClass = state.signUp ? '' : 'hidden'
  const loginError = state.loginUnsuccessful ? '' : 'hidden'
  const signupError = state.signupUnsuccessful ? '' : 'hidden'

  function handleSubmit(e) {
    e.preventDefault()
    var userInfo = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    }
    if (state.signUp) {
      signupService(userInfo, dispatch)
    } else {
      loginService(userInfo, dispatch)
    }
  }

  return (
    <div>
      <h2>{headerText}</h2>
      <form>
        <input id='username' placeholder='email'/>
        <input id='password' placeholder='password'/>
        <input className={inputClass} id='password_confirmation' placeholder='retype password'/>
        <p className={loginError}>Email or password was not recognised</p>
        <p className={signupError}>There was an error creating your account</p>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login
