import Image from "next/image"
import logoUtp from "../../public/logoUtp.svg"
import "../style/menu.css"

export default function Menu() {
    return (
    <nav className="nav_menu">
        <ul className="nav_menu_lista">
            <li><a href="/crearMateria">Crear Materia</a></li>
            <li><a href="/verNotas">Ver Notas</a></li>
            <li><a href="/editarNotas">Editar Materia</a></li>
            <li><a href="/">Instrucciones</a></li>
            <li className="contenedor_imagen"><Image className="imagen_logo_utp" src={logoUtp} alt="Logo utp" /></li>
        </ul>
    </nav>
    )
  }