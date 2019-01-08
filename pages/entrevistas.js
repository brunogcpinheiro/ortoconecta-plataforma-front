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
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
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
                <h2>Entrevistas com especialistas</h2>
                {props.interviews.map(interview => (
                    <EntrevistasWrapper key={interview.id}>
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