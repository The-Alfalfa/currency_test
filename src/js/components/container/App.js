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
    
    @media screen and (min-width: 767px) {
        display: none;
    }
`

class App extends React.Component {
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
                        <Col md="5" right>
                            <MobileOpener>SUMMARY</MobileOpener>
                            <TransactionSummary />
                        </Col>
                    </FlexContainer>
                </Container>
            </div>
        );
    }
}

export default App;