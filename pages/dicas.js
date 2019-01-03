import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Router from 'next/router'
import axios from 'axios'
import Iframe from 'react-iframe'
import swal from 'sweetalert2'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
dayjs.extend(relativeTime)
import Main from '../layouts/main'

const primaryColor = "#FFD32A"

const TipsWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/static/Imagem3.png');
    background-attachment: fixed;
    background-position: top center;
    background-size: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 7px;
`

const Title = styled.div`
    width: 50%;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        width: fit-content;
        text-align: center;
        font-size: 3rem;
        background: #fff;
    }
    
    p {
        border: 3px solid ${primaryColor};
        text-align: center;
        padding: 16px;
        font-size: 1.5rem;
        color: royalblue;
        background: #f5f5f5;
    }   
`

const TipContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    @media(max-width: 960px) {
        width: 100%;
    }
`

const TipWrapper = styled.div`
    width: 30%;
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

const CommentsWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
`

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 15px;
    background: #f5f5f5;
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
    margin-bottom: 20px;
    background: #f5f5f5;
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

const CommentBtn = styled.button`
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

class Dicas extends Component {
    state = {
        author: '',
        author_email: '',
        body: '',
    }
    
    handleSubmit = async e => {
        e.preventDefault()
        
        const newComment = {
            author: this.state.author,
            author_email: this.state.author_email,
            date: dayjs().format(),
            body: this.state.body,
        }
        
        if (this.state.author && this.state.author_email && this.state.body) {
            await axios.post(`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/tipsComments`, newComment)
            .then(this.setState({
                author: '',
                author_email: '',
                body: ''
            })).then(
                swal({
                  type: 'success',
                  title: 'Comentário adicionado com sucesso!'
                })
            )
            .catch(() => {
                swal({
                  type: 'error',
                  title: 'Algo errado com a requisição. Tente novamente!'
                })
            })
            Router.replace(`http://www.ortoconecta.com.br/dicas`)
        } else {
            swal({
              type: 'error',
              title: 'Preencha todos os dados!'
            })
        }
    }
    
    render () {
        const sorted = this.props.comments.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0)).reverse();   
    
        return (
            <Fragment>
                <Head>
                    <title>OrtoConecta | Dicas clínicas</title>
                </Head>
                <Main>
                    <TipsWrapper>
                            <Title>
                                <h1>Dicas OrtoConecta</h1>
                                <p>Uma área destinada à prática e conceitos modernos para você utilizar no dia a dia do seu consultório. Todo conhecimento agregado gera valor e faz com que você transmita a segurança necessária para cativar o seu paciente. <br />Navegue neste espaço e deixe seu comentário.</p>
                            </Title>
                            <TipContainer className="animated bounceIn delay-1s">
                                {this.props.tips.map(tip => (
                                    <TipWrapper key={tip.id}>
                                        <VideoWrapper>
                                              <Iframe url={`https://www.youtube.com/embed/${tip.video_url}`} 
                                                position="relative"
                                                width="100%"
                                                height="100%"
                                                display="initial"
                                                className="iframe"
                                                allowFullScreen
                                              />
                                        </VideoWrapper>
                                        <h2>{tip.title}</h2>
                                    </TipWrapper>  
                                ))}
                            </TipContainer>
                            
                            <CommentsWrapper>
                            <NewComment>
                                <h3>Novo Comentário</h3>
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <input type="text" placeholder="Nome..." onChange={(e) => this.setState({ author: e.target.value })} value={this.state.author}   />
                                    <input type="email" placeholder="Email..." onChange={(e) => this.setState({ author_email: e.target.value })} value={this.state.author_email}   />
                                    <textarea rows="5" placeholder="Comentário..." onChange={(e) => this.setState({ body: e.target.value })} value={this.state.body}></textarea>
                                    <CommentBtn type="submit">Comentar</CommentBtn>
                                </form>
                            </NewComment>
                            {sorted.map(comment => (
                                <Comment key={comment.id}>
                                    <div>
                                        <h3>{comment.author}</h3>
                                        <h4>{comment.author_email}</h4>
                                        <small>{
                                            dayjs.locale('pt-br'),
                                            dayjs(comment.date).fromNow()
                                        }</small>
                                          <p>{comment.body}</p>
                                    </div>
                                </Comment>
                            ))}
                        </CommentsWrapper>
                    </TipsWrapper>
                </Main>
            </Fragment>
        )
    }
}

Dicas.getInitialProps = async() => {
    const tipsResponse = await axios.get(`http://api.ortoconecta.com.br/tips`)
    const commentsResponse = await axios.get(`http://api.ortoconecta.com.br/tipsComments`)
    
    return { tips: tipsResponse.data, comments: commentsResponse.data }
}

export default Dicas