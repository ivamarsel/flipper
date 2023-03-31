import React, { Component } from 'react';
import Coin from './Coin';
import './Flipper.css';
import kennedyFace from './kennedyFace.jpeg';
import kennedyTail from './kennedyTail.jpeg';
import { choice } from './Helpers'

class Flipper extends Component {
    static defaultProps = {
        coin: [
            kennedyFace,
            kennedyTail
        ]
    }

    // //coins could have been: 
    // coin: [
    //     {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"}.
    //     {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    // ]

    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            flips: 0,
            heads: 0,
            tails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coin) //we are calling the function choice with the coin array as an argument.
        this.setState(st => {
            let newState = {
                ...st, //this will unpack the existing values of heads and tails in state and add to them the following updates:
                currCoin: newCoin,
                flips: st.flips + 1,
            }
            if (newCoin === this.props.coin[0]) {
                newState.heads += 1;
            } else {
                newState.tails += 1;
            }
            return newState;
        });
    }


    handleClick(e) {
        this.flipCoin();
    }

    render() {
        return (
            <div>
                <h2>Let's flip a coin!</h2>
                <button onClick={this.handleClick} >FLIP MEEE!</button>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                // if currCoin is null(null is a falsy value) it wont show Coin in the beginning. if not it will show it.
                <p> Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>

            </div>
        )
    }
}
export default Flipper;