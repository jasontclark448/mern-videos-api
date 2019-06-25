const express = require('express')
const Account = require('../models/account.model')
const addAccountSuccessRes = require('../responses/account/addAccountSuccess.res')
const addAccountFailRes = require('../responses/account/addAccountFail.res')
const accountRoutes = express.Router();

accountRoutes.route('/').get(function (req, res) {
  Account.find(function(err, accounts) {
    if (err) {
      console.error(err)
    } else {
      res.json(accounts)
    }
  })
})

accountRoutes.route('/').post(function(req, res) {
  console.log(req.body)
  let account = new Account(req.body);
  account.save()
  .then((todo) => {
    res.json(addAccountSuccessRes())
  })
  .catch((err) => {
    console.error(err)
    res.json(addAccountFailRes())
  })
})

module.exports = accountRoutes