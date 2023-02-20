import FlipCoin from "./FlipCoin"
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <h2>Flip the coin!</h2>
        < FlipCoin />
      </div>
    )
  }
}
export default App