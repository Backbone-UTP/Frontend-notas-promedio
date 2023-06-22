import Menu from './components/menu'
import Image from "next/image"
import logoBackBone from "../public/logoBackBone.svg"
import Instrucciones from './components/instrucciones'
import './style/page.css'

export default function Home() {
  return (
    <div>
      <h1>Hola como estas</h1>
      <Menu></Menu> 
      <Instrucciones></Instrucciones>
      <footer><Image className="imagen_logo_backbone" src={logoBackBone} alt="Logo backbone" /></footer>
    </div>
  )
}
