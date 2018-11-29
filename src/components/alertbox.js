import React from 'react'
import styled from 'styled-components'
import { FaRegWindowClose } from 'react-icons/fa'

const Box = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    background: #ee5253;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    p {
        flex: 1
    }
`

const AlertBox = props => (
    <Box>
        <p>{props.errorMessage}</p>
        <FaRegWindowClose style={{ fontSize: '2rem', color: '#000' }}/>
    </Box>
);

export default AlertBox