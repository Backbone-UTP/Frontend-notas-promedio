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
    ];

export default function VerNotas(){
    const [selectedTab, setSelectedTab] = useState(1);
    
    const verificacion = (id) => {
        if(id != selectedTab){
            setSelectedTab(id);
        }
    }

    return(
        <div className="contenedor_universal">
            {data.map(e => (
                <div className={selectedTab == e.id ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == e.id ? 'titulo_campo': 'titulo_campo aumentar_titulo'} onClick={() => verificacion(e.id)}>{e.materia}</div>
                <div className={selectedTab == e.id ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                   {e.cortes.map(i => (
                        <div className="contenedor_corte">
                            <div className="contenedor_nombre_corte">
                                <div className="numero_corte">corte {i.id}</div>
                                <div className="porcentaje_corte">porcentaje: {i.porcentaje}</div>
                            </div>
                            {i.notas.map(o => (
                                <div className="contenedor_notas">
                                    <div className="contenedor_nombre_notas">
                                        <div className="notas_nota">nota {o.id}: {o.nota}</div>
                                        <div className="notas_nota">{o.porcentaje}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                   ))}
                </div>
            </div>
            ))}
        </div>
    )
}