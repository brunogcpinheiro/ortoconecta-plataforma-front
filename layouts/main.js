import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from '../src/components/header'

import GlobalStyle from '../src/styles/global'

export default (props) => (
  <Fragment>
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
      </Head>
    </div>
    <div>
      <GlobalStyle />
      <Header />
      {props.children}  
    </div>
  </Fragment>
)