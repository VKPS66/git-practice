import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0,
        }
    }

    logMousePosition = e => {
        console.log('logMousePisition handler')
        this.setState({
            x: e.clientX,
            y: e.clientY,
        })
    }
    
    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>{this.state.x}, {this.state.y}</div>
        )
    }
}

export default ClassMouse