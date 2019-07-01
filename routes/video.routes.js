const express = require('express');
const videoSearch = require('youtube-search');
const getVideosSuccessRes = require('../responses/videos/getVideosSuccess.res');
const getVideosFailRes = require('../responses/videos/getVideosFail.res')
const videoRoutes = express.Router();

videoRoutes.route('/').get((req, res) => {
  const opts = Object.assign({
    key: process.env.API_KEY,
    type: 'video',
    order: 'date',
    maxResults: 5
  }, req.query);
  try {
    videoSearch('', opts, (err, results, pageInfo) => {
      console.error(err);
      if (err) return res.json(getVideosFailRes(err));
      return res.json(getVideosSuccessRes(results, pageInfo));
    })
  } catch (err) {
    console.error(err);
    return res.json(getVideosFailRes(err));
  }
  
})

module.exports = videoRoutes