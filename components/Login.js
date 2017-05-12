import React, { Component } from 'react'
import request from 'superagent'

function Login({state, dispatch}) {

  function handleLogin(e) {
    e.preventDefault()
    const userInfo = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }
    dispatch({type: 'LOGIN_INIT'})
    request
      .post(`http://localhost:3000/auth/sign_in`)
      .send(userInfo)
      .withCredentials()
      .end((err, res) => {
        if (err) {
          dispatch({type: 'LOGIN_UNSUCCESSFUL'})
        } else {
          dispatch({type: 'LOGIN_SUCCESSFUL', payload: res.body.user})
        }
      })
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
