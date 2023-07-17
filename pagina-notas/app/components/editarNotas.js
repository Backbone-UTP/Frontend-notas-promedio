"use client"
import { useState } from "react"
import "../style/verNotas.css"


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

    const [selectedTab, setSelectedTab] = useState(0);
    
    const verificacion = (id) => {
        if(id != selectedTab){
            setSelectedTab(id);
        }
    }

    return(
        <div className="contenedor_universal">
            <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'} >Materia</div>
                <div className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    <div className="nombre_Materia">Nombre Materia</div>

                    <input type="text" placeholder="ingrese la materia" className="filtrar_materia" />
                        
                    <div className="contenedor_materias">
                        {data.map(e => (
                            <div> {e.materia} </div>
                        ))}
                    </div>

                    <button>Editar Corte</button>
                    <button>Crear Corte</button>

                </div>
            </div>
            <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'} >Corte</div>
                <div className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >

                </div>
            </div>
            <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'} >Nota</div>
                <div className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                    
                </div>
            </div>
        </div>
    )
}