const express = require('express')
const Account = require('../models/account.model')
const addAccountSuccessRes = require('../responses/account/addAccountSuccess.res');
const addAccountFailRes = require('../responses/account/addAccountFail.res');
const loginSuccessRes = require('../responses/account/loginSuccess.res')
const loginFailRes = require('../responses/account/loginFail.res')
const accountRoutes = express.Router();

accountRoutes.route('/').get((req, res) => {
  Account.find()
  .then((accounts) => {
    res.json(accounts)

  })
  .catch((err) => {
    res.json(err)
  })
})

accountRoutes.route('/').post((req, res) => {
  let account = new Account(req.body);
  account.save()
  .then((todo) => {
    res.json(addAccountSuccessRes())
  })
  .catch((err) => {
    res.json(addAccountFailRes())
  })
})

accountRoutes.route('/login').post((req, res) => {
  const { userName, password } = req.body
  Account.findOne({
    userName,
    password
  })
  .then((account) => {
    console.log('>>>>>>>>', account)
    if (account) {
      res.json(loginSuccessRes(account));
    } else {
      throw new Error('Account not found');
    }
  })
  .catch((err) => {
    console.error(err);
    res.json(loginFailRes(err));
  });
})

module.exports = accountRoutes