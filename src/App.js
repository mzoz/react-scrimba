import React from "react"

class App extends React.Component {
    constructor() {
        super()
    }

    handleMouseOver() {
        console.log('mouse over image')
    }

    render() {
        return (
            <div>
                <img src="https://www.fillmurray.com/200/100" onMouseOver={this.handleMouseOver} />
                <br />
                <br />
            </div>
        )
    }
}

export default App