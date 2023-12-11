import './globals.css'
import NavBar from './components/molecules/navbar/NavBar'
import { faviconImage } from './components/atoms/faviconImage/faviconImages'


export const metadata = {
  title: 'Manuel PortFolio',
  description: 'Portafolio de Manuel Pinzon',
  icons: {
    icon:faviconImage,
    apple:faviconImage
  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavBar></NavBar>
        {children}</body>
    </html>
  )
}
