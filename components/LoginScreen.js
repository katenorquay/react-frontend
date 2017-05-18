import React, { Component } from 'react'
import loginService from '../API/loginService'
import signupService from '../API/signUpService'

function LoginScreen({state, dispatch, headerText}) {
  const inputClass = state.signUp ? '' : 'hidden'

  function handleSubmit(e) {
    e.preventDefault()
    var userInfo = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    }
    if (state.signUp) {
      userInfo.password_confirmation = document.getElementById('password_confirmation').value
      userInfo.email = userInfo.username
      signupService(userInfo, dispatch)
    } else {
      userInfo.grant_type = 'password'
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
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default LoginScreen
