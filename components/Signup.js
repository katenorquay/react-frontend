import React, { Component } from 'react'
import request from 'superagent'
import loginService from '../sharedAPI/loginService'

function Signup({state, dispatch}) {

  function handleSignup(e) {
    e.preventDefault()
    var userInfo = {
      user: {
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value,
        password_confirmation: document.getElementById('password_confirmation').value,
        username: document.getElementById('signupEmail').value
      }
    }
    dispatch({type: 'LOGIN_INIT'})
    request
      .post(`http://localhost:3000/v1/users`)
      .send(userInfo)
      .end((err, res) => {
        if (err) {
          console.log(err)
          dispatch({type: 'SIGNUP_UNSUCCESSFUL'})
        } else {
          loginService({username: userInfo.user.email, password: userInfo.user.password, grant_type: 'password'}, dispatch)
        }
      })
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form>
        <input id='signupEmail' placeholder='email'/>
        <input id='signupPassword' placeholder='password'/>
        <input id='password_confirmation' placeholder='retype password'/>
        <button onClick={handleSignup}>Submit</button>
      </form>
    </div>
  )
}

export default Signup
