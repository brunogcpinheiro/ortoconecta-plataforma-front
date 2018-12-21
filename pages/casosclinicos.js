import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Head from 'next/head'
import Link  from 'next/link'
import Main from '../layouts/main'
import ReactTooltip from 'react-tooltip'
import { FaDownload } from 'react-icons/fa'

const primaryColor = "#ffd32a"

const CasesWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const OptionsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 100%;
    margin: 20px;
`

const Options = styled.div`
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
    
    h1 {
        font-size: 2.5rem;
        text-align: center;
        margin: 20px 0;
    }
    
    h2 {
        font-size: 2rem;
        margin-bottom: 25px;
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        
        img {
            width: 200px;
            height: 170px;
            margin: 20px;
        }
    }
`

class CasosClinicos extends Component {
    state = {
        switchCases: false,
        activeStateDefaultCases: false,
        activeStateTodayCases: false
    };
    
    render () {
        return (
            <Main>
                <Head>
                    <title>OrtoConecta | Casos Clínicos</title>
                </Head>
                <CasesWrapper>
                    <OptionsWrapper>
                        <Options>
                            <h3>Soluções OrtoConecta</h3>
                            <p>Casos clínicos tratados com base em evidências científicas respeitando os conceitos mais modernos.</p>
                            <Button active={this.state.activeStateDefaultCases} onClick={() => this.setState(state => ({ switchCases: true, activeStateDefaultCases: true, activeStateTodayCases: false }))}>Mostrar casos</Button>
                        </Options>
                        <Options>
                            <h3>E se fosse hoje...</h3>
                            <p>Casos clínicos tratados há mais de 13 anos com as tendências da época. Com os recursos e conceitos atuais, o que poderíamos modificar??</p>
                            <Button active={this.state.activeStateTodayCases} onClick={() => this.setState({ switchCases: true, activeStateDefaultCases: false, activeStateTodayCases: true })}>Mostrar casos</Button>
                        </Options>
                    </OptionsWrapper>
                    {this.state.switchCases === false ? (
                        <div style={{ height: 'calc(100vh - 547px)' }}/>
                    ) : (
                        <ContentsWrapper>
                            {this.state.activeStateDefaultCases === true ? (
                                <Fragment>
                                    <Content>
                                        <h2>CASO CLÍNICO V - 07</h2>
                                        <p><strong>Paciente: </strong>V.O.</p>
                                        <p><strong>Idade: </strong>33a 02m</p>
                                        <p><strong>Sexo: </strong>Feminino</p>
                                        <p>Melanoderma</p>
                                        <p><strong>Queixa Principal: </strong>espaço entre os dentes (mordida aberta)</p>
                                        <div>
                                            <img src="/static/casos-v/v1.png" alt="v1" />
                                            <img src="/static/casos-v/v2.png" alt="v2" />
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
                                            <img src="/static/casos-v/v3.png" alt="v3" />
                                            <img src="/static/casos-v/v4.png" alt="v4" />
                                            <img src="/static/casos-v/v5.png" alt="v5" />
                                            <img src="/static/casos-v/v6.png" alt="v6" />
                                            <img src="/static/casos-v/v7.png" alt="v7" />
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
                                            <strong>2a opção:</strong> Ortodontia corretiva compensatória.
                                            - Aparelho ortodôntico fixo metálico prescrição Roth superior e inferior, slot 0.022”, modelo Kirium
                                            da marca Abzil.
                                            - Ancoragem:
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
                                            Inferior: arco lingual 3x3
                                        </p>
                                        <ReactTooltip />
                                        <div>
                                            <img src="/static/casos-v/v8.png" alt="v8" />
                                            <img src="/static/casos-v/v9.png" alt="v9" />
                                            <img src="/static/casos-v/v10.png" alt="v10" />
                                            <img src="/static/casos-v/v11.png" alt="v11" />
                                        </div>
                                        <Button href="/static/casos-v/v07.pdf" target="blank" style={{ width: '50%', alignSelf: 'center' }}><FaDownload style={{ fontSize: '1.2rem', marginRight: '10px' }}/>BAIXAR CASO CLÍNICO</Button>
                                    </Content>
                                    
                                    <Content>
                                        <h2>CASO CLÍNICO F - 04</h2>
                                        <p><strong>Paciente: </strong>F. S. M.</p>
                                        <p><strong>Idade: </strong>13a 10m</p>
                                        <p><strong>Sexo: </strong>Masculino</p>
                                        <p>Leucoderma</p>
                                        <p><strong>Queixa Principal: </strong>espaço entre os dentes (dentes abertos)</p>
                                        <div>
                                            <img src="/static/casos-f/f1.png" alt="f1" />
                                            <img src="/static/casos-f/f2.png" alt="f2" />
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
                                            <img src="/static/casos-f/f3.png" alt="f3" />
                                            <img src="/static/casos-f/f4.png" alt="f4" />
                                            <img src="/static/casos-f/f5.png" alt="f5" />
                                            <img src="/static/casos-f/f6.png" alt="f6" />
                                            <img src="/static/casos-f/f7.png" alt="f7" />
                                        </div>
                                        <p><strong>Prognóstico: </strong>favorável</p>
                                        <p><strong>Plano de tratamento:</strong></p>
                                        <p>
                                            <strong>1a opção:</strong> Ortodontia corretiva compensatória
                                            - Aparelho ortodôntico fixo metálico prescrição Roth superior e inferior, slot 0.022”, marca Abzil.
                                            - <Link prefetch href={`/cursos_e_materiais`}><a data-tip="Material: Ancoragem" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Ancoragem</a></Link>:
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
                                            <img src="/static/casos-f/f8.png" alt="f8" />
                                            <img src="/static/casos-f/f9.png" alt="f9" />
                                            <img src="/static/casos-f/f10.png" alt="f10" />
                                            <img src="/static/casos-f/f11.png" alt="f11" />
                                        </div>
                                        <Button href="/static/casos-f/f04.pdf" target="blank" style={{ width: '50%', alignSelf: 'center' }}><FaDownload style={{ fontSize: '1.2rem', marginRight: '10px' }}/>BAIXAR CASO CLÍNICO</Button>
                                    </Content>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Content>
                                        <p>
                                            <span style={{ marginLeft: '10px' }}>A</span> ação clínica de Ortodontia e Ortopedia Facial do grupo OrtoConecta®
                                            atua há mais de duas décadas, respeitando a filosofia de tratamentos baseado em
                                            evidências científicas.
                                        </p>
                                        <p>
                                            <span style={{ marginLeft: '10px' }}>D</span>esde a introdução da Ortodontia corretiva por Edward Angle na década de
                                            1920 até os dias atuais, a tecnologia voltada para essa especialidade apresenta
                                            evoluções constantes, assim como todas as áreas afins. Entretanto, o postulado de
                                            Angle sempre se manifesta em todas as evoluções tecnológicas e princípios
                                            biomecânicos.
                                        </p>
                                        <p>
                                            <span style={{ marginLeft: '10px' }}>D</span>esta forma, a OrtoConecta® resolveu abrir um canal de discussão e
                                            compartilhar com todos os participantes, os casos clínicos tratados por exemplo,
                                            há 15, 20 anos atrás, mostrando os recursos possíveis da época e os planos de
                                            tratamento limitados à experiência clínica e profissional naquele momento.
                                            Assim, o nosso propósito é reavaliar hoje e compartilhar esses casos
                                            tratados, simulando planos de tratamento atuais de acordo com a experiência
                                            adquirida durante todos esses anos, analisando os pontos positivos e negativos
                                            alcançados, sugerindo dicas através de uma ótica crítica e sóbria das condições
                                            atingidas.
                                        </p>
                                        <br />
                                        <h2>CASO CLÍNICO</h2>
                                        <p><strong>Paciente: </strong>F. V.</p>
                                        <p><strong>Idade: </strong>19a 10m</p>
                                        <p><strong>Sexo: </strong>Masculino</p>
                                        <p>Leucoderma</p>
                                        <p><strong>Queixa Principal: </strong>dentes inferiores muito tortos</p>
                                        <p><strong>Ano: </strong>2000 a 2002</p>
                                        <div>
                                            <img src="/static/casos-como-f/f1.png" alt="f1" />
                                            <img src="/static/casos-como-f/f2.png" alt="f2" />
                                            <img src="/static/casos-como-f/f3.png" alt="f3" />
                                            <img src="/static/casos-como-f/f4.png" alt="f4" />
                                            <img src="/static/casos-como-f/f5.png" alt="f5" />
                                        </div>
                                        <p>
                                            <strong>Plano de tratamento:</strong> Ortodontia corretiva prescrição Edgewise slot .022 x .030” superior e inferior, marca Abzil/Lancer.
                                            <br />
                                            Ancoragem:
                                            <br />
                                            - Superior: Ø
                                            <br />
                                            - Inferior: arco lingual
                                        </p>
                                        <p><strong>Exodontia: </strong>(42), (18), (28), (38), (48)</p>
                                        <p><strong>Justificativa: </strong>optou-se pela exodontia do incisivo lateral inferior direito (7
                                        mm) para tratamento da discrepância negativa de modelo (DMinf = -10 mm) pois
                                        os fatores indicados para realizar a extração de incisivo inferior em Ortodontia
                                        estavam presentes, ou seja, Classe I de Angle bilateral, ausência de apinhamento
                                        significativo no arco superior, trespasse horizontal adequado, perfil equilibrado,
                                        quantidade do espaço requerido próximo ao tamanho mésio-distal do dente a ser
                                        extraído.</p>
                                        <p><strong>Resultados: </strong>o caso clínico apresentava um bom prognóstico e desta forma,
                                        todos os objetivos foram alcançados. No final, o paciente estava extremamente
                                        satisfeito, com o alinhamento e nivelamento adequados, estética do sorriso obtida,
                                        oclusão equilibrada e sem alterações faciais.</p>
                                        <div>
                                            <img src="/static/casos-como-f/f6.png" alt="f6" />
                                            <img src="/static/casos-como-f/f7.png" alt="f7" />
                                            <img src="/static/casos-como-f/f8.png" alt="f8" />
                                            <img src="/static/casos-como-f/f9.png" alt="f9" />
                                            <img src="/static/casos-como-f/f10.png" alt="f10" />
                                            <img src="/static/casos-como-f/f11.png" alt="f11" />
                                        </div>
                                        <h1>...e se fosse hoje?</h1>
                                        <p>
                                            <span style={{ marginLeft: '10px' }}>O</span> tratamento clínico ortodôntico deste caso foi realizado em 27 meses,
                                            tempo que consideramos prolongado em comparação às possibilidades atuais.
                                            Os materiais utilizados neste caso foram bráquetes Edgewise standart, fios
                                            Twist Flex e arcos de aço inox.
                                        </p>
                                        <p>
                                            <span style={{ marginLeft: '10px' }}>A</span>pesar do sucesso obtido no final do tratamento, nossa orientação de
                                            conduta clínica para este caso, hoje, seria diferente. Trabalhos científicos
                                            analisados com exaustão e a nossa experiência adquirida, nos mostram que esse
                                            mesmo caso tratado atualmente poderia ser realizado com desgastes
                                            interproximais, sem a necessidade de exodontia de incisivo inferior, procedimento
                                            eficiente sem a possibilidade de fenestração óssea, apresentar a linha média
                                            dentária coincidente, além de reduzir praticamente pela metade o tempo de
                                            tratamento utilizando o sistema de prescrições e materiais tecnologicamente
                                            avançados.
                                        </p>
                                        <p>
                                            <span style={{ marginLeft: '10px' }}>A</span>ssim, nosso objetivo é buscar a eficiência e excelência de forma recíproca,
                                            adequando os casos à realidade e possibilidade de todos nós.
                                        </p>
                                        <div>
                                            <img src="/static/casos-f/f11.png" alt="f11" style={{ width: '300px' }} />
                                        </div>
                                        <Button href="/static/casos-como-f/e_se_fosse_hoje_1.pdf" target="blank" style={{ width: '50%', alignSelf: 'center' }}><FaDownload style={{ fontSize: '1.2rem', marginRight: '10px' }}/>BAIXAR CASO CLÍNICO</Button>
                                    </Content>
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