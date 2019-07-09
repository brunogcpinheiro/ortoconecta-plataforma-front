import React, { Fragment } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import axios from "axios";
import Head from "next/head";
import dayjs from "dayjs";
import Main from "../layouts/main";
import { FaSistrix, FaCreditCard } from "react-icons/fa";
import "dayjs/locale/pt-br";

const primaryColor = "#ffd32a";

const CoursesAndMaterialsWrapper = styled.div`
	padding: 16px;
	background: transparent;
	margin: 0 auto;
	max-width: 1366px;

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

	h2,
	p {
		text-align: center;
	}
`;

const CourseAndMaterialWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 auto;
	width: 100%;

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
	-webkit-box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	-moz-box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	flex-wrap: wrap;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff;
		width: 100%;
		height: 100%;
	}

	h3 {
		color: #7f8c8d;
		font-style: italic;
		background: #fff;
		width: 100%;
		height: 100%;
	}

	h4 {
		font-size: 1.3rem;
		background: #fff;
		width: 100%;
		height: 100%;
	}

	h5 {
		background: #fff;
		width: 100%;
		height: 100%;
	}

	p {
		flex: 1;
		text-align: justify;
		margin-top: 16px;
		font-size: 1.1rem;
		background: #fff;
		width: 100%;
		height: 100%;
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

const Img = styled.img`
	width: 150px;
	height: 150px;
	object-fit: cover;
	object-position: top;
	border-radius: 50%;
	border: 2px solid ${primaryColor};
`;

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
	color: #fff;

	&:visited,
	&:active,
	&:link {
		color: #fff;
	}
`;

const Purchase = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;
	margin: -70px 0 50px 0;
	font-weight: bold;
	text-decoration: none;
	font-size: 1.1em;
	text-transform: uppercase;
	background: ${primaryColor};
	border: 2px solid ${primaryColor};
	color: #fff;

	&:visited,
	&:active,
	&:link {
		color: #fff;
	}
`;

const Image = styled.img`
	width: 50%;
	margin: -50px 0 50px 0;
`;

const CoursesAndMaterials = props => {
	return (
		<Fragment>
			<Head>
				<title>OrtoConecta | Cursos e Materiais</title>
			</Head>
			<Main>
				<CoursesAndMaterialsWrapper>
					<div>
						<h2>Cursos e Eventos OrtoConecta</h2>
						<CourseAndMaterialWrapper>
							{props.courses
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
												<Purchase>
													<FaCreditCard
														style={{
															background: "transparent",
															fontSize: "1.2rem",
															marginRight: "10px",
														}}
													/>{" "}
													Comprar
												</Purchase>
											)}
											<Title>{course.title}</Title>
											<h3>
												Local.: <span>{course.local}</span>
											</h3>
											<h3>
												Quando.: <span>{course.date_event}</span>
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

					<div>
						<h2>
							Materiais <span>Disponíveis</span> OrtoConecta
						</h2>
						<p>
							<strong>OBS.:</strong> Clique em visualizar material para ler
							artigo completo!
						</p>
						<CourseAndMaterialWrapper>
							{props.materials.map(material => (
								<Material
									key={material.id}
									data-aos="fade-up"
									data-aos-duration="1000">
									<Img
										src={`http://api.ortoconecta.com.br${material.material_image
											.url}`}
										alt={material.title}
									/>
									<div>
										<Title>{material.title}</Title>
										<h3>
											Publicado em{" "}
											{
												(dayjs.locale("pt-br"),
												dayjs(material.publishedAt)
													.format("DD_MMMM_YYYY")
													.split("_")
													.join(" de "))
											}
										</h3>
										<h4>Por {material.author}</h4>
										<h5>Páginas: {material.pages}</h5>
										<Button
											href={`http://api.ortoconecta.com.br${material.material
												.url}`}
											target="blank">
											<FaSistrix
												style={{
													background: "transparent",
													fontSize: "1.2rem",
													marginRight: "10px",
												}}
											/>{" "}
											Visualizar Material
										</Button>
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
};

CoursesAndMaterials.getInitialProps = async ({ query }) => {
	const materialResponse = await axios.get(
		`http://api.ortoconecta.com.br/materials`,
	);
	const coursesResponse = await axios.get(
		`http://api.ortoconecta.com.br/courses`,
	);

	return { materials: materialResponse.data, courses: coursesResponse.data };
};

export default CoursesAndMaterials;
