import React, { Fragment } from 'react'
import styled from 'styled-components'
import Main from '../layouts/main'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

const primaryColor = "#ffd32a";

const SpecialitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 980px;
  margin: 0 auto;

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    color: #636e72;
  }
`

const Speciality = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 36px;
  margin-top: 36px;

  h4 {
    font-size: 1.3rem;
    padding: 16px 0;
    color: #636e72;
    text-weight: bold;
  }
`

const Title = styled.a`
  color: inherit;
  font-size: 2.2rem;
  text-decoration: underline;
`

const Date = styled.p`
  color: #7f8c8d;
  font-style: italic;
`

const Article = styled.p`
  padding: 16px 0 26px 0;
`

const ReadMore = styled.a`
  border: none;
  padding: 16px 26px;
  background: ${primaryColor};
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 24px;
`

const Especialidades = props => {
  return (
    <Fragment>
      <Head>
        <title>Especialidades</title>
      </Head>
      <Main>
        <SpecialitiesWrapper>
          <h2>Especialidades</h2>
            {props.specialities.map(speciality => (
              <Speciality>
                <li key={speciality.id}>
                  <Link href={`/especialidades/${speciality.id}`}>
                    <Title>{speciality.title}</Title>
                  </Link>
                  <h4>{speciality.author} ({speciality.speciality})</h4>
                  <Date>Publicado em.: {speciality.publishedAt}</Date>
                  <Article>{speciality.article}</Article>
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