import React, { Fragment } from 'react'
import styled from 'styled-components'
import Main from '../layouts/main'
import Head from 'next/head'
import { Link } from '../routes'
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
    width: 250px;
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

const Home = props => (
  <Fragment>
    <Head>
      <title>OrtoConecta</title>
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
        <h3>Bem-vindos à plataforma <span>OrtoConecta!</span></h3>
      </About>
      <ProfilesWrapper>
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
            <p>É formado pela Universidade de Uberaba desde 1997. Especializou-se em Ortodontia pela ANEO-SP sendo também pós graduado latu sensu em implantodontia e cirurgia oral menor. Atuante na área desde 1997, Dr. Alexandre Mendonça é proprietário da marca     OAM – Odontologia com grande ênfase na área de Planos Assistenciais Odontológicos voltados às empresas</p>
          </Profile>
          <Profile>
            <img src="/static/gustavo.png" alt="Dr. Gustavo Furlan" />
            <h2>Dr. Gustavo Furlan</h2>
            <p>É formado pela Universidade de São Paulo desde 2002. Especializou-se em ortodontia para posteriormente tornar-se mestre e atuar como professor dos cursos de atualização e especialização nos estados de Minas Gerais, Rio Grande do Sul e São Paulo. Ortodontista clínico desde 2005, Dr. Gustavo Furlan é proprietário da marca “GF Ortodontia”.</p>
          </Profile>
        </Profiles>
      </ProfilesWrapper>
      <ContentWrapper>
        <h1>Conteúdo do Site</h1>
        <Contents>
          <Content>
            <FaChalkboard style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Painel OrtoConecta</h4>
            <br />
            <p>O contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock.</p>
            <Link route="/painel">
              <Acessar>Acessar</Acessar>
            </Link>
          </Content>
          <Content>
            <FaBook style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Cursos e Materiais</h4>
            <br />
            <p>O contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock.</p>
            <Link route="/cursos_e_materiais">
              <Acessar>Acessar</Acessar>
            </Link>
          </Content>
          <Content>
            <FaBriefcase style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Experiências</h4>
            <br />
            <p>O contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock.</p>
            <Link route="/experiencias">
              <Acessar>Acessar</Acessar>
            </Link>
          </Content>
          <Content>
            <FaLightbulb style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Dicas</h4>
            <br />
            <p>O contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock.</p>
            <Link route="/dicas">
              <Acessar>Acessar</Acessar>
            </Link>
          </Content>
          <Content>
            <FaHeartbeat style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Especialidades</h4>
            <br />
            <p>O contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock.</p>
            <Link route="/especialidades">
              <Acessar>Acessar</Acessar>
            </Link>
          </Content>
          <Content>
            <FaRegNewspaper style={{ fontSize: '3rem', color: '#ffc32a' }}/> <h4>Casos Clínicos</h4>
            <br />
            <p>O contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock.</p>
            <Link route="/casos_clinicos">
              <Acessar>Acessar</Acessar>
            </Link>
          </Content>
        </Contents>
      </ContentWrapper>
    </Main>
  </Fragment>
)

export default Home