"use client"
import { useState, useEffect, useContext } from "react"
import "../style/editarNotas.css"
import { data } from "./varibaleDatos";
import { contextData } from "../context/contextData"

export default function EditarNotas(){

    const [nombreMateria, setNombreMateria] = useState('')
    const [selectedTab, setSelectedTab] = useState(0)
    const [idCorte, setIdCorte] = useState(-1)
    const [idMateria, setIdMateria] = useState(-1)
    const [botonElegido, setBotonElegido] = useState(1)

    const [nameCut,setNameCut] = useState('')
    const [percentageCut,setPercentageCut] = useState('')
    const [obtainedCut,setObtainedCut] = useState('')
    const [expectedCut,setExpectedCut] = useState('')

    const[nameGrade,setNameGrade] = useState('')
    const[percentageGrade,setPercentageGrade] = useState('')
    const[obtainedGrade,setObtainedGrade] = useState('')

    const [valorcheckbox, setvalorcheckbox] = useState(false)

    var {data1, cambioData1} = useContext(contextData)

    useEffect(() => {
        let datas = localStorage.getItem("data")
        if(datas != null) cambioData1(JSON.parse(datas))
    }, [] )

    const verificationPercentajeCut= () => {
        if(nameCut != '' && percentageCut != '' && obtainedCut != '' && expectedCut != ''){
            if(data1[idMateria].cortes.reduce((collector, porcentajeactual) => parseFloat(collector) + parseFloat(porcentajeactual.porcentaje), 0) + parseFloat(percentageCut) <= 100){
                setSelectedTab(selectedTab + 1)
            }else{
                alert("La suma de los porcentajes de los cortes de la materia " + data1[idMateria].materia + " es mayor a 100");
            }
        }else{
            alert("campos vacíos");
        }
    }

    const contenidoCorte = () => {
        if(botonElegido == 0){
            return(<div>
                <div className="nombre_materia"> Numero del corte</div>

                <input disabled placeholder="selecciona el corte" className="filtrar_materia" value={"corte " + (idCorte + 1) } />
                    
                <div className="contenedor_materias">
                    {data1[idMateria].cortes.map(e => ( 
                    <div key={e.id} onClick={() => setIdCorte(e.id - 1)}> corte {e.id} </div>
                    ))}
                </div>

                <div className="contenedor_botones_inferiores">
                    <button className="boton_editar" onClick={() => idCorte != -1 ? (setSelectedTab(2), setBotonElegido(3)) : alert("No has seleccionado ningun corte")}>Editar Nota</button>
                    <button className="boton_editar" onClick={() => idCorte != -1 ? (setSelectedTab(2) , setBotonElegido(4)) : alert("No has seleccionado ningun corte")}>Crear Nota</button>
                </div>
            </div>)
        }else if(botonElegido == 1){
            return(
            <form>
                <div className="contenedor_Cambio_Notas">
                    <div className="contenedor_nuevo_corte">
                        <div className="nombre_corte">
                            <div>Nombre Corte</div>
                            <input required type="text" onChange={e => setNameCut(e.target.value)}></input>
                        </div>
                        <div className="porcentaje_corte">
                            <div>Porcentaje</div>
                            <input required type="number" max="100" min="0" className="number" value={percentageCut} onChange={e => (parseFloat(e.target.value) > 0 && parseFloat(e.target.value) <= 100 && (parseFloat(e.target.value) - parseInt(e.target.value)) == 0) ? setPercentageCut(e.target.value): setPercentageCut('')}></input>
                        </div>
                        <div className="obtenido_corte">
                            <div>Obtenido</div>
                            <input required type="number" max="5" min="0" className="number" value={obtainedCut} onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5) ? setObtainedCut(e.target.value): setObtainedCut('')}></input>
                                    </div>
                        <div className="esperado_corte">
                            <div>Esperado</div>
                            <input required type="number" max="5" min="0" className="number" value={expectedCut} onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5) ? setExpectedCut(e.target.value): setExpectedCut('')}></input>
                        </div>
                    </div>
                    <div className="contenedor_boton_editar">
                        <button type="button" onClick={() => verificationPercentajeCut()} className="boton_editar" value="Crear Nota">Crear Nota</button>
                    </div>
                </div>
            </form>)
        }
    }

    const verificationPercentajeGrade = () => {
        if(nameGrade != '' && percentageGrade != '' && obtainedGrade != ''){
            if (data1[idMateria].cortes[idCorte === -1 ? data1[idMateria].cortes.length - 1 : idCorte].notas.reduce((collector, porcentajeactual) => parseFloat(collector) + parseFloat(porcentajeactual.porcentaje), 0) + parseFloat(percentageGrade) <= 100) {
                console.log("creado");
            }else{
                alert("La suma de los porcentajes de las notas es mayor a 100");
            }
        }else{
            alert("campos vacíos")
        }
    }


    const contenidoNota = () => {
        if(botonElegido == 3){
            return opcionPorcentajeCorte(valorcheckbox)
        }else{
            return(
            <form>
                <div className="contenedor_Cambio_Notas">
                    <div className="contenedor_nuevo_corte">
                        <div className="nombre_nota">
                            <div>Nombre Nota</div>
                                <input required type="text"  onChange={e => setNameGrade(e.target.value)}></input>
                        </div>
                        <div className="porcentaje_nota">
                            <div>Porcentaje</div>
                            <input required type="number" max="100" min="0" className="number" value={percentageGrade} onChange={e => (parseFloat(e.target.value) > 0 && parseFloat(e.target.value) <= 100 && (parseFloat(e.target.value) - parseInt(e.target.value))== 0) ? setPercentageGrade(e.target.value): setPercentageGrade('')}></input>
                        </div>
                        <div className="obtenido_nota"> 
                            <div>Obtenido</div>
                            <input required type="number" max="5" min="0" className="number" value={obtainedGrade}  onChange={e => (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 5) ? setObtainedGrade(e.target.value): setObtainedGrade('')}></input>
                        </div>
                    </div>
                    <div className="contenedor_boton_editar">
                        <button type="button" onClick={() => verificationPercentajeGrade() } className="boton_editar" value="Crear Materia">Crear Materia</button>
                    </div>
                </div>
            </form>)
        }
    }

    const opcionPorcentajeCorte = (valor) => {
        if(valorcheckbox == true){
            return  <div className="contenedor_Cambio_Notas">
                        <div className="contenedor_corte_porcentaje">
                            <div className="contenedor_input_nombre_materia"><input type="text" className="input_nombre_materia" defaultValue={nombreMateria}></input></div>
                            <div className="corte_editar_nota">corte {idCorte + 1}</div>
                            <div className="texto_porcentaje">porcentaje:&nbsp;<input className="input_porcentaje_corte" type="number" max="100" min="0" defaultValue={data1[idMateria].cortes[idCorte].porcentaje}></input>%</div>
                            <div className="guardar_cancelar">
                                <button className="boton_cancelar" onClick={() => setvalorcheckbox(false)} >Cancelar</button>
                                <button className="boton_guardar" onClick={() => setvalorcheckbox(false)}>Guardar</button>
                            </div>
                        </div>
                        {data1[idMateria].cortes[idCorte].notas.map(e => ( 
                            <div className="contenedor_nota" key={e.id + 1}> 
                                <div className="texto_nota" key={e.id + 2}>nota:&nbsp;<input type="text" className="input_numero_nota" key={e.id + 3} defaultValue={e.id}></input></div>
                                <input  className="input_editar_nota" type="number" max="5" min="0" step="0.1" key={e.id + 4} defaultValue={e.nota}></input>
                                <div className="porcentaje" key={e.id + 6}><input className="input_editar_porcentaje" type="number" max="100" min="0" key={e.id + 5} defaultValue={e.porcentaje}></input>%</div>
                            </div>
                            ))}
                    </div>
        }else{
            return  <div className="contenedor_Cambio_Notas">
                        <div className="contenedor_corte_porcentaje">
                            <div className="nombre_materia">{nombreMateria}</div>
                            <div className="numero_corte"> corte {idCorte + 1}</div>
                            <div className="porcentaje_corte"> porcentaje: {data1[idMateria].cortes[idCorte].porcentaje}%</div>
                            <button className="boton_editar" onClick={() => setvalorcheckbox(true)} >Editar</button>
                        </div>
                        {data1[idMateria].cortes[idCorte].notas.map(e => ( 
                            <div className="contenedor_nota" key={e.id + 1}> 
                                <div className="numero_nota" key={e.id + 2}>nota {e.id}</div>
                                <div className="valor_nota" key={e.id + 3}>{e.nota}</div>
                                <div className="porcentaje_nota" key={e.id + 4}>{e.porcentaje} %</div>
                            </div>
                            ))}
                    </div>
        }
    }

    const chooseToAdd = () => {
        if(botonElegido == 4){
            // addNoteToObject()
            console.log("hola")
        }else{
            addToObject()
            window.location.href="/ver-notas"
        }
    }

    const addToObject = () => {
        let idLastSubject = data1[Object.keys(data1).length - 1].id
        console.log(idLastSubject)
        const dataCambio = data1
        const materia = {
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
        dataCambio.push(materia)

        cambioData1(dataCambio)
        localStorage.setItem("data", JSON.stringify(data1));
    }

    return(
        
        <div className="contenedor_universal">
            <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'} >Materia</div>
                <div className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    <div className="nombre_materia">Nombre Materia</div>

                    <input disabled placeholder="selecciona la materia" className="filtrar_materia" value={nombreMateria}/>
                        
                    <div className="contenedor_materias">
                        {data1.map(e => ( 
                        <div key={e.id} onClick={() => (setIdMateria(e.id - 1), setNombreMateria(e.materia))}> {e.materia} </div>
                        ))}
                    </div>

                    <div className="contenedor_botones_inferiores">
                        <button className="boton_editar" onClick={() => idMateria != -1 ? (setSelectedTab(1), setBotonElegido(0)) : alert("No has seleccionado ninguna materia")}>Editar Corte</button>

                        <button className="boton_editar" onClick={() => idMateria != -1 ? (setSelectedTab(1), setBotonElegido(1)) : alert("No has seleccionado ninguna materia")}>Crear Corte</button>
                    </div>
                </div>
            </div>

            <div className={selectedTab == 1 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 1 ? 'titulo_campo': 'titulo_campo aumentar_titulo'} >Corte</div>
                <div className={selectedTab == 1 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    {contenidoCorte()}
                </div>
            </div>

            <div className={selectedTab == 2 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 2 ? 'titulo_campo': 'titulo_campo aumentar_titulo'} >Nota</div>
                <div className={selectedTab == 2 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    {contenidoNota()}
                </div>
            </div>
        </div>
    )
}