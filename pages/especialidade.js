import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Head from 'next/head'
import dayjs from 'dayjs'
import Main from '../layouts/main'
import { FaDownload } from 'react-icons/fa'
import TextareaAutosize from 'react-autosize-textarea'
import 'dayjs/locale/pt-br'

const primaryColor = "#ffd32a"

const SpecialityWrapper = styled.div`
    max-width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    
    h2, h3 {
        background: #fff;
    }
    
    h2 {
        font-size: 1.3rem;
        padding: 16px 0;
        color: #636e72;
        text-weight: bold;
        text-align: center;
    }
    
    h3 {
        color: #7f8c8d;
        font-style: italic;
    }
`

const Title = styled.h1`
  color: inherit;
  font-size: 2.2rem;
  font-weight: bold;
  transition: color 0.2s;
  background: #fff;
  text-align: center;
  margin-top: 16px;
  padding: 16px;
  
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
    margin-top: 16px;
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

const StyledTextarea = styled(TextareaAutosize)`
    padding: 26px;
    background: transparent;
    text-align: justify;
    font-size: 1.3rem;
    border: none;
    width: 90%;
    height: 600px;
    overflow: hidden;
    resize: none;   
`

const Especialidade = props => {
    const { title, author, speciality, publishedAt, author_avatar, material, article } = props.speciality
    return (
        <Fragment>
            <Head>
                <title>OrtoConecta | {props.speciality.title}</title>
            </Head>
            <Main>
                <SpecialityWrapper>
                    <Title>{title}</Title>
                    <Img src={`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${author_avatar.url}`} alt={author} />
                    <h2>{author} ({speciality})</h2>
                    <h3>Publicado em {
                        dayjs.locale('pt-br'),
                        dayjs(publishedAt).format('DD_MMMM_YYYY').split('_').join(' de ')
                    }</h3>
                    <Download href={`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${material.url}`} target="blank"><FaDownload style={{ background: 'transparent', fontSize: '1.2rem', marginRight: '10px' }} /> Baixar Material</Download>
                    <StyledTextarea 
                        disabled
                        async
                        defaultValue={article} 
                    />
                </SpecialityWrapper>
            </Main>
        </Fragment>
    );
}

Especialidade.getInitialProps = async ({ query }) => {
    const response = await axios.get(`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/specialities/${query.id}`)
    
    return { speciality: response.data }
}

export default Especialidade