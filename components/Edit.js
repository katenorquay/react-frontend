import React, { Component } from 'react'
import request from 'superagent'

function Edit({state, dispatch}) {
  function handleUpdate(e) {
    e.preventDefault()
    const userInfo = {
      email: state.currentUser.uid,
      password: document.getElementById('newPassword').value,
      password_confirmation: document.getElementById('confirmNewPassword').value,
      current_password: document.getElementById('currentPassword').value
    }
    request
      .put(`http://localhost:3000/auth`)
      .set({
        'access-token': state.currentUser['access-token'],
        'token-type': state.currentUser['token-type'],
        'client': state.currentUser.client,
        'expiry': state.currentUser.expiry,
        'uid': state.currentUser.uid
      })
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

  function signOut(e) {
    e.preventDefault()
    request
      .delete(`http://localhost:3000/auth/sign_out`)
      .set({
        'access-token': state.currentUser['access-token'],
        'token-type': state.currentUser['token-type'],
        'client': state.currentUser.client,
        'expiry': state.currentUser.expiry,
        'uid': state.currentUser.uid
      })
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      })
  }

  return (
    <div>
      <h2>Edit Account</h2>
      <form>
        <input id='newPassword' placeholder=' new password'/>
        <input id='confirmNewPassword' placeholder='retype new password'/>
        <input id='currentPassword' placeholder='current password'/>
        <button onClick={handleUpdate}>Submit</button>
      </form>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Edit
