import Menu from '../components/menu'
import Image from "next/image"
import CrearMateria from '../components/crearMateria'
import logoBackBone from "../../public/logoBackBone.svg"
import '../style/page.css'

export default function Home() {
  return (
    <div>
      <Menu></Menu>
      <CrearMateria></CrearMateria>
      <footer><Image className="imagen_logo_backbone" src={logoBackBone} alt="Logo backbone" /></footer>
    </div>
  )
}
