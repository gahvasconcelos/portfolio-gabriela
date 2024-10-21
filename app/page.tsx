
import Head from 'next/head';
import { AboutMe } from './components/commons/Home/AboutMe';

const Home = () => {
  return (
    <>
      <Head>
        <meta
           name="description"
           content="Sou uma desenvolvedora front-end."
        />   
      </Head>
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-28'>  
         <AboutMe />
      </div>
      
      <main>
      </main>
    </>
  );
};

export default Home;
