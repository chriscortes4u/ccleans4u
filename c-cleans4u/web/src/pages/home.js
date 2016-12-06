const React = require('react');
import Head from 'next/head'
import Link from 'next/link'

const Home = React.createClass({
  render(){
    return (

      <div className="pa3 pa5-ns">
      <h1 className="tc mt2 mb0 baskerville i fw1 f1">Welcome to Chris Cleans 4u!</h1>
        <h2 className="tc mt2 mb0 f6 fw4 ttu tracked">Let Chris do the cleaning for you!</h2>
        <nav className="bt bb tc mw7 center mt4">
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/chriscortes4u">Home</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/history">History</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/packages">Packages</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/referrals">Referrals</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/signin">Sign In</a>
      </nav>
      </div>

    )
  }
})

module.exports = Home
