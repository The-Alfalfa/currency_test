// Import needed images, libraries and components
import React, {Component} from "react";
import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import padlock from "../../../assets/padlock.svg";
import refresh from "../../../assets/refresh.svg";
import phone from "../../../assets/phone.svg";
import Button from '../presentational/Button';

const VerificationHead = styled.div`
    border-bottom: #e0e0e0;
    border-bottom: 2px solid #e0e0e0;
    padding: 0 30px;

    ${FlexContainer} {
        align-items: flex-end;

        img {
            height: 28px;
            width: 28px;
            display: inline-block;
            margin-right: 10px;
        }
    
        p {
            color: #768895;
            font-size: 18px;
            font-weight: 500;
            display: inline-block;
        }
    }

    > p {
        font-size: 14px;
        line-height: 1.5;
        color: #808080;
        margin: 15px 0;
    }
`

const VerificationBody = styled.div`
    padding: 55px 20px;
    color: #3c454b;
    max-width: 420px;
    margin: auto;
    text-align: center;

    p {
        display: inline-block;
        color: #999999;
        border: 1px solid #dedddd;
        line-height: 1.69;
        padding: 2px 5px;
    }

    p:first-child {
        background: #f0eded;
    }

    p:last-child {
        background: #fbfcfc;
        border-left: 0;
    }

    .phone {
        display: block;
        margin: 10px auto;
    }

    @media screen and (min-width: 767px) {
        padding: 55px 93px;
        max-width: 100%;
        text-align: left;

        .phone {
            display: inline-block;
            margin: 0;
        }
    }
`

const Input = styled.input`
    height: 35px;
    width: 35px;
    border-radius: 4px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    padding: 5px;
    font-size: 28px;
    color: #999999;
    text-align: center;
    margin-right: 5px;

    &:last-child {
        margin-right: 0;
    }

    @media screen and (min-width: 500px) {
        height: 54px;
        width: 54px;
    }
`

const Actions = styled(FlexContainer)`
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;

    img {
        height: 14px;
        width: 14px;
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        border: 0;
        padding: 0;
        cursor: pointer;
    }

    @media screen and (min-width: 500px) {
        width: 50%;
        justify-content: flex-start;

        &:last-child {
            justify-content: flex-end;
        }
    }
`

const VerificationFooter = styled.div`
    border-top: 2px solid #e0e0e0;
    padding: 25px;
    box-sizing: border-box;

    .willFullWidth {
        width: 100%;
        margin-top: 10px;
    }

    ${Button} {
        padding: 10px 15px;
        font-size: 12px;
    }

    a {
        text-decoration: none;
        color: #64b5f6;
        font-size: 12px;
    }

    @media screen and (min-width: 500px) {
        .willFullWidth {
            width: auto;
            margin-top: 0;
        }
    }
`

const InputsContainer = styled(FlexContainer)`
    margin: 30px 0 15px;

    @media screen and (max-width: 500px) {
        justify-content: center;
    }
`

const prefix = '+353'; // Phone prefix - Could be changed dynamically
const number = '872251177'; // Phone number - Could be changed dynamically
var emptyPressed = false; // Flag to control when the backspace button is pressed

class TransactionVerification extends Component {
    constructor(props){
        super(props);
        this.state = {
            emptyInputs : 5, // Number of inputs not filled
            verified: false // State used to enable/disable the 'Verify' button
        };
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    // Verifies the number of remaining inputs
    checkVerification () {

        if(this.state.emptyInputs < 0) { // Controls that the state is minimum 0
            this.setState({
                emptyInputs :0
            });
        }

        // If all inputs are filled, enable 'Verify' button, otherwise disable it
        if(this.state.emptyInputs === 0){
           this.setState({ verified: true })
        }else{
            this.setState({ verified: false })
        }
    }

    // Function called every time one input changes
    handleKeyUp (e) {

        // If there is a next input, auto-focus it
        if (e.target.value.length === e.target.maxLength) {
            if(e.target.nextSibling !== null){
                e.target.nextSibling.focus();
            }
        }

        if (e.keyCode !== 8 && this.state.emptyInputs >= 0){ // If an empty input is filled, update the number of emptyInputs
            emptyPressed = true;
            this.setState({
                emptyInputs : this.state.emptyInputs - 1
            });
            this.checkVerification(); // Verify after state update
        }else if(e.keyCode === 8 && emptyPressed){ // If an empty input is removed, update the number of emptyInputs
            emptyPressed = false;
            this.setState({
                emptyInputs : this.state.emptyInputs + 1
            });
            this.checkVerification(); // Verify after state update
        }
    }

    // Send prop to parent and close the modal
    handleCloseModal () {
        this.props.onClose();
    }

    render() {
        return(
            <div className={this.props.className}>
                <VerificationHead>
                    <FlexContainer alignment="start">
                        <img src={padlock} alt="padlock" />
                        <p>Identity verification required</p>
                    </FlexContainer>
                    <p>For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device.</p>
                </VerificationHead>
                <VerificationBody>
                    Enter the code sent via SMS to <div className="phone"><p>{prefix}</p><p>{number}</p></div>
                    <InputsContainer spaced>
                        <Input autoFocus className="input" type="text" name="code-1" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-2" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-3" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-4" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-5" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-6" maxLength="1" onKeyUp={this.handleKeyUp} />
                    </InputsContainer>
                    <FlexContainer>
                        <Actions alignment="start">
                            <img src={refresh} alt="refresh" />
                            <p>Receive a new code</p>
                        </Actions>
                        <Actions>
                            <img src={phone} alt="phone" />
                            <p>Receive code via call instead</p>
                        </Actions>
                    </FlexContainer>
                </VerificationBody>
                <VerificationFooter>
                    <FlexContainer spaced vAlign>
                        <div>
                            <Button as="primary" component="button" margin="0 15px 0 0" disabled={!this.state.verified}>Verify Identity</Button>
                            <Button onClick={this.handleCloseModal} as="secondary" component="button">Back</Button>
                        </div>
                        <div className="willFullWidth">
                            <a href="">I can't access this mobile device</a>
                        </div>
                    </FlexContainer>
                </VerificationFooter>
            </div>
        )
    }
}

export default TransactionVerification