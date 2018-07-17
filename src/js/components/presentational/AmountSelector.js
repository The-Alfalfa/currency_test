// Import needed libraries and components
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

// Define currencies with flag source file and currency symbol
const currency = {
    "EUR": {
        src: require('../../../assets/eu_flag.jpg'),
        symbol: '\u20AC'
    },
    "GBP": {
        src:  require('../../../assets/uk_flag.jpg'),
        symbol: '\u00A3'
    }
}

class AmountSelector extends Component {
    constructor(props) {
        super(props);
        this.splitAmount = this.splitAmount.bind(this);
    }

    // Split integer and decimals to create two different elements for different styling
    splitAmount(amount) {
        var integer = Math.floor(amount); // Get integer
        var decimal = amount - integer; // Get decimals
        decimal = String(decimal.toFixed(2)); // Just 2 decimals
        decimal = decimal.slice(decimal.indexOf('.')); // Remove '0.'
        return [integer, decimal];
    }

    render() {
        return(
            <div className={(this.props.className)}>
                <div className="amount">
                    <p>{this.props.sender ? 'YOU SEND' : 'RECEIVER GETS'}</p>
                    <p>{currency[this.props.currency].symbol} {this.splitAmount(this.props.amount)[0]}<span>{this.splitAmount(this.props.amount)[1]}</span></p>
                </div>
                <div className="flag">
                    <img src={currency[this.props.currency].src} alt="flag" />
                    {this.props.currency}
                </div>
            </div>
        )
    }

}

AmountSelector.propTypes = {
    currency: PropTypes.string.isRequired,
    className: PropTypes.string,
    amount: PropTypes.any.isRequired,
    sender: PropTypes.bool
  };
  

export default styled(AmountSelector)`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e6e6e6;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    &:last-child {
        border-top: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    .amount {
        color: #212121;
        font-size: 28px;

        p:first-child {
            font-size: 14px;
            color: #9e9e9e;
            margin-bottom: 10px;
        }

        span {
            font-size: 18px;
        }
    }

    .flag {
        padding: 8px;
        font-size: 12px;
        width: 77px;
        border: solid 1px #e0e0e0;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        display: flex;
        align-items: center;

        img {
            height: 21px;
            width: 21px;
            margin-right: 11px;
        }
    }

    &.active {
        background-color: rgba(110, 192, 230, 0.03);
        border: solid 1px #6ec0e6;

        .amount p:first-child {
            color: #6ec0e6;
        }
    }

    @media screen and (min-width: 400px) {
        padding: 24px;

        .flag {
            padding: 13px;
            font-size: 16px;
            width: 90px;
        }

        .amount {
            p {
                margin-bottom: -10px;
            }
        }
    }
`