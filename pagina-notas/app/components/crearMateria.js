"use client"
import { useState } from "react"
import "../style/crearMateria.css"

export default function CrearMateria(){
    const [selectedTab, setSelectedTab] = useState(0)

    return(
        <div className="contenedor_universal">
            <div className="contenedor_cuadros">
                <div className="titulo_campo">Crear Materia</div>
                <div className="contenedor_botones">
                    <div>
                        <div>Nombre Materia</div>
                        <input type="text"></input>
                    </div>
                    <div>
                        <div>Créditos</div>
                        <input type="number" max="5" min="1" className="number"></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input type="number" max="5" min="0" className="number"></input>
                    </div>
                    <div>
                        <div>Esperado</div>
                        <input type="number" max="5" min="0" className="number"></input>
                        <button onClick={() => setSelectedTab(selectedTab + 1)}>Crear Materia</button>
                    </div>
                </div>
            </div>
            <div className="contenedor_cuadros">
                <div className="titulo_campo">Crear corte</div>
                <div className="contenedor_botones">
                    <div>
                        <div>Nombre Corte</div>
                        <input type="text"></input>
                    </div>
                    <div>
                        <div>Porcentaje</div>
                        <input type="number" max="100" min="0" className="number"></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input type="number" max="5" min="0" className="number"></input>
                    </div>
                    <div>
                        <div>Esperado</div>
                        <input type="number" max="5" min="0" className="number"></input>
                        <button>Crear Corte</button>
                    </div>
                </div>
            </div>
            <div className="contenedor_cuadros">
                <div className="titulo_campo">Crear nota</div>
                <div className="contenedor_botones">
                    <div>
                        <div>Nombre Nota</div>
                        <input type="text"></input>
                    </div>
                    <div>
                        <div>Porcentaje</div>
                        <input type="number" max="100" min="0" className="number"></input>
                    </div>
                    <div>
                        <div>Obtenido</div>
                        <input type="number" max="5" min="0" className="number"></input>
                        <button>Crear Nota</button>
                    </div>
                </div>
            </div>
        </div>
    )
}