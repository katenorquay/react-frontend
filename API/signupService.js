import request from 'superagent'
import loginService from './loginService'

function signupService(userInfo, dispatch) {
  dispatch({type: 'LOGIN_INIT'})
  request
    .post(`http://localhost:3000/v1/users`)
    .send({user: userInfo})
    .end((err, res) => {
      if (err) {
        dispatch({type: 'SIGNUP_UNSUCCESSFUL'})
      } else {
        loginService({username: userInfo.email, password: userInfo.password, grant_type: 'password'}, dispatch)
      }
    })
}

module.exports = signupService
