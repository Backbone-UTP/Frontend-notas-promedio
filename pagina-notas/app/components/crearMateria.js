"use client"
import { useState } from "react"
import "../style/crearMateria.css"

export default function CrearMateria(){
    const [selectedTab, setSelectedTab] = useState()
    return(
        <div className="contenedor_universal">
            <div className="contenedor_cuadros">
                <div className="titulo_campo">Crear Materia</div>
                <div className="contenedor_botones">
                    <div>
                        <div>Nombre Materia</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Créditos</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Esperado</div>
                        <input></input>
                        <button>Crear Materia</button>
                    </div>
                </div>
            </div>
            <div className="contenedor_cuadros">
                <div className="titulo_campo">Crear corte</div>
                <div className="contenedor_botones">
                    <div>
                        <div>Nombre Corte</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Porcentaje</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Esperado</div>
                        <input></input>
                        <button>Crear Corte</button>
                    </div>
                </div>
            </div>
            <div className="contenedor_cuadros">
                <div className="titulo_campo">Crear nota</div>
                <div className="contenedor_botones">
                    <div>
                        <div>Nombre Nota</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Procentaje</div>
                        <input></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input></input>
                        <button>Crear Nota</button>
                    </div>
                </div>
            </div>
        </div>
    )
}