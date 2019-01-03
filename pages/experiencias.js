import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Head from 'next/head'
import Link  from 'next/link'
import Iframe from 'react-iframe'
import Main from '../layouts/main'
import { FaRegCommentAlt } from 'react-icons/fa'

const primaryColor = "#ffd32a"

const ExperiencesWrapper = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 980px) {
    width: 100%;
  }
`

const Experience = styled.div`
    margin: 35px auto;
    width: 95%;
    display: flex;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    transition: 0.5s background;
    
    img {
        width: 40%;
        height: 35%;
        
        @media (max-width: 980px) {
            width: 60%;
            height: 60%;
        }
    }
    
    div {
        margin-left: 16px;
        height: 100%;
        margin-top: 10px;
        
        h1 {
            font-size: 1.3rem;
            text-align: center;
        }
        
        p {
            margin-top: 10px;
            text-align: justify;
            
            span {
                margin-left: 20px;
            }
        }
        
        span {
            font-weight: bold;
        }
    }
    
    @media (max-width: 980px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    &:hover {
        -webkit-box-shadow: 1px 3px 5px 0px #f6e58d;
        -moz-box-shadow: 1px 3px 5px 0px #f6e58d;
        box-shadow: 1px 3px 5px 0px #f6e58d;
        border: 1px solid ${primaryColor};
        cursor: pointer;
        background: ${primaryColor};
        transition: 0.5s background;
    }
`

const Reactions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
`

const Experiencias = props => {
    const sorted = props.experiences.sort((a,b) => (a.publishedAt > b.publishedAt) ? 1 : ((b.publishedAt > a.publishedAt) ? -1 : 0)).reverse();
    
    return (
        <Main>
            <Head>
                <title>OrtoConecta | Experiências</title>
            </Head>
            <ExperiencesWrapper>
                <h2>Compartilhando Experiências OrtoConecta</h2>
                    <IframeContainer>
                        <img src="/static/saiba-mais.png" />
                        <Iframe url="https://www.youtube.com/embed/wSRpbzust_w"
                          width="100%"
                          height="380px"
                          display="initial"
                          position="relative"
                          className="iframe"
                          styles={{ marginTop: '15px' }}
                          allowFullScreen
                        />
                     </IframeContainer>
                    {sorted.map(experience => (
                        <Link key={experience.id} href={`/experiencias/${experience.id}`} prefetch>
                            <Experience data-aos="fade-down-right" data-aos-duration="1000">
                                <Fragment>
                                    <img src={`http://api.ortoconecta.com.br${experience.thumbnail.url}`} alt={experience.title} />
                                    <div>
                                        <h1>{experience.title}</h1>
                                        <p>{experience.description}<span>Leia mais...</span></p>
                                        <Reactions>
                                            <FaRegCommentAlt style={{ fontSize: '1.5rem', marginLeft: '10px', padding: '10px' }} /> ({experience.comments.length})
                                        </Reactions>
                                    </div>
                                </Fragment>
                            </Experience>
                        </Link>
                        ))}
            </ExperiencesWrapper>
        </Main>
    )
}

Experiencias.getInitialProps = async () => {
    const experiencesResponse = await axios.get(`http://api.ortoconecta.com.br/experiences`)
    
    return { experiences: experiencesResponse.data }
}

export default Experiencias