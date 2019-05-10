import React, {Component} from "react"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: "", 
            last: "", 
            age: "", 
            gender: "",
            destination: "",
            dietary: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {type, name, value} = event.target
        if (type === "select-multiple") {
            console.log("dietary:", this.state.dietary)
            console.log("selectedOptions:", event.target.selectedOptions)
            // this.setState({[name]: Array.from(event.target.selectedOptions, (item) => item.value)});
            let ops = [...event.target.options].filter(o => o.selected).map(o => o.value)
            console.log("options:", event.target.options)
            console.log("options arr:", [event.target.options])
            console.log("ops:", ops)
            this.setState({[name]: ops})
            // this.setState({[name]: ["kos", "veg"]})
        } else {
            this.setState({[name]: value})
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="first" value={this.state.first} onChange={this.handleChange} />
                    <input type="text" name="last" value={this.state.last} onChange={this.handleChange} />
                    <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
                    <br />

                    <div>
                        <label>
                            <input type="radio" name="gender" value="male" onChange={this.handleChange} />
                            male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" onChange={this.handleChange} />
                            female
                        </label>
                    </div>


                    <select name="dietary" multiple={true} value={this.state.dietary} onChange={this.handleChange}>
                        <option value="veg">vegetarian</option>
                        <option value="kos">kosher</option>
                        <option value="lac">lactose free</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default App