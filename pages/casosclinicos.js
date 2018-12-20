import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Head from 'next/head'
import { Link }  from '../routes'
import Main from '../layouts/main'
import ReactTooltip from 'react-tooltip'

const primaryColor = "#ffd32a"

const CasesWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Options = styled.div`
    display: flex;
`

const Button = styled.button`
    border: none;
    border: 2px solid ${primaryColor};
    padding: 16px 26px;
    background: ${props => props.active ? '#fff' : primaryColor};
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
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
    width: 80%;
    height: 100%;
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
    line-height: 2rem;
    
    h2 {
        font-size: 2rem;
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        
        img {
            width: 200px;
            height: 200px;
            margin: 20px;
        }
    }
`

class CasosClinicos extends Component {
    state = {
        switchCases: true,
        activeStateDefaultCases: true,
        activeStateTodayCases: false
    };
    
    render () {
        return (
            <Main>
                <Head>
                    <title>OrtoConecta | Casos Clínicos</title>
                </Head>
                <CasesWrapper>
                    <Options>
                        <Button active={this.state.activeStateDefaultCases} onClick={() => this.setState(state => ({ switchCases: true, activeStateDefaultCases: true, activeStateTodayCases: false }))}>Casos Clinicos</Button>
                        <Button active={this.state.activeStateTodayCases} onClick={() => this.setState({ switchCases: false, activeStateDefaultCases: false, activeStateTodayCases: true })}>E se fosse hoje? (Casos clínicos atuais)</Button>
                    </Options>
                    <ContentsWrapper>
                        {this.state.switchCases === true ? (
                            <Fragment>
                                <Content>
                                    <h2>CASO CLÍNICO</h2>
                                    <p><strong>Paciente: </strong>V.O.</p>
                                    <p><strong>Idade: </strong>33a 02m</p>
                                    <p><strong>Sexo: </strong>Feminino</p>
                                    <p>Melanoderma</p>
                                    <p><strong>Queixa Principal: </strong>espaço entre os dentes (mordida aberta)</p>
                                    <div>
                                        <img src="/static/heroimage.jpg" alt="caso 1" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                    </div>
                                    <p>
                                        <strong>Diagnóstico:</strong> paciente em fase adulta e dentição permanente, apresentou maloclusão Classe II
                                        de Angle, Classe II de Andrews, mordida aberta anterior causada por hábito de sucção digital (-4mm),
                                        interposição de língua, respiração bucal viciosa, suave discrepâncias de modelos superior (-1mm) e
                                        inferior (-2mm), linha média dentária superior com desvio para lado esquerdo (1mm) em relação ao plano
                                        sagital mediano, linha média dentária inferior coincidente em relação ao plano sagital mediano, curva de
                                        Spee suave, padrão face longa, convexidade facial devido à rotação mandibular no sentido horário,
                                        assimetria facial discreta em norma frontal, exposição excessiva dos dentes superiores em repouso,
                                        hipotonicidade labial, deglutição atípica com participação irregular principalmente dos músculos mentuais
                                        e língua, tendência de crescimento no sentido vertical, divergências dos planos horizontais em dados
                                        cefalométricos, vestibularização excessiva dos incisivos superiores e inferiores.
                                    </p>
                                    <div>
                                        <img src="/static/heroimage.jpg" alt="caso 1" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                    </div>
                                    <p><strong>Prognóstico: </strong>favorável</p>
                                    <p><strong>Plano de tratamento:</strong></p>
                                    <p>
                                        <strong>1a opção:</strong> Ortodontia corretiva + Cirurgia Ortognática
                                        Apesar da opção de tratamento onde a combinação entre Ortodontia e Cirurgia Ortognática ser a
                                        mais adequada devido à maloclusão ocorrer pela desarmonia esquelética, a paciente se negou ao
                                        tratamento proposto.
                                    </p>
                                    <p>
                                        <strong>2a opção:</strong> Ortodontia corretiva compensatória
                                        - Aparelho ortodôntico fixo metálico prescrição Roth superior e inferior, slot 0.022”, modelo Kirium
                                        da marca Abzil.
                                        - <Link route={`/cursos_e_materiais`}><a data-tip="Material: Ancoragem" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Ancoragem</a></Link><ReactTooltip />:
                                        . Superior: barra transpalatina (BTP)
                                        . Inferior: Ø
                                        - Exodontias: Ø
                                        - Encaminhamento para avaliação e fisioterapia fonoarticulatória
                                        - Biomecânica:
                                        1) Separação (16), (26), (36), (46)
                                        2) Moldagem de transferência para confecção de BTP fixa soldada
                                        Banda e cimentação (36) e (46) com tubo simples com gancho
                                        3) Cimentação BTP com tubos triplos com ganchos(16) e (26)
                                        4) Colagem direta superior + Alinhamento/Nivelamento (arco tamanho M NiTi.012”)
                                        5) Colagem direta inferior + Alinhamento/Nivelamento (arco tamanho P NiTi.012”)
                                        
                                        OrtoConecta Tratamento V07
                                        Desgaste interproximal (32 – M e D), (42 – M e D) com tiras de lixa de aço
                                        6) Alinhamento e Nivelamento pleno:
                                        Superior arcos tamanho M: NiTi .014” ; NiTi .016 ̈; NiTi .018 ̈; NiTi .020 ̈; SS .018 ̈; SS .020 ̈,
                                        NiTi .017 x .025 ̈; NiTi .017 x .025 ̈ em 3 segmentos.
                                        Inferior arcos tamanho P: NiTi .014” ; NiTi .016 ̈; NiTi .018 ̈; NiTi .020 ̈; SS .018 ̈; SS .020 ̈, NiTi
                                        .017 x .025 ̈; NiTi .019 x .025 ̈.
                                        7) Superior: NiTi .017 x .025 ̈ em 3 segmentos + Arco acessório de extrusão de Burstone (120g
                                        de força extrusiva)
                                        Inferior: NiTi .019 x .025 ̈
                                        8) Superior: NiTi .017 x .025 ̈
                                        Inferior: NiTi .019 x .025 ̈
                                        Elásticos de intercuspidação: 02 anteriores em forma retangular (5/16 leve) e 02 posteriores
                                        em forma triangular (5/16 leve)
                                        9) Superior: NiTi .019 x .025 ̈
                                        Inferior: NiTi .019 x .025 ̈
                                        10) SS .019 x .025 ̈superior e inferior
                                        11) Moldagem para contenção superior
                                        12) Remoção do aparelho fixo superior e inferior
                                        13) Contenção:
                                        Superior: Placa Hawley
                                        Inferior: arco lingual 3x3.
                                    </p>
                                    <div>
                                        <img src="/static/heroimage.jpg" alt="caso 1" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                    </div>
                                    <Button style={{ width: '30%', alignSelf: 'center' }}>BAIXAR CASO CLÍNICO</Button>
                                </Content>
                                
                                <Content>
                                    <h2>CASO CLÍNICO</h2>
                                    <p><strong>Paciente: </strong>F. S. M.</p>
                                    <p><strong>Idade: </strong>13a 10m</p>
                                    <p><strong>Sexo: </strong>Masculino</p>
                                    <p>Leucoderma</p>
                                    <p><strong>Queixa Principal: </strong>espaço entre os dentes (dentes abertos)</p>
                                    <div>
                                        <img src="/static/heroimage.jpg" alt="caso 1" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                    </div>
                                    <p>
                                        <strong>Diagnóstico:</strong> paciente com dentição permanente, apresentou maloclusão Classe II divisão 2
                                        subdivisão direita de Angle, Classe II subdivisão direita de Andrews, mordida profunda (+8mm),
                                        discrepâncias de modelos superior positiva (+3mm) e inferior negativa (-1mm), linha média dentária
                                        inferior com desvio para lado direito (2mm) em relação ao plano sagital mediano, linha média dentária
                                        superior coincidente em relação ao plano sagital mediano, curva de Spee acentuada (4mm), padrão 2
                                        facial com retrognatismo mandibular, ângulo mento-labial agudo, ângulo nasolabial adequado, lábio
                                        superior suavemente anteriorizado em relação ao lábio inferior, terços faciais proporcionais, projeção do
                                        zigomático adequada, convexidade facial devido à retrognatismo mandibular, ausência de assimetria
                                        facial em norma frontal, exposição excessiva dos dentes anteriores superiores no sorriso, tendência de
                                        crescimento equilibrado com padrão facial mesocefálico.
                                    </p>
                                    <div>
                                        <img src="/static/heroimage.jpg" alt="caso 1" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                    </div>
                                    <p><strong>Prognóstico: </strong>favorável</p>
                                    <p><strong>Plano de tratamento:</strong></p>
                                    <p>
                                        <strong>1a opção:</strong> Ortodontia corretiva compensatória
                                        - Aparelho ortodôntico fixo metálico prescrição Roth superior e inferior, slot 0.022”, marca Abzil.
                                        - <Link route={`/cursos_e_materiais`}><a data-tip="Material: Ancoragem" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Ancoragem</a></Link><ReactTooltip />:
                                        . Superior: barra transpalatina (BTP)
                                        . Inferior: Ø
                                        - Exodontias: Ø
                                        
                                        - Biomecânica:
                                        1) Separação (16), (26), (36), (46)
                                        2) Moldagem de transferência para confecção de BTP fixa soldada
                                        Banda e cimentação (36) e (46) com tubo simples com gancho
                                        3) Cimentação BTP com tubos simples com ganchos(16) e (26)
                                        4) Colagem direta superior + Alinhamento/Nivelamento com fio Twist Flex 0.015 ̈contornado no
                                        diagrama ortodôntico de Interlandi raio 24mm
                                        5) Alinhamento e Nivelamento pleno:
                                        
                                        OrtoConecta Tratamento V07
                                        Superior arcos diagramados no raio 24mm de Interlandi: Twist Flex .0.017 ̈, SS.016 ̈; SS.018 ̈;
                                        todos com degrau de intrusão nos dentes (12/11/21/22)
                                        6) Após 7 meses do início do tratamento, foi realizada a colagem direta dos bráquetes inferiores;
                                        Colagem direta inferior + Alinhamento/Nivelamento com fio Twist Flex 0.015 ̈contornado no
                                        diagrama ortodôntico de Interlandi raio 23mm
                                        Superior: arco SS.018” com degrau de intrusão anterior
                                        7) Superior: arcos diagramados no raio 24mm de Interlandi: SS .020 ̈ com degrau de intrusão
                                        Inferior arcos diagramados no raio 23mm de Interlandi: Twist Flex .0.017 ̈, SS.016”
                                        8) Superior: arcos diagramados no raio 24mm de Interlandi: SS .019 x .025 ̈ com degrau de
                                        intrusão + elásticos em cadeia tamanho longo 6 elos (13 a 23)
                                        Inferior arcos diagramados no raio 23mm de Interlandi: SS.018 ̈; SS .020 ̈
                                        Elásticos de classe II de força excêntrica: 5/16 M lado esquerdo, 3/16 M lado direito
                                        9) Superior: arco diagramados no raio 24mm de Interlandi: SS.021 x .025 ̈ passivo; manteve-se
                                        o degrau de intrusão anterior
                                        Inferior arcos diagramados no raio 23mm de Interlandi: SS .019 x .025 ̈; SS.021 x .025”
                                        passivo
                                        10) Moldagem para contenção superior
                                        11) Remoção do aparelho fixo superior, BTP e inferior
                                        12) Contenção:
                                        Superior: Placa Hawley
                                        Inferior: arco lingual 3x3.
                                    </p>
                                    <div>
                                        <img src="/static/heroimage.jpg" alt="caso 1" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                        <img src="/static/heroimage.jpg" alt="caso 2" />
                                    </div>
                                    <Button style={{ width: '30%', alignSelf: 'center' }}>BAIXAR CASO CLÍNICO</Button>
                                </Content>
                            </Fragment>
                        ) : <p>Outros casos</p>}
                    </ContentsWrapper>
                </CasesWrapper>
            </Main>
        )   
    }
} 

export default CasosClinicos