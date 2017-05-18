import request from 'superagent'

function loginService(userInfo, dispatch) {
  userInfo.grant_type = 'password'
  dispatch({type: 'LOGIN_INIT'})
  request
    .post(`http://localhost:3000/v1/sessions`)
    .send(userInfo)
    .end((err, res) => {
      if (err) {
        console.log(err)
        dispatch({type: 'LOGIN_UNSUCCESSFUL'})
      } else {
        console.log(res)
        dispatch({type: 'LOGIN_SUCCESSFUL', payload: {user: res.body}})
      }
    })
  }

module.exports = loginService
