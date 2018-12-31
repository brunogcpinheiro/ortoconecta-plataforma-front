import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import axios from 'axios'
import Main from '../layouts/main'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 16px;
  max-width: 1366px;
  height: calc(100vh - 362px);

  h2 {
    font-size: 3rem;
    text-align: center;
    
    animation-name: flash;
    animation-duration: 0.7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
  }
  
  @keyframes h2 {
        from {color: yellow;}
        to {color: black;}
    }
`

const Aplicativo = props => {
    return (
        <Main>
            <Head>
                <title>OrtoConecta | Aplicativos</title>
            </Head>
            <AppWrapper>
                <h2>Aguardem...</h2>
            </AppWrapper>
        </Main>
    )
}

export default Aplicativo