import React, { Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

import GlobalStyle from '../src/styles/global'

const Container = styled.div`
  height: 100%;
`

export default (props) => (
  <Fragment>
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
    </div>
    <Container>
      <GlobalStyle />
      <Header />
      {props.children}
      <Footer />
    </Container>
  </Fragment>
)