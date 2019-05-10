import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            top: "",
            bottom: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })
    }

    handleInput(event) {
        let {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        let {allMemeImgs} = this.state
        let img = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)];
        console.log(img.url)
        this.setState({randomImg: img.url})
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <label>top text 
                        <input name="top" type="text" onInput={this.handleInput}/>
                    </label>
                    {/* <div>{this.state.top}</div> */}
                    <label>bottom text
                        <input name="bottom" type="text" onInput={this.handleInput}/>
                    </label>
                    {/* <div>{this.state.bottom}</div> */}
                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.top}</h2>
                    <h2 className="bottom">{this.state.bottom}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator