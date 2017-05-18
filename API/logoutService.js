import request from 'superagent'

function logoutService(dispatch) {
  request
    .delete(`http://localhost:3000/v1/sessions`)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch({type: 'SIGNOUT'})
      }
    })
}

module.exports = logoutService
