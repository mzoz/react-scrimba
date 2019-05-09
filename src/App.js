import React, {Component} from "react"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: "", 
            last: "", 
            age: null, 
            gender: null,
            destination: "",
            dietaryRestrictions: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type} = event.target
        console.log(name, value, type)
        // type === "checkbox" ? this.setState({[name]: checked}) : 
        //                       this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="first" value={this.state.first} onChange={this.handleChange} />
                    <input type="text" name="last" value={this.state.last} onChange={this.handleChange} />
                    <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
                    <br />

                    <select multiple value={this.state.gender} onChange={this.handleChange}>
                        <option value="male">male</option>
                        <option value="femail">femail</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default App