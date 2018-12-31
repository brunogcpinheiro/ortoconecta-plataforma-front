import React from 'react'
import styled from 'styled-components'
import Iframe from 'react-iframe'
import Head from 'next/head'
import { FaDownload } from 'react-icons/fa'
import Main from '../layouts/main'

const primaryColor = "#ffd32a"

const PainelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 16px;
  max-width: 1366px;

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

const Download = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    margin-top: 16px;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1em;
    text-transform: uppercase;
    background: ${primaryColor};
    border: 2px solid ${primaryColor};
    
    &:visited, &:active, &:link {
        color: inherit;
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
                <div>
                    <Download href="/static/slide.jpg" download="painel.jpg">
                        <FaDownload style={{ background: 'transparent', fontSize: '1.2rem', marginRight: '10px' }} /> Baixar Painel OrtoConecta
                    </Download>
                </div>
                <PainelContainer data-aos="flip-down" data-aos-duration="1000" data-aos-easing="linear">
                    <img src="/static/slide.jpg" alt="Painel OrtoConecta" />
                </PainelContainer>
            </PainelWrapper>
        </Main>
    )
}

export default Painel