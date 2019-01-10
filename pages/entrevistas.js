import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import axios from 'axios'
import Iframe from 'react-iframe'
import Main from '../layouts/main'

const EntrevistaWrapper = styled.div`
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

const EntrevistasWrapper = styled.div`
    width: 32%;
    height: 400px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: space-around;
    background: #f5f5f5;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    transform: scale(1);
        transition: transform 0.5s;
    
    &:hover {
        transform: scale(1.1);
        transition: transform 0.5s;
    }
    
    h2 {
        text-align: center;
        font-size: 1.5rem;
    }
`

const VideoWrapper = styled.div`
    width: 100%;
    height: 300px;
`

const Entrevistas = props => {
    return (
        <Main>
            <Head>
                <title>OrtoConecta | Palavra do Especialista</title>
            </Head>
            <EntrevistaWrapper>
                <h2>Palavra do Especialista</h2>
                {props.interviews.map(interview => (
                    <EntrevistasWrapper key={interview.id} className="animated bounceIn delay-1s">
                        <VideoWrapper>
                              <Iframe url={`https://www.youtube.com/embed/${interview.video_url}`} 
                                position="relative"
                                width="100%"
                                height="100%"
                                display="initial"
                                className="iframe"
                                allowFullScreen
                              />
                        </VideoWrapper>
                        <h2>{interview.title}</h2>
                    </EntrevistasWrapper>
                ))}
            </EntrevistaWrapper>
        </Main>
    )
}

Entrevistas.getInitialProps = async () => {
    const response = await axios.get('http://api.ortoconecta.com.br/interviews')
    return { interviews: response.data }
}

export default Entrevistas