"use client"
import { useState } from "react"
import "../style/verNotas.css"
import { useContext } from "react";
import { contextData } from "../context/contextData"

export default function VerNotas(){
    const [selectedTab, setSelectedTab] = useState(1);

    const {data1} = useContext(contextData)
    
    const verificacion = (id) => {
        if(id != selectedTab){
            setSelectedTab(id);
        }
    }

    return(
        <div className="contenedor_universal">
            {data1.map(e => (
                <div key={e.id + 1}  className={selectedTab == e.id ? 'contenedor_cuadros': 'contenedor_cuadros reducir_cuadro'}>
                <div key={e.id + 2}  className={selectedTab == e.id ? 'titulo_campo': 'titulo_campo aumentar_titulo'} onClick={() => verificacion(e.id)}>{e.materia}</div>
                <div key={e.id + 3}  className={selectedTab == e.id ? 'contenedor_botones': 'contenedor_botones ocultar_botones'} >
                   {e.cortes.map(i => (
                        <div key={i.id + 10}  className="contenedor_corte">
                            <div key={i.id + 20} className="contenedor_nombre_corte">
                                <div key={i.id + 30} className="numero_corte">Corte {i.id}</div>
                                <div key={i.id + 40} className="porcentaje_corte">Porcentaje: {i.porcentaje} %</div>
                            </div>
                            {i.notas.map(o => (
                                <div key={o.id + 100} className="contenedor_notas">
                                    <div key={o.id + 200} className="contenedor_nombre_notas">
                                        <div key={o.id + 300} className="notas_nota"><b>Nota {o.id}:</b>&nbsp;&nbsp;{o.nota}</div>
                                        <div key={o.id + 400} className="notas_nota">{o.porcentaje} %</div>
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







