module.exports = {
  assetPrefix: './',
  // basePath: '/',
  // trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/pesonagens' : { page: '/personagens'},
      '/arquivos' : { page: '/arquivos' },
      '/login' : { page: '/login' },
      '/fichaonline' : { page : '/fichaonline' }
    }
  }
}
