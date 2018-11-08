import React, { Fragment } from 'react'
import styled from 'styled-components'
import Main from '../layouts/main'
import Head from 'next/head'

const primaryColor = "#ffd32a"

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/static/dentist.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const HeroInner = styled.div`
  background: transparent;
  color: #d6d6d6;
  margin-top: -50px;

  h1 {
    font-size: 3.5em;
    margin-top: 0;
    margin-bottom: 0.5em;
    background: transparent;
  }

  h2 {
    background: transparent;
    font-size: 1.7em;
  }

  a {
    display: block;
    width: 150px;
    padding: 1em;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1em;
    text-transform: uppercase;
    background: ${primaryColor};
    border: 2px solid ${primaryColor};
    transition: background 0.3s ease-in-out;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(94,94,94,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(94,94,94,1);
    box-shadow: 0px 3px 5px 0px rgba(94,94,94,1);

    &:hover {
      background: transparent;
      color: #fff;
      transition: background 0.3s ease-in-out;
    }
  }
`

const About = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 860px;
  margin: 26px auto;
  
  h1 {
    font-size: 5rem;
    color: ${primaryColor};
    font-weight: bold;
  }
  
  p {
    margin-top: 16px;
    text-align: justify;
    font-size: 1.5rem;
    color: #636e72;
    
    strong {
      font-size: 1.5rem;
      color: #181818;
    }
    
    span {
      margin-left: 24px;
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 2rem;
    margin-top: 24px;
    color: #636e72;
    
    span {
      margin-top: 16px;
      font-size: 2rem;
      color: #181818;
      font-weight: bold;
    }
  }
`

const Home = props => (
  <Fragment>
    <Head>
      <title>Orto Conecta</title>
    </Head>
    <Main>
      <Hero>
        <HeroInner>
            <h1>Conectando a Ortodontia à toda área da saúde</h1>
            <h2>Navegue pelo nosso site e descubra como!</h2>
            <a href="#about">Saiba mais</a>
        </HeroInner>
      </Hero>
      <About id="about">
        <h1>Quem Somos</h1>
        <p>
          <span>Em</span> reuniões esporádicas sobre temas que frequentemente convergiam para o tempo em que o praticante da ortodontia conseguiria desenvolver sua autonomia, nasce a Orto Conecta.
          Idealizada por três colegas de profissão, <strong>Dr. Renato Tanabe</strong>, <strong>Dr. Gustavo Furlan</strong> e <strong>Dr. Alexandre Mendonça</strong>, esta ferramenta tem como objetivo trazer informações sobre a ortodontia executada de forma eficiente, prática e segura, além de integrar áreas intimamente ligadas a esta especialidade.
          Know-how, sensibilidade e entusiasmo dão direcionamento para a construção desta plataforma digital cuidadosamente planejada para produzir e compartilhar conhecimentos.  Um novo canal que irá fazer parte da lista de manuais de consulta sobre os assuntos mais atuais das áreas de saúde que se conectam diretamente à ortodontia.
          Esperamos que aproveitem este espaço e sua diversidade de materiais disponíveis no site, nos cursos online e presenciais que contribuirão para o aprimoramento de competências e habilidades fundamentais para o profissional que busca a excelência.
        </p>
        <h3>Bem-vindos à plataforma <span>Orto Conecta!</span></h3>
      </About>
    </Main>
  </Fragment>
)

export default Home