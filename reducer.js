import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'LOGIN_INIT':
      newState.loginInProgress = true
      return newState
    case 'LOGIN_SUCCESSFUL':
      newState.loginInProgress = false
      newState.loginUnsuccessful = false
      newState.loggedIn = true
      newState.currentUser = payload.user
      return newState
    case 'LOGIN_UNSUCCESSFUL':
      newState.loginInProgress = false
      newState.loginUnsuccessful = true
      return newState
    case 'SIGNUP_UNSUCCESSFUL':
      newState.signupUnsuccessful = true
      return newState
    case 'SIGNOUT':
      newState.loggedIn = false
      newState.editingSuccessful = false
      newState.currentUser = {}
      newState.newSignUp = false
      return newState
    case 'EDITING':
      newState.editingSuccessful = true
      return newState
    case 'TOGGLE_SIGNUP_LOGIN':
      newState.newSignUp = !newState.newSignUp
      return newState
    default:
      return newState
  }
}

module.exports = reducer
