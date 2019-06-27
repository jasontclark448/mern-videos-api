const express = require('express');
const videoSearch = require('youtube-search');
const videoRoutes = express.Router();

videoRoutes.route('/').get((req, res) => {
  const opts = Object.assign({
    maxResults: 10,
    key: process.env.API_KEY,
    location: '37.42307,-122.08427'
  }, req.query);
  videoSearch('jsconfig', opts, (err, results) => {
    if(err) return console.log('>>>>>>>>>>>>>>>>>>>>EEEEEEEE', err.response.data.error);
    res.json(results)
  })
})

module.exports = videoRoutes