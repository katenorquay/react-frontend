import request from 'superagent'
dispatch({type: 'LOGIN_INIT'})
request
  .post(`http://localhost:3000/auth/sign_in`)
  .send(userInfo)
  .withCredentials()
  .end((err, res) => {
    if (err) {
      dispatch({type: 'LOGIN_UNSUCCESSFUL'})
    } else {
      dispatch({type: 'LOGIN_SUCCESSFUL', payload: res.body.user})
    }
  })
}
