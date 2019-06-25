const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mern-videos-test', { 
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', function() {
  console.log("We are connected to test database!");
})
connection.on('error', (error) => {
  console.error('Connection test database error', error);
})
