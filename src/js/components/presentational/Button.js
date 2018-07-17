// Import needed libraries and components
import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from "prop-types";

// Create component that can be <a> or <button> tag using props.
// Can be disabled.
// Margins can be added.
// Target for <a> tag can be specified. 
// Must contain theming
class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    component: PropTypes.oneOf(['a', 'button']).isRequired,
    disabled: PropTypes.bool,
    as: PropTypes.oneOf(['primary', 'secondary']),
    target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
    margin: PropTypes.string,
    children: PropTypes.any
  }

  render () {
    const {component: Component, as, className, children, disabled, margin, ...props} = this.props

    return (
      <Component className={className} disabled={this.props.component === 'button' ? disabled : undefined} {...props}>
        {children}
      </Component>
    )
  }
}

const primary = css`
  border: 1px solid #589ab8;
  background: #6ec0e6;
  color: #ffffff;

  &:hover {
    background: #589ab8;
  }
`

const secondary = css`
  border: 1px solid #e0e0e0;
  color: #768895;
  background: #fbfdfd;

  &:hover {
    background: #768895;
    color: #ffffff;
  }
`

export default styled(Button)`
    margin: ${props => props.margin ? `${props.margin}` : `0`};
    display: inline-block;
    padding: 18px 15px;
    border-radius: 4px;
    font-size: 16px;
    -webkit-transition: background .2s, color .2s;
    -moz-transition: background .2s, color .2s;
    transition: background .2s, color .2s, opacity 0.2s;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    vertical-align: middle;
    user-select: none;

    :focus {
    outline: none;
    }
  
    ${props => props.as === 'primary' && primary}
    ${props => props.as === 'secondary' && secondary}

    ${props => props.disabled && `
        opacity: 0.4;
        pointer-events: none;
    `}
`