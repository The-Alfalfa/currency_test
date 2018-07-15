import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = (props) => (
  <div className={props.className}>
    {props.children}
  </div>
)

Container.propTypes = {
  children: PropTypes.any
}
export default styled(Container)`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  ${props => props.flex && `display: flex;`}
`