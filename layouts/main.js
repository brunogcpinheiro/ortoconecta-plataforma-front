import React, { Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

import GlobalStyle from '../src/styles/global'

const Container = styled.div`
  height: 100%;
`

const Content = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`

export default (props) => (
  <Fragment>
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
      </Head>
    </div>
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </Container>
  </Fragment>
)