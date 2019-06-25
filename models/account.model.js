const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Account = new Schema({
  userName: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  fullName: {
    type: String
  }
})

module.exports = mongoose.model('Account', Account)