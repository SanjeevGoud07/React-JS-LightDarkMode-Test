// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isLight: false, class1: 'Div1', text: 'Light Mode'}

  onLight = () => {
    this.setState(prevState => {
      console.log('Hi')
      return {isLight: false, text: 'Light Mode'}
    })
  }

  onDark = () => {
    this.setState(prevState => {
      console.log('Bye')
      return {isLight: true, text: 'Dark Mode'}
    })
  }

  authButton = () => {
    const {isLight} = this.state

    if (isLight === true) {
      return (
        <button type="button" onClick={this.onLight}>
          Dark Mode
        </button>
      )
    }
    return (
      <button type="button" onClick={this.onDark}>
        Light Mode
      </button>
    )
  }

  render() {
    const {isLight, class1, text} = this.state
    return (
      <div className="container">
        {/* {this.authButton()} */}

        {isLight ? (
          <div className="Div1">
            <h1>Click To Change Mode</h1>
            <button type="button" onClick={this.onLight}>
              {text}
            </button>
          </div>
        ) : (
          <div className="Div2">
            <h1>Click To Change Mode</h1>
            <button type="button" onClick={this.onDark}>
              {text}
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
