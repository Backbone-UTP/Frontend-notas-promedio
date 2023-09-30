"use client"
import { useState } from "react"
import { data } from "./varibaleDatos"
import "../style/crearMateria.css"

export default function CrearMateria(){
    const [selectedTab, setSelectedTab] = useState(0)

    const [nameSubject, setNameSubject] = useState('')
    const [creditSubject, setCreditSubject] = useState('')
    const [obtainedSubject, setObtainedSubject] = useState('')
    const [expectedSubject, setExpectedSubject] = useState('')

    const [nameCut,setNameCut] = useState('')
    const [percentageCut,setPercentageCut] = useState('')
    const [obtainedCut,setObtainedCut] = useState('')
    const [expectedCut,setExpectedCut] = useState('')

    const[nameGrade,setNameGrade] = useState('')
    const[percentageGrade,setPercentageGrade] = useState('')
    const[obtainedGrade,setObtainedGrade] = useState('')


    const addToObject = () => {
        let idLastSubject = data[Object.keys(data).length - 1].id

        data.push(
            {
                materia: nameSubject, 
                id: idLastSubject + 1,
                obtenido: obtainedSubject,
                esperado: expectedSubject,
                cortes: [
                    {
                        corte: nameCut,
                        id: "1",
                        porcentaje: percentageCut,
                        obtenido: obtainedCut,
                        esperado: expectedCut,
                        notas: [
                            {
                                name: nameGrade,
                                id: "1",
                                porcentaje: percentageGrade,
                                nota: obtainedGrade,
                            },  
                        ], 
                    }
                ]
            }
        )
    }

    return(
        <div className="contenedor_universal">
            <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'}>Crear Materia</div>
                <form className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    <div>
                        <div>Nombre Materia</div>
                        <input required type="text" onChange={e => setNameSubject(e.target.value)}></input>
                    </div>
                    <div>
                        <div>Créditos</div>
                        <input required type="number" max="5" min="1" className="number" value={creditSubject} onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5 && (parseFloat(e.target.value) - parseInt(e.target.value))== 0) ? setCreditSubject(e.target.value): setCreditSubject('')}></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input required type="number" max="5" min="0" className="number" value={obtainedSubject} onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5) ? setObtainedSubject(e.target.value): setObtainedSubject('')}></input>
                    </div>
                    <div>
                        <div>Esperado</div>
                        <input required type="number" max="5" min="0" className="number" value={expectedSubject} onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5) ? setExpectedSubject(e.target.value): setExpectedSubject('')}></input>
                    </div>
                    <div>
                        <input type="button" onClick={() => (nameSubject != '' && creditSubject != '' && obtainedSubject != '' && expectedSubject != '') ? setSelectedTab(selectedTab + 1) : alert("Campos vacíos")} className="enviar" value="Crear Corte"></input>
                    </div>
                </form>
            </div>
            <div className={selectedTab != 1 ? 'contenedor_cuadros reducir_cuadro': 'contenedor_cuadros'}>
                <div className={selectedTab != 1 ? 'titulo_campo aumentar_titulo': 'titulo_campo'}>Crear corte</div>
                <form className={selectedTab != 1 ? 'contenedor_botones ocultar_botones': 'contenedor_botones'}>
                            <div>
                                <div>Nombre Corte</div>
                                <input required type="text" onChange={e => setNameCut(e.target.value)}></input>
                            </div>
                            <div>
                                <div>Porcentaje</div>
                                <input required type="number" max="100" min="0" className="number" value={percentageCut} onChange={e => (parseFloat(e.target.value) > 0 && parseFloat(e.target.value) <= 100 && (parseFloat(e.target.value) - parseInt(e.target.value))== 0)  ? setPercentageCut(e.target.value): setPercentageCut('')}></input>
                            </div>
                            <div>
                                <div>Obtenido</div>
                                <input required type="number" max="5" min="0" className="number" value={obtainedCut} onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5) ? setObtainedCut(e.target.value): setObtainedCut('')}></input>
                            </div>
                            <div>
                                <div>Esperado</div>
                                <input required type="number" max="5" min="0" className="number" value={expectedCut} onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5) ? setExpectedCut(e.target.value): setExpectedCut('')}></input>
                            </div>
                            <div>
                                <input type="button" onClick={() => (nameCut != '' && percentageCut != '' && obtainedCut != '' && expectedCut != '') ? setSelectedTab(selectedTab + 1) : alert("Campos vacíos")} className="enviar" value="Crear Nota"></input>
                            </div>
                </form>
            </div>
            <div className={selectedTab != 2 ? 'contenedor_cuadros reducir_cuadro': 'contenedor_cuadros'}>
                <div className={selectedTab != 2 ? 'titulo_campo aumentar_titulo': 'titulo_campo'}>Crear nota</div>
                <form className={selectedTab != 2 ? 'contenedor_botones ocultar_botones': 'contenedor_botones'}>
                    <div>
                        <div>Nombre Nota</div>
                        <input required type="text"  onChange={e => setNameGrade(e.target.value)}></input>
                    </div>
                    <div>
                        <div>Porcentaje</div>
                        <input required type="number" max="100" min="0" className="number" value={percentageGrade} onChange={e => (parseFloat(e.target.value) > 0 && parseFloat(e.target.value) <= 100 && (parseFloat(e.target.value) - parseInt(e.target.value))== 0) ? setPercentageGrade(e.target.value): setPercentageGrade('')}></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input required type="number" max="5" min="0" className="number" value={obtainedGrade}  onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5) ? setObtainedGrade(e.target.value): setObtainedGrade('')}></input>
                    </div>
                    <div>
                        <input type="button" onClick={() => (nameGrade != '' && percentageGrade != '' && obtainedGrade != '') ? (addToObject(), window.location.href="/ver-notas") : alert("Campos vacios")} className="enviar" value="Crear Materia"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}