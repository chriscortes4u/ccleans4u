const React = require('react')
import Head from 'next/head'
import Link from 'next/link'

const Contact = React.createClass({

  render(){
    return (
      <div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green  mb2">
        <Head>

            <title>Chris Cleans 4u</title>
            <meta name="viewport" content="inital-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
        </Head>
        <div class="tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div class="tc">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">Chris Cleans 4u</h1>
            <img class="tc br-100 h4 w4 dib ba b--black-05 pa2 mw-145 mh-145 " src="/static/chris4.jpg" />

          </div>
        </div>


          <p className="tc">Chris Cleans 4u is the perfect for you and your customers.</p>
            <div className="fw1 f5 mt0 mb3">Click <Link href="/about"><a>here</a></Link> to read more.</div>
            <di>
              <ul className="list pl0">
                <li>ChrisCleans4u</li>
                <li>1-888-570-5409</li>
                <li>1234 Really Clean Ave.</li>
                <li>Mount Pleasant SC 29466</li>
              </ul>
            </di>

          <img src="/static/circleClean.png" />
      </div>


    )
  }
})

module.exports = Contact
