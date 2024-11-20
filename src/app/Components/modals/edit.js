import { useState } from "react"

export function edit( info, onClose){
    const [selectedOption, setSelectedOption] = useState("Corte")
    const [selectedCut, setSelectedCut] = useState(1)
    const [selectedNote, setSelectedNote] = useState(1)
    const [percentageNote, setPercentageNote] = useState(0)
    const [valueNote, setValueNote] = useState(0)
    const [checkBox1, setCheckBox1] = useState(false)
    const [checkBox2, setCheckBox2] = useState(false)
    const [percentageCut, setPercentgeCut] = useState(0)

    const getDesignBySelection = () => {
        let design;
        if(selectedOption == "Corte"){
            design = (
                <div>
                    <label>Corte</label>
                    <select className="block bg-white w-full p-1 mb-3" name="options" onChange={e => setSelectedCut(e.target.value)}>
                    {Object.keys(info.Cortes).map((value, index) => (
                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                    </select>
                    <label>Porcentaje del corte</label>
                    <input 
                        type="number"
                        min="1"
                        max="100"
                        step="1" 
                        className="block p-1 w-full"
                        onKeyDown={(e) => {
                            if (e.key === '-' || e.key === '.' || e.key === 'e' || e.key === "+") {
                            e.preventDefault();
                            }
                        }}
                        onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            if (value >= 1 && value <= 100) {
                                setPercentgeCut(value);
                            } else {
                            e.target.value = ""; 
                            }
                        }}
                        />
                </div> 
            )
        }else{
            design = (
                <div>
                    <label>Corte</label>
                    <select className="block bg-white w-full p-1 mb-3" name="options" onChange={e => setSelectedCut(e.target.value)}>
                        {Object.keys(info.Cortes).map((value, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    <label>Nota</label>
                    <select className="block bg-white w-full p-1 mb-3" name="options" onChange={e => setSelectedNote(e.target.value)}>
                        {Object.keys(info.Cortes["Corte " + selectedCut].Notas).map((value, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    <label>Valor de la nota</label>
                    <div className="flex justify-between mb-3">
                        <input
                            type="number"
                            min="0"
                            max="5"
                            step="0.1"
                            className="block p-1"
                            disabled={checkBox1}
                            onKeyDown={(e) => {
                                if (e.key === '-' || e.key === 'e' || e.key === "+") {
                                e.preventDefault();
                                }
                            }}
                            onChange={(e) => {
                                const value = e.target.value;

                                const isValid = /^([0-5]?(\.\d{0,1})?)$/.test(value);

                                if (isValid) {
                                e.target.value = value;
                                setValueNote(value);
                                } else {
                                e.target.value = value.slice(0, -1);
                                }
                            }}
                        />
                        <input type="checkbox" className="block w-4" onChange={(e) => setCheckBox1(e.target.checked)}></input>
                    </div>
                    <label>Porcentaje de la nota</label>
                    <div className="flex justify-between">
                        <input 
                            type="number"
                            min="1"
                            max="100"
                            step="1" 
                            className="block p-1"
                            disabled={checkBox2}
                            onKeyDown={(e) => {
                                if (e.key === '-' || e.key === '.' || e.key === 'e' || e.key === "+") {
                                e.preventDefault();
                                }
                            }}
                            onChange={(e) => {
                                const value = parseInt(e.target.value, 10);
                                if (value >= 1 && value <= 100) {
                                setPercentageNote(value);
                                } else {
                                e.target.value = ""; 
                                }
                            }}
                        />
                        <input type="checkbox" className="block w-4" onChange={(e) => setCheckBox2(e.target.checked)}></input>
                    </div>
                </div>
            ) 
        }
        return design;
    }

    const save = () => {
        let storedItems = JSON.parse(localStorage.getItem("items"));
        let subject = storedItems.find(subject => subject.name === info.name);
        if(selectedOption == "Corte"){   
            subject.Cortes["Corte " + selectedCut].porcentaje = percentageCut;
            localStorage.setItem("items", JSON.stringify(storedItems));
        }else{
            console.log("entra")
            if(!checkBox1){
                let nameCut = "Corte " + selectedCut;
                subject.Cortes[nameCut].Notas[selectedNote - 1][0] = parseFloat(valueNote);
                localStorage.setItem("items", JSON.stringify(storedItems));
            }
            if(!checkBox2){
                let nameCut = "Corte " + selectedCut;
                subject.Cortes[nameCut].Notas[selectedNote - 1][1] = parseFloat(percentageNote);
                localStorage.setItem("items", JSON.stringify(storedItems));
            }
        }
    }

    return (
        <>
        <div className="h-[360px]">
            <h1 className="text-2xl font-bold text-black">{info.name}</h1>
            <h6 className="mb-3 text-sm">editar</h6>
            <select className="block bg-white w-full p-1 mb-3" name="options" onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="Corte">Corte</option>
                <option value="Nota">Nota</option>
            </select>
            {getDesignBySelection()}
        </div>
        <div className="flex justify-between">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => onClose()}>Cerrar</button>
            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => (save(),onClose())}>Guardar</button>
        </div>
        </>
    )
}