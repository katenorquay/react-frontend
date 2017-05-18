import React, { Component } from 'react'
import deleteAccount from '../API/deleteAccount'

function Delete({state, dispatch}) {
  function handleDelete(e) {
    e.preventDefault()
    var userInfo = {
      user: {
        email: state.currentUser.email,
      }
    }
    deleteAccount(userInfo, dispatch, state.currentUser)
  }
  return (
    <button onClick={handleDelete}>Delete Account</button>
  )
}

module.exports = Delete
