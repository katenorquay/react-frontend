import React, { Component } from 'react'
import request from 'superagent'

function Edit({state, dispatch}) {
  function handleUpdate(e) {
    e.preventDefault()
    const userInfo = {
      email: document.getElementById('currentEmail').value,
      password: document.getElementById('newPassword').value,
      password_confirmation: document.getElementById('confirmNewPassword').value,
      current_password: document.getElementById('currentPassword').value
    }
    request
      .patch(`http://localhost:3000/auth/password`)
      .send(userInfo)
      .withCredentials()
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log('woo hoo')
        }
      })
  }

  return (
    <div>
      <h2>Log in</h2>
      <form>
        <input id='currentEmail' placeholder='email'/>
        <input id='newPassword' placeholder=' new password'/>
        <input id='confirmNewPassword' placeholder='retype new password'/>
        <input id='currentPassword' placeholder='current password'/>
        <button onClick={handleUpdate}>Submit</button>
      </form>
      <h3>Cancel my account</h3>
    </div>
  )
}

export default Edit
