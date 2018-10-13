import React, {Component} from 'react'
import Measure from 'mezrmouse'

import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      distance: 0
    }
  }

  render() {
    const {distance} = this.state

    return (
      <div className='App'>
        <div className='Form'>
          <div className='Form__title'>
            Create an account
          </div>
          <form>
            <label>
              <span>First Name *</span>
              <input />
              <div className='error' style={{opacity: distance}} />
            </label>
            <label>
              <span>Last Name *</span>
              <input defaultValue='Berko' />
            </label>
            <label>
              <span>Email Address *</span>
              <div className='error' style={{opacity: distance}} />
              <input />
            </label>
            <label>
              <span>Phone Number</span>
              <input defaultValue='202-555-1243' />
            </label>
            <label style={{gridColumn: '2 span'}}>
              <span>Company Name</span>
              <input defaultValue='Electronics' />
            </label>
            <div className='actions'>
              <Measure distance={100} onCloseUp={(percent) => this.setState({distance: percent})}>
                <button disabled>Register</button>
              </Measure>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
