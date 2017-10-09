require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'OpenMath',
    description: 'A project to bring Math studying and learning resources, free, via Open Source',
    head: {
      titleTemplate: 'OpenMath: %s',
      meta: [
        {name: 'description', content: 'A project to bring Math studying and learning resources, free, via Open Source'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'OpenMath'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'OpenMath'},
        {property: 'og:description', content: 'A project to bring Math studying and learning resources, free, via Open Source'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@devinmatte'},
        {property: 'og:creator', content: '@devinmatte'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
