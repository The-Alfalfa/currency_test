// Import needed libraries and components
import React from 'react';
import TransactionNav from '../container/TransactionNav';
import TransactionHeader from '../presentational/TransactionHeader';
import AmountSelector from '../presentational/AmountSelector';
import Button from '../presentational/Button';
import Modal from './Modal';
import TransactionVerification from '../presentational/TransactionVerification';

class TransactionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            EUR: "2000.00",
            GBP: "1717.94",
            popup: false
        };
        this.calcConversion = this.calcConversion.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    // Change state to show the modal clicking on 'Next'
    handleButtonClick = (e) => {
        e.preventDefault();
        this.setState({
            popup: true
        })
    }

    // Change state to show the modal clicking on 'Back'
    handlePopupClose = () => {
        this.setState({
            popup: false
        })
    }

    // Automatically calculate pounds amount from euros. Could be implemented if the user can change the amount using an imput to auto-calculate de conversion
    calcConversion (amount) {
        return (parseInt(amount,10) * 0.85772) + 2.50; // Conversion rate + fee
    }

    // Change active state of conversion options (implemented statically)
    isActive () {
        return true;
    }

    render() {
        return (
            <div className={this.props.className}>
                <TransactionNav />
                <TransactionHeader step="1" />
                <AmountSelector className={this.isActive() && 'active'} sender currency="EUR" amount={this.state.EUR} />
                <AmountSelector className={!this.isActive() && 'active'} currency="GBP" amount={this.calcConversion(this.state.EUR)} />
                <Button onClick={this.handleButtonClick} as="primary" component="button" margin="36px 0 0">Next</Button>
                {this.state.popup !== false &&
                    <Modal isOpened={this.state.popup !== false}>
                        <TransactionVerification onClose={this.handlePopupClose} />
                    </Modal>
                }
            </div>
        )
    }
}

export default TransactionForm