const unAuthor = require('../unAuthor')
module.exports = ({ message } = {}) => {
  return unAuthor({
    message: 'userName or password fail'
  })
}