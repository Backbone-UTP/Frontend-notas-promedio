"use client"
import { useState } from "react"
import Image from "next/image"
import logoUtp from "../../public/logoUtp.svg"
import "../style/menu.css"

export default function Menu() {
    const [btnMenu, setMenu] = useState(0);
    return (
        <header>
        <div className="btn_menu" onClick={() => btnMenu == 0 ? setMenu(1): setMenu(0)}>
            <span className={btnMenu == 0 ? 'line1_btn_menu' : 'line1_btn_menu activeline1_btn_menu'}></span>
            <span className={btnMenu == 0 ? 'line2_btn_menu' : 'line2_btn_menu activeline2_btn_menu'}></span>
            <span className={btnMenu == 0 ? 'line3_btn_menu' : 'line3_btn_menu activeline3_btn_menu'}></span>
        </div>
        <div className="contenedor_imagen"><Image className="imagen_logo_utp" src={logoUtp} alt="Logo utp" /></div>
        <nav className={btnMenu == 0 ? 'nav_menu' : 'nav_menu shownav_menu'}>
            <ul className="nav_menu_lista">
                <li><a href="/crear-materia">Crear Materia</a></li>
                <li><a href="/ver-notas">Ver Notas</a></li>
                <li><a href="/editar-materia">Editar Materia</a></li>
                <li><a href="/">Instrucciones</a></li>
                <li className="contenedor_imagen"><Image className="imagen_logo_utp" src={logoUtp} alt="Logo utp" /></li>
            </ul>
        </nav>
    </header>
    )
  }