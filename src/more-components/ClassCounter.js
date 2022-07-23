import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: '',
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate() {
        console.log('title updated.')
        document.title = `Clicked ${this.state.count} times`
    }

    handler = () => this.setState(prevState => ({count: prevState.count + 1}))
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                <button onClick={this.handler}>Click</button>
            </div>
        )
    }
}

export default ClassCounter