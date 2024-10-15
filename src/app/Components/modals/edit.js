import { useState } from "react"
import "../../styles/addmodal.css"

export function edit( info, onClose){
    const [selectedOption, setSelectedOption] = useState("Corte")
    const [checkBox1, setCheckBox1] = useState(false)
    const [checkBox2, setCheckBox2] = useState(false)

    const getDesignBySelection = () => {
        let design;
        if(selectedOption == "Corte"){
            design = (
                <div>
                    <label>Corte</label>
                    <select className="block bg-white w-full p-1 mb-3" name="options">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Porcentaje del corte</label>
                    <input type="number" className="block p-1 w-full"></input>
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
                    <label>Nota</label>
                    <select className="block bg-white w-full p-1 mb-3" name="options">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Valor de la nota</label>
                    <div className="flex justify-between mb-3">
                        <input type="number" className="block p-1" disabled={checkBox1}></input>
                        <input type="checkbox" className="block w-4" onChange={(e) => setCheckBox1(e.target.checked)}></input>
                    </div>
                    <label>Porcentaje de la nota</label>
                    <div className="flex justify-between">
                        <input type="number" className="block p-1" disabled={checkBox2}></input>
                        <input type="checkbox" className="block w-4" onChange={(e) => setCheckBox2(e.target.checked)}></input>
                    </div>
                </div>
            ) 
        }
        return design;
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-black">{info}</h1>
            <h6 className="mb-3 text-sm">editar</h6>
            <select className="block bg-white w-full p-1 mb-3" name="options" onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="Corte">Corte</option>
                <option value="Nota">Nota</option>
            </select>
            {getDesignBySelection()}
        </>
    )
}