import React, {Component} from "react"

// https://swapi.co/
// promise

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => this.setState({character: data, loading: false}))
    }



    render(data) {
        return (
            <div>
                {this.state.loading ? "loading" : null}
                {this.state.character.name}
            </div>
        )
    }
}

export default App