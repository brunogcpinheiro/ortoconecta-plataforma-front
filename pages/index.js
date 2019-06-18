import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import Main from '../layouts/main'
import Head from 'next/head'
import Router from 'next/router'
import swal from 'sweetalert2'
import Link from 'next/link'
import axios from 'axios'
import { FaChalkboard, FaBook, FaBriefcase, FaLightbulb, FaHeartbeat, FaRegNewspaper } from 'react-icons/fa'

const primaryColor = "#FFD32A"

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/static/background.jpg');
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
  background: #fff;
  width: 80%;
  max-width: 800px;
  margin: -50px auto;
  margin-bottom: 50px;
  border: 1px solid #ccc;
  padding: 26px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  
  h1 {
    font-size: 3rem;
    color: #f1c40f;
    font-weight: bold;
  }
  
  img {
    width: 80%;
    height: 500px;
    margin-top: 16px;
    border-radius: 15px;
    border: 2px solid ${primaryColor}
  }
  
  p {
    margin-top: 16px;
    text-align: justify;
    font-size: 1.2rem;
    color: #2d3436;
    width: 100%;
    
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

const ProfilesWrapper = styled.div`
  width: 100%; 
  height: 100%;
  background: ${primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 100px;
  
  h1 {
    margin: 20px 0;
    font-size: 3rem;
  }
`

const Profiles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  height: 500px;
  background: #f5f5f5;
  text-align: justify;
  padding: 16px;
  margin: 15px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  
  @media(max-width: 965px) {
    width: 30%;
    margin: 16px;
  }
  
  @media(max-width: 885px) {
    width: 70%;
  }
  
  p {
    width: 100%;
  }
  
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`

const ContentWrapper = styled.div`
  width: 70%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  margin: 50px auto;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    text-align: center;
  }
`
const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const Content = styled.div`
    width: 200px;
    height: 300px;
    background: #fff;
    box-shadow:
      0 1px 1px rgba(0,0,0,0.15),
      0 10px 0 -5px #eee,
      0 10px 1px -4px rgba(0,0,0,0.15),
      0 20px 0 -10px #eee,
      0 20px 1px -9px rgba(0,0,0,0.15);
      padding: 30px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h4 {
      color: #EAB543;
    }
    
    p {
      color: #30336b
    }
`

const Acessar = styled.button`
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

const NewsletterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${primaryColor};
  padding: 5rem 0;
  
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  
  p {
    font-size: 1.1rem;
    margin: 20px 0;
  }
`

const Newsletter = styled.form`
  input {
    border: none;
    border: 1px solid #fff;
    padding: 1.2rem;
    width: 300px;
  }
  
  button {
    border: none;
    background: #181818;
    color: ${primaryColor};
    padding: 1.2rem;
  }
`

const Maintance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 500px;
    height: 500px;
  } 

  h3 {
    font-size: 3rem;
    margin-top: 10px;
  }

  p {
    font-size: 2.5rem;
  }
`

class Home extends Component {
  state = {
    email: '',
    maintance: true
  }
  
  handleSubmit = async e => {
        e.preventDefault()
        
        const newSubscriber = {
            email: this.state.email,
        }
        
        if (this.state.email) {
            await axios.post(`http://api.ortoconecta.com.br/subscribers`, newSubscriber)
            .then(this.setState({
                email: ''
            })).then(
                swal({
                  type: 'success',
                  title: 'Cadastro realizado com sucesso!'
                })
            )
            .catch(() => {
                swal({
                  type: 'error',
                  title: 'Algo errado com a requisição. Tente novamente!'
                })
            })
            Router.replace(`http://www.ortoconecta.com.br`)
        } else {
            swal({
              type: 'error',
              title: 'Preencha o campo!'
            })
        }
    }
  
  render () {
    return (
      
        <Maintance>
          <img src="/static/logo.jpeg" alt="Logo" />
          <h3>Desculpe, estamos em atualização...</h3>
          <p>Obrigado!</p>
        </Maintance> 
      
      /*
        <Fragment>
          <Head>
            <title>OrtoConecta</title>
          </Head>
          <Main>
            <Hero>
              <HeroInner>
                  <h1>Você conectado ao mundo da Ortodontia!</h1>
                  <a href="#about">Saiba mais</a>
              </HeroInner>
            </Hero>
            <About id="about" data-aos="fade-right">
              <h1>Quem Somos</h1>
              <img src="/static/ale-gustavo-renato.jpg" alt="OrtoConecta"/> 
              <p>
                <span>Em</span> reuniões esporádicas sobre temas que frequentemente convergiam para o tempo em que o praticante da ortodontia conseguiria desenvolver sua autonomia, nasce a OrtoConecta.
                Idealizada por três colegas de profissão, <strong>Dr. Renato Tanabe</strong>, <strong>Dr. Alexandre Mendonça</strong> e <strong>Dr. Gustavo Furlan</strong>, esta ferramenta tem como objetivo trazer informações sobre a ortodontia executada de forma eficiente, prática e segura, além de integrar áreas intimamente ligadas a esta especialidade.
                Know-how, sensibilidade e entusiasmo dão direcionamento para a construção desta plataforma digital cuidadosamente planejada para produzir e compartilhar conhecimentos.  Um novo canal que irá fazer parte da lista de manuais de consulta sobre os assuntos mais atuais das áreas de saúde que se conectam diretamente à ortodontia.
                Esperamos que aproveitem este espaço e sua diversidade de materiais disponíveis no site, nos cursos online e presenciais que contribuirão para o aprimoramento de competências e habilidades fundamentais para o profissional que busca a excelência.
              </p>
              <h3>Bem-vindos à plataforma <span>OrtoConecta!</span></h3>
            </About>
            <ProfilesWrapper data-aos="fade-left">
              <h1>Perfis Profissionais</h1>
              <Profiles>
                <Profile>
                  <img src="/static/renato.png" alt="Dr. Renato Tanabe" />
                  <h2>Dr. Renato Tanabe</h2>
                  <p>É formado pela UNISA-SP desde 1995. Especializou-se em ortodontia, estomatologia e ortopedia facial. Posteriormente tornou-se mestre em ortodontia e clínica infantil. Coordenador das Atividades Científicas em 7 edições do Congresso Brasileiro de Ortodontia trabalhou sempre pelo crescimento da área. Possui credenciamento nos sistemas Invisalign® e Damon Smile®. Atua como professor dos cursos de atualização e especialização em ortodontia e ortopedia facial. Ortodontista clínico desde 2001 e proprietário da marca “Sorriso Ativo Odontologia”, Dr. Renato Tanabe é referência de conhecimento da área em São Paulo.</p>
                </Profile>
                <Profile>
                  <img src="/static/alexandre.png" alt="Dr. Alexandre Mendonça" />
                  <h2>Dr. Alexandre Mendonça</h2>
                  <p>É formado pela Universidade de Uberaba desde 1997. Especializou-se em Ortodontia pela ANEO-SP sendo também pós graduado latu sensu em implantodontia e cirurgia oral menor. Atuante na área desde 1997, Dr. Alexandre Mendonça é proprietário da marca     OAM – Odontologia com grande ênfase na área de Planos Assistenciais Odontológicos voltados às empresas.</p>
                </Profile>
                <Profile>
                  <img src="/static/gustavo.png" alt="Dr. Gustavo Furlan" />
                  <h2>Dr. Gustavo Furlan</h2>
                  <p>É formado pela Universidade de São Paulo desde 2002. Especializou-se em ortodontia para posteriormente tornar-se mestre e atuar como professor dos cursos de atualização e especialização nos estados de Minas Gerais, Rio Grande do Sul e São Paulo. Ortodontista clínico desde 2005, Dr. Gustavo Furlan é proprietário da marca “GF Ortodontia”.</p>
                </Profile>
              </Profiles>
            </ProfilesWrapper>
            <ContentWrapper data-aos="fade-right" data-aos-duration="1000">
              <h1>Conteúdo do Site</h1>
              <Contents>
                <Content>
                  <FaChalkboard style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Painel OrtoConecta</h4>
                  <br />
                  <p>Um quadro sequenciado da ortodontia para você estar sempre ligado nas etapas do tratamento.</p>
                  <Link prefetch href="/painel">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaBook style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Cursos e Materiais</h4>
                  <br />
                  <p>Produção de cursos e materiais didáticos para que você aprimore suas competências e habilidades.</p>
                  <Link prefetch href="/cursos_e_materiais">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaBriefcase style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Compartilhando Experiências</h4>
                  <br />
                  <p>O compartilhamento de experiências como ferramenta para ampliar o seu leque de conhecimento.</p>
                  <Link prefetch href="/experiencias">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaLightbulb style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Dicas OrtoConecta</h4>
                  <br />
                  <p>Um espaço para você obter dicas clínicas que poderão facilitar o dia a dia do seu consultório.</p>
                  <Link prefetch href="/dicas">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaHeartbeat style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>OrtoConecta Especialidades</h4>
                  <br />
                  <p>Uma área destinada à multidisciplinaridade mostrando a importância da integração de especialidades na busca do melhor para o paciente.</p>
                  <Link prefetch href="/especialidades">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaRegNewspaper style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Casos Clínicos</h4>
                  <br />
                  <p>Desenvolvimento de casos clínicos com links direcionando a conteúdos produzidos pela OrtoConecta para orientações e conhecimento.</p>
                  <Link prefetch href="/casos_clinicos">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
              </Contents>
            </ContentWrapper>
            <NewsletterWrapper data-aos="fade-left" data-aos-duration="1000">
              <h1>Registre-se em nossa Newsletter!</h1>
              <p>Receba nosso contéudo por email! Não é spam!</p>
              <Newsletter onSubmit={(e) => this.handleSubmit(e)}>
                <input type="email" placeholder="Digite seu melhor email..." onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                <button>Inscrever</button>
              </Newsletter>
            </NewsletterWrapper>
          </Main>
        </Fragment>
      */
    )
  }
}

export default Home
