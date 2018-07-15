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
    padding: 55px 93px;
    color: #3c454b;

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
`

const Input = styled.input`
    height: 54px;
    width: 54px;
    border-radius: 4px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    padding: 5px;
    font-size: 28px;
    color: #999999;
    text-align: center;

    &:last-child {
        margin-right: 0;
    }
`

const Actions = styled(FlexContainer)`
    width: 50%;
    align-items: center;

    &:last-child {
        justify-content: flex-end;
    }

    img {
        height: 14px;
        width: 14px;
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        border: 0;
        padding: 0;
    }
`

const VerificationFooter = styled.div`
    border-top: 2px solid #e0e0e0;
    padding: 25px;
    box-sizing: border-box;

    ${Button} {
        padding: 10px 15px;
        font-size: 12px;
    }
`

const InputsContainer = styled(FlexContainer)`
    margin: 30px 0 15px;
`

const prefix = '+353';
const number = '872251177';

class TransactionVerification extends Component {
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleKeyUp (e) {
        if (e.target.value.length === e.target.maxLength) {
            if(e.target.nextSibling !== null){
                e.target.nextSibling.focus();
            }
            
        }
    }

    handleCloseModal () {
        this.props.onClose();
    }

    render() {
        return(
            <div className={this.props.className}>
                <VerificationHead>
                    <FlexContainer>
                        <img src={padlock} alt="padlock" />
                        <p>Identity verification required</p>
                    </FlexContainer>
                    <p>For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device.</p>
                </VerificationHead>
                <VerificationBody>
                    Enter the code sent via SMS to <p>{prefix}</p><p>{number}</p>
                    <InputsContainer spaced>
                        <Input autoFocus className="input" type="text" name="code-1" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-2" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-3" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-4" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-5" maxLength="1" onKeyUp={this.handleKeyUp} />
                        <Input className="input" type="text" name="code-6" maxLength="1" onKeyUp={this.handleKeyUp} />
                    </InputsContainer>
                    <FlexContainer>
                        <Actions>
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
                    <FlexContainer spaced>
                        <Button as="primary" component="button" margin="0 15px 0 0" disabled>Verify Identity</Button>
                        <Button onClick={this.handleCloseModal} as="secondary" component="button">Back</Button>
                    </FlexContainer>
                </VerificationFooter>
            </div>
        )
    }
}

export default TransactionVerification