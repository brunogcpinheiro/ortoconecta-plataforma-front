import React, { Fragment } from 'react'
import styled from 'styled-components'
import Main from '../layouts/main'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import moment from 'moment'
import Iframe from 'react-iframe'

const primaryColor = "#ffd32a"

const SpecialitiesWrapper = styled.div`
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

const Speciality = styled.div`
  max-width: 650px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 36px;
  margin-top: 36px;
  background: #fff;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  
  li {
    background: #fff;
  }
`

const Title = styled.a`
  color: inherit;
  font-size: 2.2rem;
  text-decoration: underline;
  font-weight: bold;
  transition: color 0.2s;
  background: #fff;
  
  &:hover {
    color: ${primaryColor};
    transition: color 0.2s;
  }
`

const Date = styled.p`
  color: #7f8c8d;
  font-style: italic;
  background: #fff;
`

const Article = styled.p`
  padding: 16px 0 26px 0;
  background: #fff;
`

const ReadMore = styled.a`
  border: none;
  border: 2px solid ${primaryColor};
  padding: 16px 26px;
  background: ${primaryColor};
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 24px;
  transition: background 0.3s;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  
  &:hover {
    background: #fff;
    transition: background 0.3s;
  }
`

const IframeContainer = styled.div`
  width: 60%;
  
  @media(max-width: 980px) {
    width: 100%;
  }
`

const Especialidades = props => {
  const sorted = props.specialities.sort((a,b) => (a.publishedAt > b.publishedAt) ? 1 : ((b.publishedAt > a.publishedAt) ? -1 : 0)).reverse();
  return (
    <Fragment>
      <Head>
        <title>OrtoConecta | Especialidades</title>
      </Head>
      <Main>
        <SpecialitiesWrapper>
          <h2>Especialidades OrtoConecta</h2>
          <IframeContainer>
            <Iframe url="https://www.youtube.com/embed/7lZ1QHBcWiY"
              width="100%"
              height="380px"
              display="initial"
              position="relative"
              className="iframe"
              styles={{ marginTop: '15px' }}
              allowFullScreen
            />
          </IframeContainer>
          
            {sorted
              .map(speciality => (
              <Speciality key={speciality.id}>
                <li>
                  <Link href={`/especialidades/${speciality.id}`}>
                    <Title>{speciality.title}</Title>
                  </Link>
                  <h4>{speciality.author} ({speciality.speciality})</h4>
                  <Date>Publicado em.: {
                    moment.locale('pt-br'),
                    moment(speciality.publishedAt).format("LL")
                  }</Date>
                  <Article>{`${speciality.article.substr(0, 500)}...`}</Article>
                  <Link href={`/especialidades/${speciality.id}`}>
                    <ReadMore>Leia mais</ReadMore>
                  </Link>
                </li>
              </Speciality>
            ))}
        </SpecialitiesWrapper>
      </Main>
    </Fragment>
  )
}

Especialidades.getInitialProps = async () => {
  let response = await axios.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/specialities");

  return { specialities: response.data }
}

export default Especialidades