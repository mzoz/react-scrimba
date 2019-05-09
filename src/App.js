import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {first: "", last: "", isFriendly: true, gender: ""}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target)
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : 
                              this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="first" value={this.state.first} placeholder="First name" onChange={this.handleChange} />
                    <br /   >
                    <input type="text" name="last" value={this.state.last} placeholder="Last name" onChange={this.handleChange} />
                    <p>{this.state.first} {this.state.last}</p>

                    <textarea />

                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isFriendly"
                            checked={this.state.isFriendly} 
                            onChange={this.handleChange}
                            /> Is friendly?
                    </label>  

                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"} 
                            onChange={this.handleChange}
                            /> Male
                    </label> 

                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female  "} 
                            onChange={this.handleChange}
                            /> Female
                    </label>   
                </form>
            </div>
        )
    }
}

export default App