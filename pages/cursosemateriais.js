import React, { Fragment } from 'react'
import styled from 'styled-components'
import Iframe from 'react-iframe'
import axios from 'axios'
import Head from 'next/head'
import moment from 'moment'
import Main from '../layouts/main'
import { FaDownload } from 'react-icons/fa'

const primaryColor = "#ffd32a";

const TipsWrapper = styled.div`
    padding: 16px;
    background: transparent;
    
    div {
        margin-top: 50px;
        text-align: center;
    }
    
    h2 {
        font-size: 3rem;
        
        span {
            color: ${primaryColor};
            font-size: 3rem;
            font-weight: bold;
        }
    }
    
    h2, p {
        text-align: center;
    }
`

const TipWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    
    @media(max-width: 980px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

const Tip = styled.div`
    width: 350px;
    height: 100%;
    min-height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    padding: 16px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    flex-wrap: wrap;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    
    h3 {
        color: #7f8c8d;
        font-style: italic;
        background: #fff;
    }
    
    h4 {
        font-size: 1.3rem;
        background: #fff;
    }
    
    h5 {
        background: #fff;
    }
    
    p {
        flex: 1;
        text-align: justify;
        margin-top: 16px;
        font-size: 1.1rem;
        background: #fff;
    }
`

const Title = styled.h1`
  color: inherit;
  font-size: 2.2rem;
  font-weight: bold;
  transition: color 0.2s;
  background: #fff;
  text-align: center;
  
  &:hover {
    color: #000;
    transition: color 0.2s;
  }
`

const Img = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    border: 2px solid ${primaryColor};
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

const Tips = props => {
    return (
        <Fragment>
            <Head>
                <title>Orto Conecta | Dicas</title>
            </Head>
            <Main>
                <TipsWrapper>
                    <div>
                        <h2>Material <span>exclusivo</span> Orto Conecta</h2>
                        <p>Estudo sobre Alicates Ortodônticos</p>
                        <Iframe url="https://www.slideshare.net/slideshow/embed_code/key/wuMVMJvfdz3k5J"
                            width="70%"
                            height="500px"
                            className="iframe"
                            display="initial"
                            position="relative"
                            styles={{ marginTop: "50px" }}
                            allowFullScreen 
                        />
                    </div>
                    
                    <div>
                        <h2>Materiais <span>gratuitos</span> Orto Conecta</h2>
                        <p><strong>OBS.:</strong> Baixe o material para ler o artigo completo!</p>
                        <TipWrapper>
                            {props.tips.map(tip => (
                                <Tip key={tip.id}>
                                    <Img src={`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${tip.tips_image.url}`} alt={tip.title} />
                                    <div>
                                        <Title>{tip.title}</Title>
                                        <h3>Publicado em {
                                            moment.locale('pt-br'),
                                            moment(tip.publishedAt).format("LL")
                                        }</h3>
                                        <h4>Por {tip.author}</h4>
                                        <h5>Páginas: {tip.pages}</h5>
                                        <Download href={`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${tip.material.url}`} target="blank"><FaDownload style={{ background: 'transparent', fontSize: '1.2rem', marginRight: '10px' }} /> Baixar Material</Download>
                                        <p>{tip.description}</p>
                                    </div>
                                </Tip> 
                            ))}
                        </TipWrapper>
                    </div>
                </TipsWrapper>
            </Main>
        </Fragment>
    );
}

Tips.getInitialProps = async ({ query }) => {
    const response = await axios.get(`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/tips`)
    
    return { tips: response.data }
}

export default Tips