import React, { Component } from 'react'
import cap from './50bani_cap.jpg'
import pajura from './50bani_pajura2.jpg'
import './Coin.css'

class Coin extends Component {
    render() {
        return (
            <div>
                {this.props.clicked === false ?
                    <div >
                        {this.props.coin === 1 ?
                            <img className='cap' src={cap} alt='50bani_cap' />
                            : <img className='pajura' src={pajura} alt='50bani_pajura' />}
                    </div>
                    : <div >
                        {this.props.coin === 1 ?
                            <img className='rolling' src={cap} alt='50bani_cap' />
                            : <img className='rolling' src={pajura} alt='50bani_pajura' />}
                    </div>}
            </div>
        )
    }
}

export default Coin