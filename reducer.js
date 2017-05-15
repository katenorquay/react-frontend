import clone from 'clone'

function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch(type) {
    case 'LOGIN_INIT':
      newState.loginInProgress = true
      return newState
    case 'LOGIN_SUCCESSFUL':
      console.log(payload)
      newState.loginInProgress = false
      newState.loginUnsuccessful = false
      newState.loggedIn = true
      newState.currentUser = payload
      return newState
    case 'LOGIN_UNSUCCESSFUL':
      newState.loginInProgress = false
      newState.loginUnsuccessful = true
      return newState
    case 'SIGNUP_UNSUCCESSFUL':
      newState.signupUnsuccessful = true
    default:
      return newState
  }
}

module.exports = reducer
