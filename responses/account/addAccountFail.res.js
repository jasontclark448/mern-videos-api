const badRequest = require('../badRequest')
module.exports = ({ message } = {}) => {
  return badRequest({
    message: 'add new account failed'
  })
}