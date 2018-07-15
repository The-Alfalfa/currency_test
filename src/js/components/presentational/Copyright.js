import React from "react";
import styled from "styled-components";
import FlexContainer from "./FlexContainer";

const Link = styled.a`
    text-decoration: none;
    color: #64b5f6;
`

const Left = styled.div`
    color: #bdbdbd;
    font-size: 12px;
`

const Right = styled.div`
    font-size: 12px;

    a:first-child {
        margin-right: 20px;
    }
`

const Copyright = (props) => (
    <div className={props.className}>
        <FlexContainer spaced>
            <Left>
                <p>{'\u00A9'} 2016 CurrencyFair</p>
            </Left>
            <Right>
                <Link href="">Help & Support</Link>
                <Link href="">Legal Stuff</Link>
            </Right>
        </FlexContainer>
    </div>
);

export default styled(Copyright)`
    margin-top: 60px;
    padding-top: 14px;
    border-top: 1px solid #eeeeee;
`