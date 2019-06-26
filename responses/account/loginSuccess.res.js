const ok = require('../ok')
module.exports = (account) => {
  return ok({
    userName: account.userName,
    fullName: account.fullName
  })
}