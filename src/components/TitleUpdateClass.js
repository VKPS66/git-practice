import React, { Component } from 'react'

class TitleUpdateClass extends Component {
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
    }

    clickHandler = () => {
        this.setState({ count: this.state.count + 1 })
    }

    changeHandler = (event) => {
        this.setState({name: event.target.value})
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.name} 
                    onChange={this.changeHandler}
                />
                <button onClick={this.clickHandler}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default TitleUpdateClass