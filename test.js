const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const Account = require('./models/account.model');
describe('Database tests', () => {
  before((done) => {
    mongoose.connect('mongodb://127.0.0.1:27017/mern-videos-test', { 
      useNewUrlParser: true,
      useCreateIndex: true
    });
    const connection = mongoose.connection;
    connection.once('open', function() {
      console.log("We are connected to test database!");
      done();
    })
    connection.on('error', (error) => {
      console.error('Connection test database error', error);
    })
  })

  describe('Test Account document', () => {
    it ('Create new account', (done) => {
      const account = new Account({
        userName: 'tan',
        password: '123456',
        fullName: 'tan nguyen'
      })
      account.save()
      .then((a) => {
        done();
      })
      .catch((error) => {
        throw error
      })
    })

    it ('Create new account with duplicate. Expect Error', (done) => {
      const account = new Account({
        userName: 'tan',
        password: '123456',
        fullName: 'tan nguyen'
      })
      account.save()
      .then((a) => {
        throw new Error('userName cannot duplicate')
      })
      .catch((error) => {
        done()
      })
    })
  })

  after(function(done){
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done)
    });
  });
})