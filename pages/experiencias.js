import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import Main from '../layouts/main'
import { FaCommentDots } from 'react-icons/fa'

const primaryColor = "#ffd32a"

const ExperienciasWrapper = styled.div`
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

const NewExperience = styled.a`
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

const Experiencias = props => {
    return (
        <Main>
            <Head>
                <title>OrtoConecta | Experiências</title>
            </Head>
            <ExperienciasWrapper>
                <h2>Compartilhando Experiências OrtoConecta</h2>
                <p>Conte-nos sua experiência clicando abaixo</p>
                <Link href="http://ortoconecta-plataforma-front-brunogcpinheiro.c9users.io:8080/experiencias/nova">
                    <NewExperience>
                        <FaCommentDots style={{ background: 'transparent', fontSize: '1.2rem', marginRight: '10px' }} /> 
                        Nova Experiência
                    </NewExperience>
                </Link>
            </ExperienciasWrapper>
        </Main>
    )
}

export default Experiencias