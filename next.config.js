module.exports = {
  assetPrefix: './',
  // basePath: '/',
  // trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/pesonagens' : { page: '/personagens'}
    }
  }
}
