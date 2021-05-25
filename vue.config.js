module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/vue3-mouse-tip/' :
    '/',
  css: { 
    extract: false 
  }
}