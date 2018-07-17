// Import needed logo, libraries and components
import React from "react";
import styled from "styled-components";
import logo from "../../../assets/CF_logo_RGB_NEG.svg";
import Container from "./Container.js";

const Header = (props) => (
  <div className={props.className}>
    <Container>
        <img src={logo} alt="currencyfair logo" />
    </Container>
  </div>
);

export default styled(Header)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 66px;
  background: #32323c;
  width: 100%;
  padding: 0 12px;

  img {
    height: 100%;
    width: auto;
    max-height: 100%;
  }
`