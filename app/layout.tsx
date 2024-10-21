import { Metadata } from 'next';
import localFont from "next/font/local";
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Header from './components/commons/Header';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Portfólio | Gabriela Vasconcelos',
  description: 'Este é o portfólio de Gabriela Vasconcelos',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
