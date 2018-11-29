import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import Iframe from 'react-iframe'
import Head from 'next/head'
import Main from '../layouts/main'
import { FaRegThumbsUp, FaRegCommentAlt } from 'react-icons/fa'

const primaryColor = "#ffd32a"

const ExperienceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    padding: 16px;
    
    h2 {
        font-size: 2.5rem;
    }
`

const Experience = styled.div`
    margin: 35px auto;
    width: 80%;
    display: flex;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    transition: 0.5s background;
    
    div:first-child {
        flex: 2;
        height: 100%;
    }
    
    div:last-child {
        flex: 1;
        margin-left: 15px;
        
        h1 {
            margin-bottom: 16px;
            text-align: center;
            font-size: 1.5rem;
        }
        
        p {
            text-align: justify;
        }
    }
    
    @media (max-width: 780px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const CommentsWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    transition: 0.5s background;
    width: 120%;
    height: 100%;
    margin-top: 20px;
    
    div {
        padding: 10px;
        
        h3 {
            font-size: 1.3rem;
            color: ${primaryColor};
            margin-bottom: 5px;
        }
        
        h4 {
            color: #999;
            font-size: 0.9rem;
            margin-bottom: 5px;
        }
        
        small {
            font-style: italic;
            font-size: 0.8rem;
            margin-bottom: 5px;
        }
        
        p {
            margin-top: 20px;
            font-size: 1.1rem;
        }
    }
`

const NewComment = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    
    form {
        display: flex;
        flex-direction: column;
        padding: 16px 0;
        
        input {
            margin: 10px;
            padding: 10px;
        }
        
        textarea {
            margin-top: 10px;
            padding: 10px;
        }
    }
`

const CommentBtn = styled.a`
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

const Reactions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
`

const Experiencia = props => {
    const sorted = props.experience.comments.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0)).reverse();
    return (
        <Main>
            <Head>
                <title>OrtoConecta | {props.experience.title}</title>
            </Head>
            <ExperienceWrapper>
                <Experience>
                    <Fragment>
                        <div>
                            <Iframe url={`http://www.youtube.com/embed/${props.experience.video_url}`}
                                position="relative"
                                width="100%"
                                height="500px"
                                display="initial"
                                className="iframe"
                                allowFullScreen />
                        </div>
                        <div>
                            <h1>{props.experience.title}</h1>
                            <p>{props.experience.description}</p>
                            <Reactions>
                                <FaRegThumbsUp style={{ fontSize: '1.5rem', marginTop: '-4px', padding: '10px' }} /> (4)
                                <FaRegCommentAlt style={{ fontSize: '1.5rem', marginLeft: '10px', padding: '10px' }} /> ({props.experience.comments.length})
                            </Reactions>
                        </div>
                    </Fragment>
                </Experience>
                <h2>Comentários</h2>
                <CommentsWrapper>
                    <NewComment>
                        <h3>Novo Comentário</h3>
                        <form>
                            <input type="text" placeholder="Nome..." />
                            <input type="email" placeholder="Email..." />
                            <textarea placeholder="Comentário..."></textarea>
                            <CommentBtn>Comentar</CommentBtn>
                        </form>
                    </NewComment>
                    {sorted.map(comment => (
                        <Comment key={comment.id}>
                            <div>
                                <h3>{comment.author}</h3>
                                <h4>{comment.author_email}</h4>
                                <small>{
                                    moment.locale('pt-br'),
                                    moment(comment.date).format("LLL")
                                }</small>
                                  <p>{comment.body}</p>
                            </div>
                        </Comment>
                    ))}
                </CommentsWrapper>
            </ExperienceWrapper>
        </Main>
    )
}

Experiencia.getInitialProps = async ({ query }) => {
    const experienceResponse = await axios.get(`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/experiences/${query.id}`)
    
    return { experience: experienceResponse.data }
}

export default Experiencia