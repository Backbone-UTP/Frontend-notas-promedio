"use client"
import { useState } from "react"
import "../style/editarNotas.css"

export default function EditarNotas(){

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedNombreMateria, setNombreMateria] = useState('')
    const [selectedCreditos, setCreditos] = useState('')
    const [selectedObtenido, setObtenido] = useState('')
    const [selectedEsperado, setEsperado] = useState('')

    return(
        <div className="contenedor_universal">
            <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'}>Materia</div>
                <form className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    
                </form>
            </div>
            <div className={selectedTab != 1 ? 'contenedor_cuadros reducir_cuadro': 'contenedor_cuadros'}>
                <div className={selectedTab != 1 ? 'titulo_campo aumentar_titulo': 'titulo_campo'}>Corte</div>
                <form className={selectedTab != 1 ? 'contenedor_botones ocultar_botones': 'contenedor_botones'}>
                    
                </form>
            </div>
            <div className={selectedTab != 2 ? 'contenedor_cuadros reducir_cuadro': 'contenedor_cuadros'}>
                <div className={selectedTab != 2 ? 'titulo_campo aumentar_titulo': 'titulo_campo'}>Nota</div>
                <form className={selectedTab != 2 ? 'contenedor_botones ocultar_botones': 'contenedor_botones'}>
                    
                </form>
            </div>
        </div>
    )
}