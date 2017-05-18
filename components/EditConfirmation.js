import React, { Component } from 'react'

function EditConfirmation({state}) {
  if (state.editingSuccessful) {
    return (
      <p>Password was successfully edited</p>
    )
  } else {
    return (
      <p></p>
    )
  }
}

export default EditConfirmation
