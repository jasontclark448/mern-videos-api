const badRequest = require('../badRequest')
module.exports = ({ message } = {}) => {
  return badRequest({
    message: message
  })
}