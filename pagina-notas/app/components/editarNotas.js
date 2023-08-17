"use client"
import { useState } from "react"
import "../style/editarNotas.css"


const data = [
        {
            materia: "matematicas IV", 
            id: 1,
            cortes: [
                {
                    id: "1",
                    porcentaje: "30",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40",
                        }
                        
                    ], 
                },
                {
                    id: "2",
                    porcentaje: "30",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40",
                        }
                        
                    ], 
                },
                {
                    id: "3",
                    porcentaje: "40",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40",
                        }
                        
                    ], 
                },
            ]
        },
        {
            materia: "fisica II", 
            id: 2,
            cortes: [
                {
                    id: "1",
                    porcentaje: "30",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40",
                        }
                        
                    ], 
                },
                {
                    id: "2",
                    porcentaje: "30",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40",
                        }
                        
                    ], 
                },
                {
                    id: "3",
                    porcentaje: "40",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40",
                        }
                        
                    ], 
                },
            ]
        },
        {
            materia:"Introduccion a la bareta I",
            id: 3,
            cortes: [
                {
                    id: "1",
                    porcentaje: "100",
                    notas: [
                        {
                            id: "1",
                            nota: "6.9",
                            porcentaje: "100",
                        },
                        {
                            id: "2",
                            nota: "5.0",
                            porcentaje: "10",
                        }
                    ],
                }
            ]
        },
    ];

export default function EditarNotas(){

    const [nombreMateria, setNombreMateria] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);
    const [idCorte, setIdCorte] = useState(-1);
    const [idMateria, setIdMateria] = useState(-1);
    const [botonElegido, setBotonElegido] = useState(1)

    const [selectedCreditos, setCreditos] = useState('')
    const [selectedObtenido, setObtenido] = useState('')
    const [selectedEsperado, setEsperado] = useState('')
    const [nombreCorte, setNombreCorte] = useState('')

    const [valorcheckbox, setvalorcheckbox] = useState(false)


    const opcionPorcentajeCorte = (valor) => {
        if(valorcheckbox == true){
            return <input type="number" max="100" min="0" placeholder={valor}></input>
        }else{
            return <div>porcentaje: {valor} %</div>
        }
    }

    const contenidoCorte = () => {
        if(botonElegido == 0){
            return(<div>
                <div className="nombre_materia"> Numero del corte</div>

                <input disabled placeholder="selecciona el corte" className="filtrar_materia" value={"corte " + (idCorte + 1) } />
                    
                <div className="contenedor_materias">
                    {data[idMateria].cortes.map(e => ( 
                    <div key={e.id} onClick={() => setIdCorte(e.id - 1)}> corte {e.id} </div>
                    ))}
                </div>

                <div className="contenedor_botones_inferiores">
                    <button className="boton_editar" onClick={() => idCorte != -1 ? (setSelectedTab(2), setBotonElegido(3)) : alert("No has seleccionado ningun corte")}>Editar Nota</button>
                </div>
            </div>)
        }else if(botonElegido == 1){
            return(
            <form>
                <div>
                    <div>Nombre Corte</div>
                    <input required type="text" onChange={e => setNombreCorte(e.target.value)}></input>
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

                    <input type="button" onClick={() => (nombreCorte != '' && selectedCreditos != '' && selectedObtenido != '' && selectedEsperado != '') ? (setSelectedTab(selectedTab + 1), setNombreCorte(''),  setCreditos(''),  setObtenido(''),  setEsperado('')) : alert("NO VE QUE NO HA LLENADO EL CAMPO AGUEVADO")} className="enviar" value="Crear Nota"></input>
                </div>
            </form>)
        }
    }

    const contenidoNota = () => {
        if(botonElegido == 3){
<<<<<<< HEAD
            return (<div>
                <div className="contenedor_corte_porcentaje">
                    <div className="numero_corte"> corte {idCorte + 1}</div>
                    <div className="porcentaje_corte"> porcentaje: {data[idMateria].cortes[idCorte].porcentaje}</div>
                </div>
=======
            return(<div>
                <div className="numero_corte"> corte {idCorte + 1}</div>
                <input type="checkbox" onChange={() => setvalorcheckbox(!valorcheckbox)} ></input>
                <div className="porcentaje_corte"> {opcionPorcentajeCorte(data[idMateria].cortes[idCorte].porcentaje)} </div>
>>>>>>> 9e6e62c174411aac74068e3e2a6ec8eb5cf5acc7
                {data[idMateria].cortes[idCorte].notas.map(e => ( 
                    <div className="contenedor_nota" key={e.id + 1}> 
                        <div className="numero_nota" key={e.id + 2}>nota {e.id}</div>
                        <input type="checkbox"></input>
                        <div className="valor_nota" key={e.id + 3}>{e.nota}</div>
                        <div className="porcentaje_nota" key={e.id + 4}>{e.porcentaje} %</div>
                    </div>
                    ))}
            </div>)
        }else{
            return(
            <form>
                <div>
                    <div>Nombre Nota</div>
                    <input required type="text"  onChange={e => setNombreCorte(e.target.value)}></input>
                </div>
                <div>
                    <div>Porcentaje</div>
                    <input required type="number" max="100" min="0" className="number" value={selectedCreditos} onChange={e => (parseInt(e.target.value) > 0 && parseInt(e.target.value) <= 100) ? setCreditos(e.target.value): setCreditos('')}></input>
                </div>
                <div>
                    <div>Obtenido</div>
                    <input required type="number" max="5" min="0" className="number" value={selectedObtenido}  onChange={e => (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 5) ? setObtenido(e.target.value): setObtenido('')}></input>

                    <input type="button" onClick={() => (nombreCorte != '' && selectedCreditos != '' && selectedObtenido != '') ? (setNombreCorte(''),  setCreditos(''),  setObtenido(''),  setEsperado(''), window.location.href="/ver-notas") : alert("NO VE QUE NO HA LLENADO EL CAMPO AGUEVADO")} className="enviar" value="Crear Materia"></input>
                </div>
            </form>)
        }
    }

    return(
        
        <div className="contenedor_universal">
            <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'} >Materia</div>
                <div className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    <div className="nombre_materia">Nombre Materia</div>

                    <input disabled placeholder="selecciona la materia" className="filtrar_materia" value={nombreMateria}/>
                        
                    <div className="contenedor_materias">
                        {data.map(e => ( 
                        <div key={e.id} onClick={() => (setIdMateria(e.id - 1), setNombreMateria(e.materia))}> {e.materia} </div>
                        ))}
                    </div>

                    <div className="contenedor_botones_inferiores">
                        <button className="boton_editar" onClick={() => idMateria != -1 ? (setSelectedTab(1), setBotonElegido(0)) : alert("No has seleccionado ninguna materia")}>Editar Corte</button>

                        <button className="boton_crear" onClick={() => idMateria != -1 ? (setSelectedTab(1), setBotonElegido(1)) : alert("No has seleccionado ninguna materia")}>Crear Corte</button>
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