import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Head from 'next/head'
import { Link } from '../routes'
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
    
    h2 {
        font-size: 3rem;
        text-align: center;
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
                    {sorted.map(experience => (
                        <Link prefetch key={experience.id} route={`https://ortoconecta-plataforma-front-brunogcpinheiro.c9users.io:8080/experiencias/${experience.id}`}>
                            <Experience>
                                <Fragment>
                                    <img src={`https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${experience.thumbnail.url}`} alt={experience.title} />
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
    const experiencesResponse = await axios.get(`https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/experiences`)
    const commentsResponse = await axios.get(`https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/comments`)
    
    return { experiences: experiencesResponse.data, comments: commentsResponse.data }
}

export default Experiencias