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
  margin: 50px auto;
  padding: 16px;

  h2 {
    font-size: 3rem;
    text-align: center;
  }
`

const IframeContainer = styled.div`
  width: 60%;
  
  @media(max-width: 980px) {
    width: 100%;
  }
`

const PainelContainer = styled.div`
    
    margin: 30px auto;
    
    img {
        width: 100%;
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
                <IframeContainer>
                    <Iframe url="https://www.youtube.com/embed/pSFqDSUX4kE"
                        width="100%"
                        height="380px"
                        className="iframe"
                        display="initial"
                        position="relative"
                        styles={{ marginTop: '15px' }}
                        allowFullScreen
                    />
                </IframeContainer>
                <PainelContainer>
                    <img src="/static/slide.jpg" alt="Painel OrtoConecta" />
                </PainelContainer>
            </PainelWrapper>
        </Main>
    )
}

export default Painel