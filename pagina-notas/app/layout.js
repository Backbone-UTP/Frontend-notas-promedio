import Menu from './components/menu'
import Image from "next/image"
import logoBackBone from "../public/logoBackBone.svg"
import './style/layout.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu></Menu> 
        {children}
        <footer><Image className="imagen_logo_backbone" src={logoBackBone} alt="Logo backbone" /></footer>
        </body>
    </html>
  )
}
