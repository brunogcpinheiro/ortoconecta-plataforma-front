import React, { Fragment } from 'react'
import styled from 'styled-components'
import Main from '../layouts/main'
import Head from 'next/head'

const primaryColor = "#FFD32A"

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/static/dentist.jpg');
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
  width: 80%;
  max-width: 860px;
  margin: -50px auto;
  border: 1px solid #ccc;
  padding: 26px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 1px 1px 1px #f5f5f5;
  -moz-box-shadow: 0px 1px 1px 1px #f5f5f5;
  box-shadow: 0px 1px 1px 1px #f5f5f5;
  
  h1 {
    font-size: 3rem;
    color: #f1c40f;
    font-weight: bold;
  }
  
  img {
    width: 80%;
    height: 100%;
    margin-top: 16px;
    border-radius: 15px;
    border: 2px solid ${primaryColor}
  }
  
  p {
    margin-top: 16px;
    text-align: justify;
    font-size: 1.2rem;
    color: #2d3436;
    
    strong {
      font-size: 1.2rem;
      color: #181818;
    }
    
    span {
      margin-left: 24px;
      font-size: 1.2rem;
    }
  }
  
  h3 {
    font-size: 2rem;
    margin-top: 24px;
    color: #2d3436;
    text-align: center;
    
    span {
      margin-top: 16px;
      font-size: 2rem;
      color: #f1c40f;
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
        <img src="/static/ale-gustavo-renato.jpg" alt="OrtoConecta"/> 
        <p>
          <span>Em</span> reuniões esporádicas sobre temas que frequentemente convergiam para o tempo em que o praticante da ortodontia conseguiria desenvolver sua autonomia, nasce a Orto Conecta.
          Idealizada por três colegas de profissão, <strong>Dr. Renato Tanabe</strong>, <strong>Dr. Alexandre Mendonça</strong> e <strong>Dr. Gustavo Furlan</strong>, esta ferramenta tem como objetivo trazer informações sobre a ortodontia executada de forma eficiente, prática e segura, além de integrar áreas intimamente ligadas a esta especialidade.
          Know-how, sensibilidade e entusiasmo dão direcionamento para a construção desta plataforma digital cuidadosamente planejada para produzir e compartilhar conhecimentos.  Um novo canal que irá fazer parte da lista de manuais de consulta sobre os assuntos mais atuais das áreas de saúde que se conectam diretamente à ortodontia.
          Esperamos que aproveitem este espaço e sua diversidade de materiais disponíveis no site, nos cursos online e presenciais que contribuirão para o aprimoramento de competências e habilidades fundamentais para o profissional que busca a excelência.
        </p>
        <h3>Bem-vindos à plataforma <span>Orto Conecta!</span></h3>
      </About>
    </Main>
  </Fragment>
)

export default Home