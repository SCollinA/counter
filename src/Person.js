import React, { Component } from 'react'
import ScoreButton from './ScoreButton'

class Person extends Component {
    constructor(props) {
        super(props)
        this.name = props.name
        this.state = {
            score: 0
        }
    }

    render() {
        return (
            <div className="Person">
                <li> {this.name} : {this.state.score} </li>
                {/* <ScoreButton onClick={this.addPoint}/> */}
                <button onClick={this.addPoint}> Add Point </button>
            </div>
        )
    }
    
    addPoint = () => {
        // this is showing up as undefined here
        // unless I use an arrow function............
        console.log(this)
        this.setState({
            score: this.state.score + 1
        })
    }
}

export default Person