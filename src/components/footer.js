import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

const primaryColor = "#ffd32a";

const FooterWrapper = styled.div`
    width: 100%;
    height: 150px;
    background: #181818;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p {
        color: #fff;
        text-align: center;
            
        a {
            color: ${primaryColor};
            text-decoration: none;
            
            &:hover {
                text-decoration: underline;
            }
        }   
    }
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        
        a {
            color: ${primaryColor};
            font-size: 2rem;
            padding: 16px;
            
            &:hover {
                color: #fff;
            }
        }
    }
`

const Footer = props => {
    return (
        <FooterWrapper>
            <p>Entre em contato conosco pelas redes sociais!</p>
            <div>
                <a href="https://instagram.com/ortoconecta" target="blank">
                    <FaInstagram style={{ fontSize: '2rem' }} />
                </a>
                <a href="https://facebook.com/OrtoConecta-321693788686012" target="blank">
                    <FaFacebookSquare style={{ fontSize: '2rem' }} />
                </a>
                <a href="https://wa.me/5511938002884" target="blank">
                    <FaWhatsapp style={{ fontSize: '2rem' }} />
                </a>
            </div>
            <p>Ou por email no endereço: ortoconecta@ortoconecta.com.br</p>
            <p>Desenvolvido por <a href="https://facebook.com/bruno.carpinelli" target="blank"><span>Bruno Carpinelli</span></a></p>
            <p>Direitos Reservados &reg;</p>
        </FooterWrapper>
    )
}

export default Footer