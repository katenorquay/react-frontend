function generateLabels(signUp) {
  if (signUp) {
    return {button: 'Log In!', title: 'Sign Up!'}
  } else {
    return {button: 'Sign Up!', title: 'Log In!'}
  }
}

module.exports = generateLabels
