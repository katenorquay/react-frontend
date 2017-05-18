import React, { Component } from 'react'
import logoutService from '../API/logoutService'

function Logout({state, dispatch}) {
  function handleLogout(e) {
    e.preventDefault()
    logoutService(dispatch)
  }
  return (
    <button onClick={handleLogout}>Sign Out</button>
  )
}

module.exports = Logout
