import './globals.css'
import NavBar from './components/molecules/navbar/NavBar'
import Head from 'next/head'


export const metadata = {
  title: 'Manuel PortFolio',
  description: 'Portafolio de Manuel Pinzon',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
      <link rel="icon" href="/favIcon/favicon.ico" />
      </Head>
      <body>
        <NavBar></NavBar>
        {children}</body>
    </html>
  )
}
