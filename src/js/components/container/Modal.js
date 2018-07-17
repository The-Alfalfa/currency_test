// Import needed libraries and components
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Portal } from 'react-portal' // External library with 'modal' functionalities

export default class Modal extends Component {
  static propTypes = {  // Properties for Portal
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]),
    isOpened: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ]),
    onClose: PropTypes.func,
    full: PropTypes.bool
  }

  // Close Portal
  handlePortalClose = () => {
    this.props.onClose && this.props.onClose()
  }

  render () {
    const ModalWindow = styled.div`
      width: 580px;
      max-width: 90vw;
      border-radius: 4px;
      background: #ffffff;
      padding: 30px 0;
      box-sizing: border-box;
    `

    const ModalWrapper = styled.div`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.75);
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    return (
      <Portal
        closeOnEsc
        isOpened={this.props.isOpened !== false}
        onClose={this.handlePortalClose}
      >
        <ModalWrapper>
          <ModalWindow>
            {this.props.children}
          </ModalWindow>
        </ModalWrapper>
      </Portal>
    )
  }
}