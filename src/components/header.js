import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const primaryColor = "#ffd32a";

const Navigation = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  background: #fff;
  width: 100%;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  
  @media(max-width: 980px) {
    ul {
      display: none;
    }
    
    ${MenuIcon} .icon {
      display: block;
      float: right;
    }
  }
`

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
`

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
      width: 50px;
      height: 50px;
      background: transparent;
    }

    h2 {
      font-size: 2rem;
      margin-left: 16px;
      color: ${primaryColor};
      background: transparent;
    }
  }
`

const Menu = styled.ul`
  display: flex;
  background: transparent;
  list-style: none;
  color: #303030;

  li {
    padding: 16px;
    font-weight: bold;
    font-size: 1.3rem;
    background: transparent;
    
    a {
      text-decoration: none;
      color: #7f8c8d;
      text-transform: uppercase;
      transition: color 0.4s;
      background: transparent;

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
`

class Header extends Component {
  render () {
    return (
      <Fragment>
          <Navigation>
            <Logo>
              <Link href="/">
                <a>
                  <img src="/static/dental.png" />
                  <h2>Orto Conecta</h2>
                </a>
              </Link>
            </Logo>
            <MenuIcon>
              <div className="icon"/>
              <div className="icon"/>
              <div className="icon"/>
            </MenuIcon> 
            <Menu>
              <li><Link href="/"><a>Início</a></Link></li>
              <li><Link href="/painel"><a>Painel Orto Conecta</a></Link></li>
              <li><Link href="/cursos_e_materiais"><a>Cursos e Materiais</a></Link></li>
              <li><Link href="/dicas"><a>Dicas</a></Link></li>
              <li><Link href="/especialidades"><a>Especialidades</a></Link></li>
              <li><a href="#">Contato</a></li>
            </Menu>
          </Navigation>
      </Fragment>
    )
  }
}

export default Header