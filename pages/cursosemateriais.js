import React, { Fragment } from 'react'
import styled from 'styled-components'
import Iframe from 'react-iframe'
import axios from 'axios'
import Head from 'next/head'
import moment from 'moment'
import Main from '../layouts/main'
import { FaDownload, FaCreditCard } from 'react-icons/fa'

const primaryColor = "#ffd32a";

const CoursesAndMaterialsWrapper = styled.div`
    padding: 16px;
    background: transparent;
    
    div {
        margin: 20px 0 50px 0;
        text-align: center;
    }
    
    h2 {
        font-size: 3rem;
        
        span {
            color: ${primaryColor};
            font-size: 3rem;
            font-weight: bold;
        }
    }
    
    h2, p {
        text-align: center;
    }
`

const CourseAndMaterialWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    
    @media(max-width: 980px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

const Course = styled.div`
    width: 50%;
    height: 100%;
    min-height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    flex-wrap: wrap;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        margin-top: 30px;
    }
    
    h1 {
        margin-top: 10px;
        font-size: 1.5rem;
    }
    
    h2 {
        font-size: 1.3rem;
        color: #ee5253;
        margin-top: 10px;
    }
    
    h3 {
        font-size: 1.2rem;
        background: #fff;
        
        span {
            font-weight: normal;
            background: #fff;
        }
    }
    
    @media(max-width: 980px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 85%;
        padding: 5px;
    }
`

const Material = styled.div`
    width: 350px;
    height: 100%;
    min-height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    padding: 16px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    flex-wrap: wrap;
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    
    h3 {
        color: #7f8c8d;
        font-style: italic;
        background: #fff;
    }
    
    h4 {
        font-size: 1.3rem;
        background: #fff;
    }
    
    h5 {
        background: #fff;
    }
    
    p {
        flex: 1;
        text-align: justify;
        margin-top: 16px;
        font-size: 1.1rem;
        background: #fff;
    }
`

const Title = styled.h1`
  color: inherit;
  font-size: 2.2rem;
  font-weight: bold;
  transition: color 0.2s;
  background: #fff;
  text-align: center;
  margin-top: -20px;
  
  &:hover {
    color: #000;
    transition: color 0.2s;
  }
`

const CourseImg = styled.img`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const Img = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    border: 2px solid ${primaryColor};
`

const Button = styled.a`
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

const CoursesAndMaterials = props => {
    return (
        <Fragment>
            <Head>
                <title>OrtoConecta | Cursos e Materiais</title>
            </Head>
            <Main>
                <CoursesAndMaterialsWrapper>
                    <div>
                        <h2>Cursos e eventos OrtoConecta</h2>
                        <CourseAndMaterialWrapper>
                            {props.courses.map(course => (
                                <Course key={course.id}>
                                    <CourseImg src={`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${course.course_image.url}`} alt={course.title} />
                                    <div>
                                        <Title>{course.title}</Title>
                                        <h3>Local.: <span>{course.local}</span></h3>
                                        <h3>Quando.: <span>{course.date_event}</span></h3>
                                        <h1>{course.price}</h1>
                                        {course.sold_out === true ? (
                                            <h2>Ingressos esgotados!</h2>
                                        ): (
                                            <Button><FaCreditCard style={{ background: 'transparent', fontSize: '1.2rem', marginRight: '10px' }}/> Comprar</Button>
                                        )}
                                    </div>
                                </Course> 
                            ))}
                        </CourseAndMaterialWrapper>
                    </div>
                
                    <div>
                        <h2>Material <span>exclusivo</span> OrtoConecta</h2>
                        <p>Estudo sobre Alicates Ortodônticos</p>
                        <Iframe url="https://www.slideshare.net/slideshow/embed_code/key/wuMVMJvfdz3k5J"
                            width="90%"
                            height="550px"
                            className="iframe"
                            display="initial"
                            position="relative"
                            styles={{ marginTop: "50px" }}
                            allowFullScreen 
                        />
                    </div>
                    
                    <div>
                        <h2>Materiais <span>gratuitos</span> OrtoConecta</h2>
                        <p><strong>OBS.:</strong> Baixe o material para ler o artigo completo!</p>
                        <CourseAndMaterialWrapper>
                            {props.materials.map(material => (
                                <Material key={material.id}>
                                    <Img src={`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${material.material_image.url}`} alt={material.title} />
                                    <div>
                                        <Title>{material.title}</Title>
                                        <h3>Publicado em {
                                            moment.locale('pt-br'),
                                            moment(material.publishedAt).format("LL")
                                        }</h3>
                                        <h4>Por {material.author}</h4>
                                        <h5>Páginas: {material.pages}</h5>
                                        <Button href={`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080${material.material.url}`} target="blank"><FaDownload style={{ background: 'transparent', fontSize: '1.2rem', marginRight: '10px' }} /> Baixar Material</Button>
                                        <p>{material.description}</p>
                                    </div>
                                </Material> 
                            ))}
                        </CourseAndMaterialWrapper>
                    </div>
                </CoursesAndMaterialsWrapper>
            </Main>
        </Fragment>
    );
}

CoursesAndMaterials.getInitialProps = async ({ query }) => {
    const materialResponse = await axios.get(`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/materials`)
    const coursesResponse = await axios.get(`http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/courses`)
    
    return { materials: materialResponse.data, courses: coursesResponse.data }
}



export default CoursesAndMaterials