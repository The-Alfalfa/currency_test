// Import needed libraries and components
import React from 'react';
import styled from 'styled-components';

// Using the step number of the form navigation, the text can be changed here
const transactionHeads = {
    '1': {
        title: `Let's set up your transaction!`,
        subtitle: `Specify the amount to be sent or received.`
    }
}

const TransactionHeader = (props) => (
  <div className={props.className}>
    <h3>{transactionHeads[props.step].title}</h3>
    <p>{transactionHeads[props.step].subtitle}</p>
  </div>
)

export default styled(TransactionHeader)`
    padding: 40px 0 30px;

    h3 {
        font-weight: 300;
        font-size: 18px;
    }

    p {
        font-size: 14px;
        color: #757575;
    }
`