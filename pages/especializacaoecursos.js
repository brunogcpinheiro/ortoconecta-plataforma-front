import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import swal from 'sweetalert2'
import Router from 'next/router'
import axios from 'axios'
import Main from '../layouts/main'
import { FaWhatsapp } from "react-icons/fa";

const primaryColor = "#ffd32a";

const CoursesAndMaterialsWrapper = styled.div`
	padding: 16px;
	margin: 0 auto;
	background-image: url('/static/Imagem3.png');
	background-attachment: fixed;
	background-position: top center;
	background-size: 100px;
	width: 97%;
	height: 100%;

	div {
		margin: 50px auto;
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

	h2,
	p {
		text-align: center;
	}

    h4 {
      margin: 30px;
      font-size: 1.8rem;
      text-decoration: underline;
    }
`;

const CourseAndMaterialWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 auto;
	max-width: 1366px;

	@media (max-width: 980px) {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;

const Course = styled.div`
	width: 100%;
	height: 100%;
	min-height: 300px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 10px;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	-moz-box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	flex-wrap: wrap;
	margin: 0 auto;

	h1 {
		margin-bottom: 30px;
		font-size: 3rem;
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

	.date {
		color: #6ab04c;
		font-size: 2.5rem;
	}

	@media (max-width: 980px) {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 85%;
		padding: 5px;
	}
`;

const CourseData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 0;
	background: #fff;
	margin-bottom: 20px;

	p {
		margin-top: 20px;
		color: ${primaryColor};
		font-size: 1.2rem;
	}
`;

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
`;

const CourseImg = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	img {
		width: 30%;
		height: 30%;
		padding: 20px;

		@media (max-width: 980px) {
			width: 80%;
			height: 80%;
			padding: 5px;
		}
	}
`;

const Purchase = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;
	margin: 10px 0 50px 0;
	font-weight: bold;
	text-decoration: none;
	font-size: 1.1em;
	text-transform: uppercase;
	background: ${primaryColor};
	border: 2px solid ${primaryColor};
	color: #181818;

	&:visited,
	&:active,
	&:link {
		color: #181818;
	}

	@media(max-width: 980px) {
		margin-top: -50px;
	}
`;

const Image = styled.img`
	width: 50%;
	margin: -50px 0 50px 0;
`;

const Specialization = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const ImageWrapper = styled.div`
  -webkit-box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	-moz-box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 50%;

  @media (max-width: 780px) {
    width: 90%;
  }

  img {
    width: 100%;
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

class SpecializationAndCourses extends Component {
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
					<Fragment>
							<Head>
									<title>OrtoConecta | Especialização e Cursos</title>
							</Head>
							<Main>
									<CoursesAndMaterialsWrapper>
										<NewsletterWrapper data-aos="fade-left" data-aos-duration="1000">
											<h1>Registre-se em nossa Newsletter e fique por dentro de TUDO!</h1>
											<p>O seu email é muito importante para mantermos contato. Cadastre Agora!!!</p>
											<Newsletter onSubmit={(e) => this.handleSubmit(e)}>
												<input type="email" placeholder="Digite seu melhor email..." onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
												<button>Inscrever</button>
											</Newsletter>
										</NewsletterWrapper>
											<div>
													<h2>Especialização</h2>
													<h4>EM JANEIRO!!!</h4>
													<Specialization>
															<ImageWrapper>
																	<img src="/static/especializacao.jpg" alt="Especialização" />
															</ImageWrapper>
													</Specialization>
											</div>
											<div>
													<h2>Cursos</h2>
													<CourseAndMaterialWrapper>
															{this.props.courses
																	.sort((a, b) => a.createdAt < b.createdAt)
																	.map(course => (
																			<Course key={course.id} className="animated zoomIn delay-1s">
																					<CourseImg>
																							{course.course_image.map(c => (
																									<img
																											key={c._id}
																											src={`http://api.ortoconecta.com.br${c.url}`}
																											alt={c.name}
																									/>
																							))}
																					</CourseImg>
																					<CourseData>
																							{course.sold_out === true ? (
																									<Image src="/static/esgotado.png" alt="Esgotado" />
																							) : (
																									<Purchase
																										target="_blank"
																										href="https://api.whatsapp.com/send?phone=5511948195388&text=Olá,%20gostaria%20de%20mais%20informações!"
																									>
																											<FaWhatsapp
																													style={{
																															background: "transparent",
																															fontSize: "1.5rem",
																															marginRight: "10px",
																													}}
																											/>{" "}
																											Fale concoso
																									</Purchase>
																							)}
																							<Title>{course.title}</Title>
																							<h3>
																									Local.: <span>{course.local}</span>
																							</h3>
																							<h3 className="date">
																									Quando.: <span className="date">{course.date_event}</span>
																							</h3>
																							<h3>
																									Valor.: <span>{course.price}</span>
																							</h3>
																							<p>
																									No momento estamos fazendo inscrições somente por
																									WhatsApp. Entre em contato.
																							</p>
																					</CourseData>
																			</Course>
																	))}
													</CourseAndMaterialWrapper>
											</div>
									</CoursesAndMaterialsWrapper>
							</Main>
					</Fragment>
			)
		}
}

SpecializationAndCourses.getInitialProps = async ({ query }) => {
	const coursesResponse = await axios.get(
		`http://api.ortoconecta.com.br/courses?_sort=createdAt:asc`,
	);

	return { courses: coursesResponse.data };
};

export default SpecializationAndCourses