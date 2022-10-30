import Head from 'next/head';
import { FC } from 'react';
import Home from '../components/Home';

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Legacy song</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}

export default Index;