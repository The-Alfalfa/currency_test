import styled from 'styled-components';
import PropTypes from "prop-types";
import Col from './Col';

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    ${props => props.vAlign && `
        align-items: center;
    `}

    ${props => props.spaced ? `
        justify-content: space-between;
    ` : `
    justify-content: center;
    `}

    ${Col} {
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }
    }
`

FlexContainer.propTypes = {
    spaced: PropTypes.bool,
    vAlign: PropTypes.bool
}

export default FlexContainer