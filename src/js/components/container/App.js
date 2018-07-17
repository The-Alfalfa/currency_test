// Import needed libraries and components
import React from "react";
import Header from "../presentational/Header";
import TransactionForm from "./TransactionForm";
import TransactionSummary from "../presentational/TransactionSummary";
import Container from "../presentational/Container";
import FlexContainer from "../presentational/FlexContainer";
import Col from "../presentational/Col";
import Copyright from "../presentational/Copyright";
import styled from "styled-components";

const MobileOpener = styled.div`
    display: block;
    writing-mode: vertical-lr;
    position: absolute;
    left: 0;
    height: calc(100vh - 66px);
    top: 0;
    text-align: center;
    transform: rotate3d(0,0,1,180deg) translate3d(30px,0,0);
    background: #6ec0e6;
    color: #ffffff;
    padding: 0 6px;
    box-sizing: border-box;
    cursor: pointer;
    
    @media screen and (min-width: 767px) {
        display: none;
    }
`

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            summaryOpened: false // State used to open/close the responsive sidebar
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // Handel click on mobile sidebar
    handleClick () {
        this.setState({
            summaryOpened : !this.state.summaryOpened
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <FlexContainer spaced>
                        <Col md="7" willFullWidth>
                            <TransactionForm />
                            <Copyright />
                        </Col>
                        <Col md="5" right opened={this.state.summaryOpened}>
                            <MobileOpener onClick={this.handleClick}>SUMMARY</MobileOpener>
                            <TransactionSummary />
                        </Col>
                    </FlexContainer>
                </Container>
            </div>
        );
    }
}

export default App;