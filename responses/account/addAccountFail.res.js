const badRequest = require('../badRequest')
module.exports = () => {
  return badRequest({
    message: 'add new account failed'
  })
}