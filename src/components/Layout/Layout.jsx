import Navbar from '@/src/components/Navbar/Navbar';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from '@/src/components/Footer/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100lvh;
`;

const Main = styled.main`
  flex: 1 0 auto;
  padding-top: 68px;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Head>
        <title>Ljungbacken</title>
        <link rel='icon' href='' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='robots' content='index, follow' />
      </Head>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}