import request from 'superagent'

function loginService(userInfo, dispatch) {
  dispatch({type: 'LOGIN_INIT'})
  request
    .post(`http://localhost:3000/auth/sign_in`)
    .send(userInfo)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        dispatch({type: 'LOGIN_UNSUCCESSFUL'})
      } else {
        console.log(res.header)
        dispatch({type: 'LOGIN_SUCCESSFUL', payload: res.header})
      }
    })
  }

module.exports = loginService
