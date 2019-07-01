const ok = require('../ok')
module.exports = (videos = [], pageInfo) => {
  return ok({
    videos: videos.map((item) => {
      return {
        id: item.id,
        link: item.link,
        title: item.title,
        description: item.description,
        thumbnails: item.thumbnails.default
      }
    }),
    pageInfo: {
      'totalResults': pageInfo.totalResults,
      'resultsPerPage': pageInfo.resultsPerPage,
      'nextPageToken': pageInfo.nextPageToken
    }
  })
}