"use client"
import { useState } from "react"
import "../style/crearMateria.css"

export default function CrearMateria(){
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedNombreMateria, setNombreMateria] = useState('')
    const [selectedCreditos, setCreditos] = useState('')
    const [selectedObtenido, setObtenido] = useState('')
    const [selectedEsperado, setEsperado] = useState('')

    return(
        <div className="contenedor_universal">
            <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'}>Crear Materia</div>
                <form className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    <div>
                        <div>Nombre Materia</div>
                        <input required type="text" onChange={e => setNombreMateria(e.target.value)}></input>
                    </div>
                    <div>
                        <div>Créditos</div>
                        <input required type="number" max="5" min="1" className="number" value={selectedCreditos} onChange={e => (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 5) ? setCreditos(e.target.value): setCreditos('')}></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input required type="number" max="5" min="0" className="number" value={selectedObtenido} onChange={e => (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 5) ? setObtenido(e.target.value): setObtenido('')}></input>
                    </div>
                    <div>
                        <div>Esperado</div>
                        <input required type="number" max="5" min="0" className="number" value={selectedEsperado} onChange={e => (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 5) ? setEsperado(e.target.value): setEsperado('')}></input>
                        <input type="button" onClick={() => (selectedNombreMateria != '' && selectedCreditos != '' && selectedObtenido != '' && selectedEsperado != '') ? (setSelectedTab(selectedTab + 1), setNombreMateria(''),  setCreditos(''),  setObtenido(''),  setEsperado('')) : alert("NO VE QUE NO HA LLENADO EL CAMPO AGUEVADO")} className="enviar" value="Crear Materia"></input>
                    </div>
                </form>
            </div>
            <div className={selectedTab != 1 ? 'contenedor_cuadros reducir_cuadro': 'contenedor_cuadros'}>
                <div className={selectedTab != 1 ? 'titulo_campo aumentar_titulo': 'titulo_campo'}>Crear corte</div>
                <form className={selectedTab != 1 ? 'contenedor_botones ocultar_botones': 'contenedor_botones'}>
                    <div>
                        <div>Nombre Corte</div>
                        <input required type="text" onChange={e => setNombreMateria(e.target.value)}></input>
                    </div>
                    <div>
                        <div>Porcentaje</div>
                        <input required type="number" max="100" min="0" className="number" value={selectedCreditos} onChange={e => (parseInt(e.target.value) > 0 && parseInt(e.target.value) <= 100) ? setCreditos(e.target.value): setCreditos('')}></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input required type="number" max="5" min="0" className="number" value={selectedObtenido} onChange={e => (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 5) ? setObtenido(e.target.value): setObtenido('')}></input>
                    </div>
                    <div>
                        <div>Esperado</div>
                        <input required type="number" max="5" min="0" className="number" value={selectedEsperado} onChange={e => (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 5) ? setEsperado(e.target.value): setEsperado('')}></input>
                        <input type="button" onClick={() => (selectedNombreMateria != '' && selectedCreditos != '' && selectedObtenido != '' && selectedEsperado != '') ? (setSelectedTab(selectedTab + 1), setNombreMateria(''),  setCreditos(''),  setObtenido(''),  setEsperado('')) : alert("NO VE QUE NO HA LLENADO EL CAMPO AGUEVADO")} className="enviar" value="Crear Materia"></input>
                    </div>
                </form>
            </div>
            <div className={selectedTab != 2 ? 'contenedor_cuadros reducir_cuadro': 'contenedor_cuadros'}>
                <div className={selectedTab != 2 ? 'titulo_campo aumentar_titulo': 'titulo_campo'}>Crear nota</div>
                <form className={selectedTab != 2 ? 'contenedor_botones ocultar_botones': 'contenedor_botones'}>
                    <div>
                        <div>Nombre Nota</div>
                        <input required type="text"  onChange={e => setNombreMateria(e.target.value)}></input>
                    </div>
                    <div>
                        <div>Porcentaje</div>
                        <input required type="number" max="100" min="0" className="number" value={selectedCreditos} onChange={e => (parseInt(e.target.value) > 0 && parseInt(e.target.value) <= 100) ? setCreditos(e.target.value): setCreditos('')}></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input required type="number" max="5" min="0" className="number" value={selectedObtenido}  onChange={e => (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 5) ? setObtenido(e.target.value): setObtenido('')}></input>
                        <input type="button" onClick={() => (selectedNombreMateria != '' && selectedCreditos != '' && selectedObtenido != '') ? (setSelectedTab(selectedTab + 1), setNombreMateria(''),  setCreditos(''),  setObtenido(''),  setEsperado('')) : alert("NO VE QUE NO HA LLENADO EL CAMPO AGUEVADO")} className="enviar" value="Crear Materia"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}