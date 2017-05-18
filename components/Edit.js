import React, { Component } from 'react'
import request from 'superagent'
import EditConfirmation from './EditConfirmation'

function Edit({state, dispatch}) {
  console.log(state.currentUser)
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
    var token = state.currentUser.access_token
    console.log(token)
    request
      .put("http://localhost:3000/v1/users/5")
      .set('Authorization', token)
      .send(userInfo)
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          dispatch({type: 'EDITING'})
        }
      })
  }

  function signOut(e) {
    e.preventDefault()
    request
      .delete(`http://localhost:3000/v1/sessions`)
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          dispatch({type: 'SIGNOUT'})
        }
      })
  }

  function handleDelete(e) {
    e.preventDefault()
    var userInfo = {
      user: {
        email: state.currentUser.email,
      }
    }
    request
      .delete(`http://localhost:3000/v1/users/5`)
      .set('Authorization', state.currentUser.access_token)
      .send(userInfo)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch({type: 'SIGNOUT'})
      }
    })
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
      <button onClick={signOut}>Sign Out</button>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  )
}

export default Edit
