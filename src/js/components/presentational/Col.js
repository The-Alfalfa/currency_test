import styled from 'styled-components';

const colSize = {
    '5': 41.6666666,
    '7': 58.3333333
}

const Col = styled.div`
    width: ${props => props.md ? colSize[props.md] : `100` }%;
    padding: 55px;
    ${props => props.fixed && `
        position: fixed;
        top: 66px;
        right: 0;
        height: 100vh;
        border-left: 1px solid #e0e0e0;
        background: #fbfbfb;
    `}
`

export default Col