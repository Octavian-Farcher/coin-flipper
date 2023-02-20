import React, { Component } from 'react'
import Coin from './Coin'
import './FlipCoin.css'

class FlipCoin extends Component {
    constructor(props) {
        super(props);
        this.state = { flips: 0, tails: 0, heads: 0, clicked: false }
        this.onClick = this.onClick.bind(this)
        this.resetButton = this.resetButton.bind(this)
    }
    onClick(e) {
        this.setState({ clicked: true })
        setTimeout(() => { this.setState({ coin: Math.floor(Math.random() * 2), clicked: false, flips: this.state.flips = this.state.flips + 1 }) }, 1000)

        setTimeout(() => {
            if (this.state.coin === 1) {
                this.setState({ heads: this.state.heads + 1 })
            }
            else {
                this.setState({ tails: this.state.tails + 1 })
            }
        }, 1050)
    }
    resetButton(e) {
        this.setState({ flips: 0, tails: 0, heads: 0, clicked: false })
    }
    render() {
        return (
            <div className='FlipCoin'>
                <Coin coin={this.state.coin} clicked={this.state.clicked} />
                <div className='buttons'>
                    {this.state.clicked ? <button disabled className='flip'>Se invarte...</button> : <button onClick={this.onClick} className='flip'>🤞 Roll 🤞</button>}
                    <button className='reset' onClick={this.resetButton}>❗ Reset ❗</button>
                </div>
                <h4>The coin has been flipped {this.state.flips} times!</h4>
                <h4>It flipped {this.state.heads} times heads and {this.state.tails} times tails</h4>
            </div>
        )
    }
}

export default FlipCoin 