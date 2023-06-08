import Image from "next/image"
import logoUtp from "../../public/logoUtp.svg"

export default function Menu() {
    return (
    <nav>
        <ul>
            <li><a href="#">Crear Materia</a></li>
            <li><a href="#">Ver Notas</a></li>
            <li><a href="#">Editar Materia</a></li>
            <li><a href="#">Instrucciones</a></li>
            <li><a href="#"><Image src={logoUtp} alt="Logo utp" /></a></li>
        </ul>
    </nav>
    )
  }