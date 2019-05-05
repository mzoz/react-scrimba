import React, {Component} from "react"
import Logging from "./Logging"

class App extends Component {
    constructor() {
        super()
        this.state = {logged: false}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

    }

    render() {
        return (
            <Logging handleClick={this.handleClick} />
        )
    }
}

export default App