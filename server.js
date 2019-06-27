require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const accountRoutes = require('./routes/account.routes');
const videoRoutes = require('./routes/video.routes');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mern-videos', { 
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/accounts', accountRoutes);
app.use('/videos', videoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

module.exports = app;