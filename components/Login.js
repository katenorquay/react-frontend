import React, { Component } from 'react'
import loginService from '../sharedAPI/loginService'

function Login({state, dispatch}) {

  function handleLogin(e) {
    e.preventDefault()
    const userInfo = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }
    loginService(userInfo, dispatch)
  }

  return (
    <div>
      <h2>Log in</h2>
      <form>
        <input id='email' placeholder='email'/>
        <input id='password' placeholder='password'/>
        <button onClick={handleLogin}>Submit</button>
      </form>
    </div>
  )
}

export default Login
