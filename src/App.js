import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {first: "", last: ""}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="first" value={this.state.first} placeholder="First name" onChange={this.handleChange} />
                    <br /   >
                    <input type="text" name="last" value={this.state.last} placeholder="Last name" onChange={this.handleChange} />
                </form>
                <p>{this.state.first} {this.state.last}</p>
            </div>
        )
    }
}

export default App