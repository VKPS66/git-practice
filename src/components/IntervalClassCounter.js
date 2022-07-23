import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    render() {
        return (
            <div>Count is {this.state.count}</div>
        )
    }
}

export default IntervalClassCounter
