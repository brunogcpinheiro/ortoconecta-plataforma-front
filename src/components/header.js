import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const primaryColor = "#ffd32a";

const Navbar = styled.div`
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

const Header = props => (
  <Fragment>
    <Navbar>
      <Logo>
        <Link href="/">
          <a>
            <img src="/static/dental.png" />
            <h2>Orto Conecta</h2>
          </a>
        </Link>
      </Logo>
      <Menu>
        <li><Link href="/"><a>Início</a></Link></li>
        <li><a href="#">Quem Somos</a></li>
        <li><a href="#">Material gratuito</a></li>
        <li><Link href="/especialidades"><a>Especialidades</a></Link></li>
        <li><a href="#">Contato</a></li>
      </Menu>
    </Navbar>
  </Fragment>
);

export default Header