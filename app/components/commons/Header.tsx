import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
})

const Header = () => {
  return (
    <header 
      className={`${roboto.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}
    >
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/">Sobre Mim</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/contatos">Contatos</Link>
      </nav>
    </header>
  );
};

export default Header;
