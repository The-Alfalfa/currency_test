import React from "react";
import Header from "../presentational/Header";
import TransactionForm from "./TransactionForm";
import Container from "../presentational/Container";
import FlexContainer from "../presentational/FlexContainer";
import Col from "../presentational/Col";
import Copyright from "../presentational/Copyright";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <FlexContainer>
                        <Col md="7">
                            <TransactionForm />
                            <Copyright />
                        </Col>
                        <Col md="5" fixed>
                        </Col>
                    </FlexContainer>
                </Container>
            </div>
        );
    }
}

export default App;