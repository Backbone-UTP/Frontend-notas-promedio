"use client"
import { useState } from "react"
import "../style/verNotas.css"


const data = [
        {
            materia: "matematicas IV", 
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
    const [selectedTab, setSelectedTab] = useState(0);

    return(
        <div className="contenedor_universal">
            {data.map(e => (
                <div className={selectedTab == 0 ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div className={selectedTab == 0 ? 'titulo_campo': 'titulo_campo aumentar_titulo'}>{e.materia}</div>
                <div className={selectedTab == 0 ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
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