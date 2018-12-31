import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import axios from 'axios'
import Main from '../layouts/main'

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 16px;
  max-width: 1366px;

  h2 {
    font-size: 3rem;
    text-align: center;
  }
`

const Professionals = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

const Professional = styled.div`
    width: 250px;
    height: 450px;
    background: #fff;
    margin: 20px;
    box-shadow:
      0 1px 1px rgba(0,0,0,0.15),
      0 10px 0 -5px #eee,
      0 10px 1px -4px rgba(0,0,0,0.15),
      0 20px 0 -10px #eee,
      0 20px 1px -9px rgba(0,0,0,0.15);
      padding: 30px;
      
      img {
          width: 100%;
      }
`

const Portfolio = props => {
    return (
        <Main>
            <Head>
                <title>OrtoConecta | Portfólio dos profissionais</title>
            </Head>
            <PortfolioWrapper>
                <h2>Portfólio dos Profissionais</h2>
                <Professionals>
                    {props.professionals.map(professional => (
                        <Professional key={professional.id}>
                            <img src={`https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${professional.image.url}`}/>
                            <p style={{ fontSize: '1.5rem', textAlign: 'center' }}><strong>{professional.name}</strong></p>
                            <p><strong>Especialidade.:</strong> {professional.speciality}</p>
                            <p><strong>Email.:</strong> {professional.email}</p>
                            <p><strong>Contato.:</strong> {professional.telephone}</p>
                            {professional.clinical && <p><strong>Endereço.:</strong> {professional.clinical}</p>}
                        </Professional> 
                    ))}
                </Professionals>
            </PortfolioWrapper>
        </Main>
    )
}

Portfolio.getInitialProps = async () => {
    const response = await axios.get('https://ortoconecta-plataforma-brunogcpinheiro.c9users.io/professionals')
    return { professionals: response.data }
}

export default Portfolio