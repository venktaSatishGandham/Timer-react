import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    console.log('this is component did mount')
    this.timerId = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    console.log('It is UnMounting')
    clearInterval(this.timerId)
  }

  render() {
    const {date} = this.state
    console.log('render gets called')
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
