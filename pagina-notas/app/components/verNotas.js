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
                <div key={e.id}  className={selectedTab == e.id ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div key={e.id}  className={selectedTab == e.id ? 'titulo_campo': 'titulo_campo aumentar_titulo'} onClick={() => verificacion(e.id)}>{e.materia}</div>
                <div key={e.id}  className={selectedTab == e.id ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                   {e.cortes.map(i => (
                        <div key={i.id}  className="contenedor_corte">
                            <div key={i.id} className="contenedor_nombre_corte">
                                <div key={i.id} className="numero_corte">Corte {i.id}</div>
                                <div key={i.id} className="porcentaje_corte">Porcentaje: {i.porcentaje}</div>
                            </div>
                            {i.notas.map(o => (
                                <div key={o.id} className="contenedor_notas">
                                    <div key={o.id} className="contenedor_nombre_notas">
                                        <div key={o.id} className="notas_nota"><b>Nota {o.id}:</b>&nbsp;&nbsp;{o.nota}</div>
                                        <div key={o.id} className="notas_nota">{o.porcentaje}</div>
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







