// Import needed libraries and components
import React from 'react';
import styled from 'styled-components';
import Step from '../presentational/Step';

// Titles for the transaction steps
const transactionSteps = [
    'Transaction info',
    'Recipient info',
    'Make payment'
 ];

class TransactionNav extends React.Component {
    // Function that can be used to change the active element in the steps navigation (implemented statically)
    isActive(item) {
        return item === 0 ? "active" : "";
    }
    
    render() {
        return (
            <div className={this.props.className}>
                {transactionSteps.map((step, i) =>
                    <Step className={this.isActive(i)} key={i} title={step} index={i+1} />
                )}
            </div>
        )
    }
}

export default styled(TransactionNav)`
    display: flex;
    border-bottom: 4px solid #6ec0e633;
`