import React, { Component } from 'react'
import loginService from '../sharedAPI/loginService'

function Login({state, dispatch}) {

  function handleLogin(e) {
    e.preventDefault()
    var userInfo = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      grant_type: 'password'
    }
    loginService(userInfo, dispatch)
  }
  if (state.loginUnsuccessful) {
    return (
      <div>
        <h2>Log in</h2>
        <form>
          <input id='username' placeholder='email'/>
          <input id='password' placeholder='password'/>
          <button onClick={handleLogin}>Submit</button>
        </form>
        <p>Email or password is incorrect</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Log in</h2>
        <form>
          <input id='username' placeholder='email'/>
          <input id='password' placeholder='password'/>
          <button onClick={handleLogin}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
