import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {logged: false}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let toggled = !this.state.logged
        this.setState({logged: toggled})
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.logged ? <span>Logout</span> : <span>Login</span>}
            </button>
        )
    }
}

export default App