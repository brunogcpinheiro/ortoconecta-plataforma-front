import React, { Fragment, Component } from "react";
import styled from "styled-components";
import Link from "next/link";

const primaryColor = "#ffd32a";

const Navigation = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	list-style: none;
	background: #fff;
	width: 100%;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	-moz-box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);
	box-shadow: 0px 3px 5px 0px rgba(184, 184, 184, 1);

	@media (max-width: 1128px) {
		ul {
			display: none;
		}

		${MenuIcon} .icon {
			display: block;
			float: right;
		}
	}
`;

const MenuIcon = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;

	div {
		width: 35px;
		height: 5px;
		background-color: #999;
		margin: 2px 0;
		display: none;
	}
`;

const Logo = styled.div`
	background: transparent;
	a {
		display: flex;
		text-decoration: none;
		color: inherit;
		justify-content: center;
		align-items: center;
		background: transparent;

		img {
			width: 70px;
			height: 70px;
			background: transparent;
		}

		h2 {
			font-size: 2rem;
			margin-left: 16px;
			color: ${primaryColor};
			background: transparent;
		}
	}
`;

const Menu = styled.ul`
  display: flex;
  background: transparent;
  list-style: none;
  color: #303030;

  li {
    padding: 10px;
    font-weight: bold;
    background: transparent;

    a {
      text-decoration: none;
      color: #7f8c8d;
      text-transform: uppercase;
      transition: color 0.4s;
      background: transparent;
      font-size: 0.9rem;

      &:after {
        display: block;
        content: '';
        border-bottom: solid 3px ${primaryColor};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }

      &:hover {
        color: ${primaryColor};
        transition: color 0.4s;
      }

      &:hover:after {
        transform: scaleX(1);
      }
    }
`;

const Dropdown = styled.div`
	position: absolute;
	display: block;
	width: 100%;
	margin-top: 35px;
`;

const DropdownContent = styled.div`
	display: block;
	position: absolute;
	width: 100vw;
	background-color: #f9f9f9;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 12px 16px;
	z-index: 1;

	li {
		padding: 16px;
		border-bottom: 1px solid #ccc;

		a {
			text-decoration: none;
			font-size: 1.2rem;

			&:visited,
			&:active,
			&:link {
				color: inherit;
			}

			&:hover {
				color: ${primaryColor};
			}
		}
	}
`;

class Header extends Component {
	state = {
		showMenu: false,
	};

	handleMenuOpen = e => {
		e.preventDefault();

		this.setState(state => ({
			showMenu: !state.showMenu,
		}));
	};

	render () {
		return (
			<Fragment>
				<Navigation>
					<Logo>
						<Link href="/" prefetch>
							<a>
								<img src="/static/logo.jpeg" />
								<h2>OrtoConecta</h2>
							</a>
						</Link>
					</Logo>
					<MenuIcon onClick={e => this.handleMenuOpen(e)}>
						<div className="icon" />
						<div className="icon" />
						<div className="icon" />
					</MenuIcon>
					{this.state.showMenu === true && (
						<Dropdown data-aos="fade-down" data-aos-duration="1000">
							<DropdownContent>
								<Link prefetch href="/">
									<li>
										<a>Início</a>
									</li>
								</Link>
								<Link prefetch href="/painel">
									<li>
										<a>Painel OrtoConecta</a>
									</li>
								</Link>
								<Link prefetch href="/materiais">
									<li>
										<a>Materiais</a>
									</li>
								</Link>
								<Link prefetch href="/experiencias">
									<li>
										<a>Compartilhando Experiências</a>
									</li>
								</Link>
								<Link prefetch href="/dicas">
									<li>
										<a>Dicas</a>
									</li>
								</Link>
								<Link prefetch href="/especialidades">
									<li>
										<a>Especialidades</a>
									</li>
								</Link>
								<Link prefetch href="/especializacao_e_cursos">
									<li>
										<a>Especialização e Cursos</a>
									</li>
								</Link>
							</DropdownContent>
						</Dropdown>
					)}
					<Menu>
						<li>
							<Link prefetch href="/">
								<a>Início</a>
							</Link>
						</li>
						<li>
							<Link prefetch href="/painel">
								<a>Painel OrtoConecta</a>
							</Link>
						</li>
						<li>
							<Link prefetch href="/materiais">
								<a>Materiais</a>
							</Link>
						</li>
						<li>
							<Link prefetch href="/experiencias">
								<a>Compartilhando Experiências</a>
							</Link>
						</li>
						<li>
							<Link prefetch href="/dicas">
								<a>Dicas</a>
							</Link>
						</li>
						<li>
							<Link prefetch href="/especialidades">
								<a>Especialidades</a>
							</Link>
						</li>
						<li>
							<Link prefetch href="/especializacao_e_cursos">
								<a>Especialização e Cursos</a>
							</Link>
						</li>
					</Menu>
				</Navigation>
			</Fragment>
		);
	}
}

export default Header;
