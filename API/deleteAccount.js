import request from 'superagent'

function deleteAccount(userInfo, dispatch, user) {
  request
    .delete("http://localhost:3000/v1/users/" + user.id)
    .set('Authorization', user.access_token)
    .send(userInfo)
  .end((err, res) => {
    if (err) {
      console.log(err)
    } else {
      dispatch({type: 'SIGNOUT'})
    }
  })
}

module.exports = deleteAccount
