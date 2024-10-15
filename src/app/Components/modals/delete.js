import { useState } from "react"

export function deletem( info, onClose){
    const [selectedOption, setSelectedOption] = useState("Corte")

    const getDesignBySelection = () => {
        let design;
        if(selectedOption == "Corte"){
            design = (
                <>
                    <label>Corte</label>
                    <select className="block bg-white w-full p-1" name="options">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </>
                
            )
        }else{
            design = (
                <div>
                    <label>Corte</label>
                    <select className="block bg-white w-full p-1" name="options">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Nota</label>
                    <select className="block bg-white w-full p-1" name="options">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            ) 
        }
        return design;
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-black">{info}</h1>
            <h6 className="mb-3 text-sm">Eliminar</h6>
            <select className="block bg-white w-full p-1 mb-3" name="options" onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="Corte">Corte</option>
                <option value="Nota">Nota</option>
            </select>
            {getDesignBySelection()}
        </>
    )
}