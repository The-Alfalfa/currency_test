// Import needed libraries and components
import styled from 'styled-components';
import PropTypes from "prop-types";

// Specify column sizes (can be used to create an own grid system like Boostrap)
const colSize = {
    '5': 41.6666666,
    '7': 58.3333333
}

const Col = styled.div`
    padding: 20px;
    box-sizing: border-box;

    ${props => props.willFullWidth && ` width: 100%; `}
    ${props => props.right && `
        height: calc(100vh - 66px);
        border-left: 1px solid #e0e0e0;
        background: #fbfbfb;
        position: fixed;
        right: 0;
        top: 66px;
        transform: translate3d(100%,0,0);
        transition: transform 0.3s ease;

        &:after {
            content: '';
            background: #fbfbfb;
            position: fixed;
            left: 0;
            top: 0;
            width: 50vw;
            height: 100vh;
            z-index: -1;
        }
    `}

    &:first-child {
        padding-left: 0;
    }

    ${props => props.opened === true && `transform: translate3d(28px,0,0);`}

    @media screen and (min-width: 400px) {
        padding: 20px;
    }

    @media screen and (min-width: 767px){
        width: ${props => props.md ? colSize[props.md] : `90` }%;

        ${props => props.right && `
            position: static;
            transform: translate3d(0,0,0);
        `}
    }

    @media screen and (min-width: 1024px){
        padding: 55px;
    }
`

Col.propTypes = {
    md: PropTypes.string,
    right: PropTypes.bool,
    willFullWidth: PropTypes.bool
}

export default Col