const React = require('react')
const Home = require('./pages/home')
//const About = require('./pages/about')
const Contact = require('./pages/contact')
const App = React.createClass({
  render () {
    return (
      <Home />
    //  <Contact />
    )
  }
})

module.exports = App
