import request from 'superagent'

function editAccount(userInfo, dispatch, user) {
  request
    .put("http://localhost:3000/v1/users/" + user.id)
    .set('Authorization', user.access_token)
    .send(userInfo)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch({type: 'EDITING'})
      }
    })
  }

module.exports = editAccount
