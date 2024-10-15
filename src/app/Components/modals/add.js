import { useState } from "react"
import "../../styles/addmodal.css"

export function add( info, onClose){
    const [selectedOption, setSelectedOption] = useState("Corte")

    const getDesignBySelection = () => {
        let design;
        if(selectedOption == "Corte"){
            design = (
                <div>
                    <label>Porcentaje del corte: </label>
                    <input type="number" className="block p-1 w-full rounded"></input>
                </div> 
            )
        }else{
            design = (
                <div>
                    <label>Corte</label>
                    <select className="block bg-white w-full p-1 mb-3" name="options">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Porcentaje de la nota</label>
                    <input type="number" className="block p-1 mb-3 w-full"></input>
                    <label>Valor de la nota</label>
                    <input type="number" className="block p-1 w-full"></input>
                </div>
            ) 
        }
        return design;
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-black">{info}</h1>
            <h6 className="mb-3 text-sm">agregar</h6>
            <label>Selecciona: </label>
            <select className="block bg-white w-full p-1 rounded border-2 mb-3" name="options" onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="Corte">Corte</option>
                <option value="Nota">Nota</option>
            </select>
            {getDesignBySelection()}
        </>
    )
}