// Import needed libraries and components
import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Step = (props) => (
    <div className={props.className}>
      <p>Step {props.index}</p>
      <p>{props.title}</p>
    </div>
);

Step.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default styled(Step)`
  width: 33.334%;
  color: #b0bec5;
  font-size: 14px;
  padding-left: 2vw;
  box-sizing: border-box;
  line-height: 21px;
  padding-bottom: 12px;

  p {
    padding-right: 5px;
  }

  p:first-child {
    font-size: 12px;
    padding: 0;
  }

  &.active {
    color: #6ec0e6;
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 4px;
      background: #6ec0e6;
      position: absolute;
      bottom: -4px;
      left: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    padding-left: 44px;
  }
`