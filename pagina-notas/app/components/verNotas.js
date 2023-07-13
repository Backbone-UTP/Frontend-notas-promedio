"use client"
import { useState } from "react"
import "../style/verNotas.css"


const data = [
        {id: 1, personaje: "naruto", anime: "Naruto"},
        {id: 2, personaje: "goku", anime: "dragon ball"},
        {id: 3, personaje: "kensing himura", anime: "kenshiind"},
        {id: 4, personaje: "monkey", anime: "onepiece"},
        {id: 5, personaje: "edward stark", anime: "fullmetal"},
        {id: 6, personaje: "seto", anime: "yu-gi-oh"},
        {id: 7, personaje: "bo", anime: "yoh"},
    ];

export default function VerNotas(){
    const [selectedTab, setSelectedTab] = useState(0);

    return(
        <div className="contenedor_universal">
            {data.map(e => (
                <div>
                <div>{e.id}</div>   
                <div>{e.personaje}</div>  
                <div>{e.anime}</div>  
                </div>
            ))}
        </div>
    )
}