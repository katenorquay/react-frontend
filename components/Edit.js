import React, { Component } from 'react'
import EditConfirmation from './EditConfirmation'
import editAccount from '../API/editAccount'
import Logout from './Logout'
import Delete from './Delete'

function Edit({state, dispatch}) {
  function handleUpdate(e) {
    e.preventDefault()
    var userInfo = {
      user: {
        username: state.currentUser.email,
        email: state.currentUser.email,
        password: document.getElementById('newPassword').value,
        password_confirmation: document.getElementById('confirmNewPassword').value,
      }
    }
    editAccount(userInfo, dispatch, state.currentUser)
  }

  return (
    <div>
      <h2>Edit Account</h2>
      <form>
        <input id='newPassword' placeholder=' new password'/>
        <input id='confirmNewPassword' placeholder='retype new password'/>
        <button onClick={handleUpdate}>Submit</button>
        <EditConfirmation state={state} />
      </form>
      <Logout state={state} dispatch={dispatch} />
      <Delete state={state} dispatch={dispatch} />
    </div>
  )
}

export default Edit
