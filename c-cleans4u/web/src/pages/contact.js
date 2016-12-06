const React = require('react')
import Head from 'next/head'
import Link from 'next/link'

const Contact = React.createClass({
  // getInitialState(){
  //    return ({
  //      error:"",
  //      result:{},
  //      person: {
  //        firstName: "",
  //        lastName: "",
  //        phone: "",
  //        email: ""
  //      }
  //    })
  //  },
  //  handleChange(field){
  //    return e => {
  //      var person = this.state.person
  //      person[field] = e.target.value
  //      this.setState({person})
  //    }
  //  },
  //  handleSubmit(e){
  //    e.preventDefault()
  //    xhr({
  //      url: 'http://localhost:4000/person',
  //      method: 'POST',
  //      json: this.state.person
  //    },(err, res) => {
  //      if (err) return this.setState({error: err.message})
  //      this.setState({result: res})
  //    })
  //  },

  render(){
    return (
      <div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
        <Head>

            <title>Chris Cleans 4u</title>
            <meta name="viewport" content="inital-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
        </Head>
        <div class="tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div class="tc">
            <img class="tc br-100 h4 w4 dib ba b--black-05 pa2 mw-145 mh-145 " src="/static/chris4.jpg" />
            
          </div>
        </div>

          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">Chris Cleans 4u</h1>
          <p className="tc">Chris Cleans 4u is the perfect app for you and your customers.</p>
            <div className="fw1 f5 mt0 mb3">Click <Link href="/about"><a>here</a></Link> to read more</div>
            <form>
            <form onSubmit={this.handleSubmit}>
                      <div>
                        <label>
                        first name
                        </label>
                        <input
                        /* value={this.state.firstName}
                         onChange={this.handleChange('firstName')} */ />
                      </div>
                      <div>
                        <label>
                        last name
                        </label>
                        <input
                      /*  value={this.state.lastName}
                        onChange={this.handleChange('lastName')} */  />
                      </div>
                      <div>
                        <label>
                          phone
                        </label>
                        <input
                      /*  value={this.state.phone}
                        onChange={this.handleChange('phone')} */ />
                      </div>
                      <div>
                        <label>
                          email
                        </label>
                        <input
                      /*  value={this.state.email}
                          onChange={this.handleChange('email')} */ />
                      </div>
                      <div>
                        <button>Submit</button>
                      </div>
                    </form>
            </form>

          <img src="/static/circleClean.png" />
      </div>


    )
  }
})

module.exports = Contact
