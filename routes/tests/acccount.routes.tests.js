const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Account = require('../../models/account.model');
const app = require('../../server');
chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe('Account apis testing', () => {
  before((done) => {
    done();
    // mongoose.connect('mongodb://127.0.0.1:27017/mern-videos-test', { 
    //   useNewUrlParser: true,
    //   useCreateIndex: true
    // });
    // const connection = mongoose.connection;
    // connection.once('open', function() {
    //   console.log("We are connected to test database!");
    //   done();
    // })
    // connection.on('error', (error) => {
    //   console.error('Connection test database error', error);
    // })
  })

  describe('Test Create Account Api', () => {
    it ('Create Account => POST /accounts', (done) => {
      chai.request(app)
      .post('/accounts')
      .send({
        userName: 'tan',
        password: '123456',
        fullName: 'tan nguyen'
      })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.status(200)
        done();
      })
      .catch((err) => {
        done(err)
      })
    })

    it ('Get created account', (done) => {
      Account.findOne({
        userName: 'tan'
      })
      .then((account) => {
        console.log(account);
        expect(account).to.have.property('userName').to.equal('tan');
        done();
      })
      .catch((err) => {
        done(err);
      });
    })

    it ('Create duplicate userName, expect response body status = 400', (done) => {
      chai.request(app)
      .post('/accounts')
      .send({
        userName: 'tan',
        password: '123456',
        fullName: 'tan nguyen'
      })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.status(400);
        done();
      })
      .catch((err) => {
        done(err)
      })
    })
  })

  describe('Test login api', () => {
    it('Login with correct userName and password', (done) => {
      chai.request(app)
      .post('/accounts/login')
      .send({
        userName: 'tan',
        password: '123456'
      })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.status(200);
        expect(res.body).to.have.property('data').to.have.property('userName').to.equal('tan')
        done();
      })
      .catch((err) => {
        done(err);
      })
    });

    it('Login with incorrect userName and password', (done) => {
      chai.request(app)
      .post('/accounts/login')
      .send({
        userName: 'tan',
        password: '1234567'
      })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.status(401);
        done();
      })
      .catch((err) => {
        done(err);
      })
    })
  })

  after(function(done){
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done)
    });
  });
})