"use client"
import { useState } from "react"
import "../style/verNotas.css"

export default function VerNotas(){
    const [selectedTab, setSelectedTab] = useState(0);

        const hla = () => {
        for(var i = 0; i < 5; i++) console.log("hola")
        }

    return(
        <div className="contenedor_universal">
            
        </div>
    )
}