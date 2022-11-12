import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {showClock: false}
  }

  onChangeButtonText = () => {
    this.setState(prev => ({showClock: !prev.showClock}))
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onChangeButtonText}
        >
          {showClock ? 'Hide Clock' : 'Show clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
