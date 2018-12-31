import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Head from 'next/head'
import Main from '../layouts/main'
import ReactMarkdown from 'react-markdown'
import { FaFolderOpen } from 'react-icons/fa'

const primaryColor = "#ffd32a"

const CasesWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1366px;
    background-image: url('/static/clinical.jpg');
    background-attachment: fixed;
    background-position: top center;
    background-size: cover;
    margin: 0 auto;
    flex-wrap: wrap;
`

const OptionsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 100%;
    margin: 20px;
    
    @media(max-width: 1128px) {
        flex-wrap: wrap;
    }
`

const Options = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
    background: #fff;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    
    h3 {
        font-size: 1.7rem;
        margin-bottom: 20px;
    }
`

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border: 2px solid ${primaryColor};
    padding: 16px 26px;
    background: ${props => props.active ? '#fff' : primaryColor};
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    margin: 24px 0;
    transition: background 0.3s;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    
    &:hover {
        background: #fff;
        transition: background 0.3s;
    }
`

const ContentsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 20px;
    flex-wrap: wrap;
`

const Content = styled.div`
    height: 100%;
    background: #fff;
    box-shadow:
      0 1px 1px rgba(0,0,0,0.15),
      0 10px 0 -5px #eee,
      0 10px 1px -4px rgba(0,0,0,0.15),
      0 20px 0 -10px #eee,
      0 20px 1px -9px rgba(0,0,0,0.15);
    padding: 30px;
    display: flex;
    flex-direction: column;
    line-height: 2rem;
    flex-wrap: wrap;
    margin: 15px;
    
    h3 {
        margin-bottom: 30px; 
        strong {
            font-size: 2rem;
        }
    }
    
    p, strong {
        font-size: 1.2rem;
    }
`

class CasosClinicos extends Component {
    static async getInitialProps() {
      let responseSolutions = await axios.get("https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/solutions");
      let responseActuals = await axios.get("https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/actuals");
      return { solutions: responseSolutions.data, actuals: responseActuals.data }
    }

    state = {
        switchCases: false,
        activeStateDefaultCases: false,
        activeStateTodayCases: false,
    };
    
    render () {
        return (
            <Main>
                <Head>
                    <title>OrtoConecta | Casos Clínicos</title>
                </Head>
                <CasesWrapper>
                    <OptionsWrapper>
                        <Options className="animated flipInX">
                            <h3>Soluções OrtoConecta</h3>
                            <p>Casos clínicos tratados com base em evidências científicas respeitando os conceitos mais modernos.</p>
                            <Button active={this.state.activeStateDefaultCases} onClick={() => this.setState(state => ({ switchCases: true, activeStateDefaultCases: true, activeStateTodayCases: false }))}>Mostrar casos</Button>
                        </Options>
                        <Options className="animated flipInX">
                            <h3>E se fosse hoje...</h3>
                            <p>Casos clínicos tratados há mais de 13 anos com as tendências da época. Com os recursos e conceitos atuais, o que poderíamos modificar??</p>
                            <Button active={this.state.activeStateTodayCases} onClick={() => this.setState({ switchCases: true, activeStateDefaultCases: false, activeStateTodayCases: true })}>Mostrar casos</Button>
                        </Options>
                    </OptionsWrapper>
                    {this.state.switchCases === false ? (
                        <div style={{ height: 'calc(100vh - 547px)', fontSize: '1.5rem', textAling: 'center' }}>Escolha uma das opções acima para visualizar os casos clínicos.</div>
                    ) : (
                        <ContentsWrapper>
                            {this.state.activeStateDefaultCases === true ? (
                                <Fragment>
                                    {this.props.solutions.map(solution => (
                                       <Content key={solution.id}>
                                            <h3><strong>{solution.case_title}</strong></h3>
                                            <p><strong>Paciente:</strong> {solution.patient_name}</p>
                                            <p><strong>Idade:</strong> {solution.patient_age}</p>
                                            <p><strong>Sexo:</strong> {solution.patient_genre}</p>
                                            <p>{solution.skin_type}</p>
                                            <p><strong>Queixa principal:</strong> {solution.main_complaint}</p>
                                            <div><strong>Assuntos relacionados:</strong>
                                                <div> <ReactMarkdown source={solution.keywords} /></div>
                                            </div>
                                            <Button href={`https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${solution.material.url}`} target="blank"><FaFolderOpen style={{ background: 'transparent', fontSize: '1.5rem', marginRight: '10px' }} /> Visualizar Caso Clínico</Button>
                                       </Content> 
                                    ))}
                                </Fragment>
                            ) : (
                                <Fragment>
                                    {this.props.actuals.map(actual => (
                                        <Content key={actual.id}>
                                            <h3><strong>{actual.case_title}</strong></h3>
                                            <p><strong>Paciente:</strong> {actual.patient_name}</p>
                                            <p><strong>Idade:</strong> {actual.patient_age}</p>
                                            <p><strong>Sexo:</strong> {actual.patient_genre}</p>
                                            <p>{actual.skin_type}</p>
                                            <p><strong>Queixa principal:</strong> {actual.main_complaint}</p>
                                            <div><strong>Assuntos relacionados:</strong>
                                                <div> <ReactMarkdown source={actual.keywords} /></div>
                                            </div>
                                            <Button href={`https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${actual.material.url}`} target="blank"><FaFolderOpen style={{ background: 'transparent', fontSize: '1.5rem', marginRight: '10px' }} /> Visualizar Caso Clínico</Button>
                                       </Content>
                                    ))}
                                </Fragment>
                            )}
                        </ContentsWrapper>
                    )}
                </CasesWrapper>
            </Main>
        )   
    }
}

export default CasosClinicos