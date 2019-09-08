import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import Main from '../layouts/main'
import Head from 'next/head'
import Router from 'next/router'
import swal from 'sweetalert2'
import {Link} from '../routes'
import axios from 'axios'
import { FaChalkboard, FaBook, FaCameraRetro, FaLightbulb, FaHeartbeat, FaUserGraduate } from 'react-icons/fa'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const primaryColor = "#FFD32A"

const Hero = styled.div`
  height: 100%;
  margin: 0 0 70px 0;
  padding: 20px;
  background: #f5f5f5;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  @media(max-width: 780px) {
    height: 100%;
  }
`

const HeroInner = styled.div`
  background: transparent;
  color: #d6d6d6;
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

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
    margin-top: 10px;
    margin-bottom: 100px;
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
    width: 300px;
    height: 300px;
    margin-top: 16px;
    border-radius: 15px;
    border: 2px solid ${primaryColor};
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
  height: 600px;
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

  @media(max-width: 780px) {
    text-align: center;
  }

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

// const Maintance = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;

//   img {
//     width: 300px;
//     height: 300px;
//   }

//   h3 {
//     font-family: Arial, sans-serif;
//     font-size: 2rem;
//     margin-top: 10px;
//   }

//   p {
//     font-family: Arial, sans-serif;
//     font-size: 1.1rem;
//   }
// `

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
      // Tela de Manutenção
        // <Maintance>
        //   <img src="/static/logo.jpeg" alt="Logo" />
        //   <h3>Desculpe, estamos em atualização...</h3>
        //   <p>Obrigado!</p>
        // </Maintance>


        <Fragment>
          <Head>
            <title>OrtoConecta</title>
          </Head>
          <Main>
            <Hero>
              <div>
                <Carousel
                  showThumbs={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  showStatus={false}
                  dynamicHeight={true}
                  stopOnHover={true}
                  interval={2500}
                  emulateTouch={true}
                >
                  <div className="slides">
                    <img src="/static/background-final-final.jpg" />
                  </div>
                  <div className="slides">
                    <img src="/static/carousel-final.jpg" />
                  </div>
                  <div className="slides">
                    <img src="/static/carousel1-final.jpg" />
                  </div>
                  <div className="slides">
                    <img src="/static/carousel2-final.jpg" />
                  </div>
                </Carousel>
                {/*<HeroInner>
                    <h1>Você conectado ao mundo da Ortodontia!</h1>
                    <a href="#about">Saiba mais</a>
                </HeroInner>*/}
              </div>
            </Hero>

            <About id="about" data-aos="fade-right">
              <h1>Quem Somos</h1>
              <img src="/static/logo-nova.jpeg" alt="OrtoConecta"/>
              <p>
              <span>A</span> internet tornou-se um meio em que se trocam informações de forma rápida e eficaz com a intenção de enriquecer e propagar conhecimento para que esse seja aplicado em favor da qualidade de vida.
Não sendo diferente e partilhando da mesma vocação de disseminar informações, <strong>Dr. Gustavo Furlan</strong>, <strong>Dr. Luiz Felipe Maffía</strong> e <strong>Dr. Alexandre Mendonça</strong> reúnem profissionalismo, experiência e dedicação para impulsionarem a OrtoConecta.
Uma plataforma digital completa de ortodontia que hospeda em um mesmo espaço informações, compartilhamento de experiências, dicas clínicas, aulas, cursos e todo tipo de ferramenta para você poder atingir a excelência profissional.
Espero que curtam o espaço e que nos ajudem a fazer da OrtoConecta um site sem filtros ou photoshops. Um lugar da odontologia real.

              </p>
              <h3>Bem-vindos à plataforma <span>OrtoConecta!</span></h3>
            </About>
            <ProfilesWrapper data-aos="fade-left">
              <h1>Perfis Profissionais</h1>
              <Profiles>
                <Profile>
                  <img src="/static/Luiz.jpeg" alt="Dr. Luiz Felipe Maffia" />
                  <h2>Dr. Luiz Felipe Maffia</h2>
                  <p>É graduado em Odontologia em 1998 pela Universidade Metodista de São Paulo ; logo ingressou na área da Ortodontia terminando seu Aperfeiçoamento na técnica Edgewise e Straight wire em 2000 ( IPEO /SP) , em seguida ingressou no curso de aperfeiçoamento em Ortopedia Funcional dos Maxilares com término em 2004 ( GEOFOM ) ; Iniciando posteriormente sua especialização em Ortodontia, esta terminada em 2008 e desde então integra o quadro de professores e mais recentemente a de coordenador do curso de pós graduação em Ortodontia da Aneo/SP . Sua atuação clínica é relevante em diversas clínicas particulares ( Osasco e São Paulo ) tendo seu consultório situado na cidade de São Bernardo do Campo desde 1999.</p>
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
                  <Link route="/painel">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaBook style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Materiais</h4>
                  <br />
                  <p>Produção de materiais didáticos para que você aprimore suas competências e habilidades.</p>
                  <Link route="/materiais">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaCameraRetro style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Galeria</h4>
                  <br />
                  <p>Registro fotográfico dos eventos da OrtoConecta!</p>
                  <Link route="/galeria">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaLightbulb style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Dicas OrtoConecta</h4>
                  <br />
                  <p>Um espaço para você obter dicas clínicas que poderão facilitar o dia a dia do seu consultório.</p>
                  <Link route="/dicas">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaHeartbeat style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>OrtoConecta Especialidades</h4>
                  <br />
                  <p>Uma área destinada à multidisciplinaridade mostrando a importância da integração de especialidades na busca do melhor para o paciente.</p>
                  <Link route="/especialidades">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
                <Content>
                  <FaUserGraduate style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Especialização e Cursos</h4>
                  <br />
                  <p>Conheça nossos cursos e nossa Especialização em Ortodontia!</p>
                  <Link route="/especializacao_e_cursos">
                    <Acessar>Acessar</Acessar>
                  </Link>
                </Content>
              </Contents>
            </ContentWrapper>
            <NewsletterWrapper data-aos="fade-left" data-aos-duration="1000">
              <h1>Registre-se em nossa Newsletter e fique por dentro de TUDO!</h1>
              <p>O seu email é muito importante para mantermos contato. Cadastre Agora!!!</p>
              <Newsletter onSubmit={(e) => this.handleSubmit(e)}>
                <input type="email" placeholder="Digite seu melhor email..." onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                <button>Inscrever</button>
              </Newsletter>
            </NewsletterWrapper>
          </Main>
        </Fragment>

    )
  }
}

export default Home
