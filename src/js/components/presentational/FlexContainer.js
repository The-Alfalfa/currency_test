import styled from 'styled-components';
import Col from './Col';

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    ${props => props.spaced && `justify-content: space-between;`}

    ${Col} {
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }
    }
`

export default FlexContainer