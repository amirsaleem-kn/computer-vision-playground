import Link from 'next/link'
import Head from 'next/head'
import { Container } from '@material-ui/core';
import Header from "./header";
import Footer from "./footer";

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Header/>

    <Container maxWidth="lg">
      {children}
    </Container>

    <Footer />
    <style jsx global>
      {`
        body {
            padding: 0;
            margin: 0;
        }
        img {
            display: block;
            margin: 0 auto;
        }
    `}
    </style>
  </div>
)