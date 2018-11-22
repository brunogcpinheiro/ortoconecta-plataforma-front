import React from 'react'
import styled from 'styled-components'
import Iframe from 'react-iframe'
import Head from 'next/head'
import Main from '../layouts/main'

const PainelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  margin: 50px auto;
  padding: 16px;

  h2 {
    font-size: 3rem;
  }
`

const Painel = props => {
    return (
        <Main>
            <Head>
                <title>OrtoConecta | Painel</title>
            </Head>
            <PainelWrapper>
                <h2>Painel OrtoConecta</h2>
                <Iframe url="https://www.youtube.com/embed/pSFqDSUX4kE"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="iframe"
                    display="initial"
                    position="relative"
                    styles={{ marginTop: '15px' }}
                    allowFullScreen
                />
            </PainelWrapper>
        </Main>
    )
}

export default Painel