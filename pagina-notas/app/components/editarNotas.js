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
                    porcentaje: "30%",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40%",
                        }
                        
                    ], 
                },
                {
                    id: "2",
                    porcentaje: "30%",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40%",
                        }
                        
                    ], 
                },
                {
                    id: "3",
                    porcentaje: "40%",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40%",
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
                    porcentaje: "30%",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40%",
                        }
                        
                    ], 
                },
                {
                    id: "2",
                    porcentaje: "30%",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40%",
                        }
                        
                    ], 
                },
                {
                    id: "3",
                    porcentaje: "40%",
                    notas: [
                        {
                            id: "1",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "2",
                            nota: "4.5",
                            porcentaje: "30%",
                        },
                        {
                            id: "3",
                            nota: "4.5",
                            porcentaje: "40%",
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
                            porcentaje: "100%",
                        },
                        {
                            id: "2",
                            nota: "5.0",
                            porcentaje: "10%",
                        }
                    ],
                }
            ]
        },
    ];

export default function EditarNotas(){

    const [nombreMateria, setNombreMateria] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);
    const [idCorte, setIdCorte] = useState(0);
    const [idMateria, setIdMateria] = useState(-1);
    const [botonElegido, setBotonElegido] = useState(1)

    const contenidoCorte = () => {
        if(botonElegido == 0){
            return(<div>
                <div className="nombre_materia"> Numero del corte</div>

                <input disabled placeholder="selecciona el corte" className="filtrar_materia" value={"corte " + idCorte } />
                    
                <div className="contenedor_materias">
                    {data[idMateria].cortes.map(e => ( 
                    <div key={e.id} onClick={() => setIdCorte(e.id)}> corte {e.id} </div>
                    ))}
                </div>

                <div className="contenedor_botones_inferiores">
                    <button className="boton_editar" onClick={() => idCorte != 0 ? setSelectedTab(2) : alert("No has seleccionado ningun corte")}>Editar Nota</button>
                </div>
            </div>)
        }else{
            return(<div>adios</div>)
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
                    
                </div>
            </div>
        </div>
    )
}