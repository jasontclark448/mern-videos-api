const express = require('express');
const videoSearch = require('youtube-search');
const getVideosSuccessRes = require('../responses/videos/getVideosSuccess.res');
const getVideosFailRes = require('../responses/videos/getVideosFail.res')
const videoRoutes = express.Router();

videoRoutes.route('/').get((req, res) => {
  const opts = Object.assign({
    key: process.env.API_KEY,
    type: 'video',
    order: 'date'
  }, req.query);
  videoSearch('', opts, (err, results, pageInfo) => {
    if(err) return res.json(getVideosFailRes(err));
    return res.json(getVideosSuccessRes(results, pageInfo))
  })
})

module.exports = videoRoutes