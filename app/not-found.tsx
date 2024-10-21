import Link from 'next/link';

const NotFound = () => {
    return (
      <>
          <div className='text-center mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32'>
            <h1 className='text-5xl sm:text-7xl font-bold'>404</h1>
            <p>
                Oops, não conseguimos encontrar essa página!
            </p>
            <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>
            <Link href="/">Ir para à Página Inicial</Link>
          </div>
      </>
    );
};

export default NotFound;
