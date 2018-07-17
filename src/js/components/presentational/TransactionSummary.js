import React from "react";
import styled from "styled-components";
import FlexContainer from "./FlexContainer";

const SummaryDiv = styled(FlexContainer)`
    padding: 14px 20px;
    border-bottom: #e0e0e0;
    background: ${props => props.head ? `#fafafa` : `#ffffff` };
    ${props => !props.noBorder && `border-bottom: 1px solid #e0e0e0;`}

    p {
        font-size: 14px;
        color: ${props => props.head ? `#616161` : `#9e9e9e` };

        &.black {
            color:#616161;
        }

        &.yellow {
            color:#ffc766;
            font-size: 12px;
        }

        &.link {
            color:#64b5f6;
            font-size: 12px;
            cursor: pointer;

            span {
                font-size: 7px;
                color: #ffffff;
                background: #64b5f6;
                border-radius: 50%;
                height: 10px;
                width: 10px;
                display: inline-block;
                text-align: center;
                line-height: 12px;
            }
        }
    }

    ${FlexContainer} {
        padding: 7px 0;
    }
`

const TransactionSummary = (props) => (
    <div className={props.className}>
        <SummaryDiv head spaced vAlign>
            <p>Sending Details</p>
        </SummaryDiv>
        <SummaryDiv spaced vAlign>
            <p>You send</p>
            <p className="black">€2000.00</p>
        </SummaryDiv>
        <SummaryDiv head spaced vAlign>
            <p>Receiving Details</p>
            <p className="link">As of right now <span>?</span></p>
        </SummaryDiv>
        <SummaryDiv spaced vAlign>
            <FlexContainer spaced vAlign>
                <p>Rate</p>
                <p>0.86022</p>
            </FlexContainer>
            <FlexContainer spaced vAlign>
                <p>Fee</p>
                <p>£2.50</p>
            </FlexContainer>
            <FlexContainer spaced vAlign>
                <p>Delivery date</p>
                <p>25th November</p>
            </FlexContainer>
            <FlexContainer spaced vAlign>
                <p>Recipient gets</p>
                <p className="black">£1717.94</p>
            </FlexContainer>
        </SummaryDiv>
        <SummaryDiv vAlign noBorder>
            <p className="yellow">You save £66.19 compared your bank!</p>
        </SummaryDiv>
    </div>
);

export default styled(TransactionSummary)`
   max-width: 310px;
   width: calc(100% - 20px);
   border: 1px solid #e0e0e0;
`