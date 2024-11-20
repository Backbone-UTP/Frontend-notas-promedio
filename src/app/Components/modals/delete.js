import { useState } from "react"

export function deletem( info, onClose){
    const [selectedOption, setSelectedOption] = useState("Corte")
    const [selectedCut, setSelectedCut] = useState(1)
    const [selectedNote, setSelectedNote] = useState(1)

    const getDesignBySelection = () => {
        let design;
        if(selectedOption == "Corte"){
            design = (
                <>
                    <label>Corte</label>
                    <select className="block bg-white w-full p-1" name="options" onChange={e => setSelectedCut(e.target.value)}>
                        {Object.keys(info.Cortes).map((value, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                </>
                
            )
        }else{
            design = (
                <div>
                    <label>Corte</label>
                    <select className="block bg-white w-full p-1 mb-3" name="options" onChange={(e) => setSelectedCut(e.target.value)}>
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
                </div>
            ) 
        }
        return design;
    }

    const save = () => {
        let storedItems = JSON.parse(localStorage.getItem("items"));
        let subject = storedItems.find(subject => subject.name === info.name);
        if(selectedOption == "Corte"){   
            let nameCut = "Corte " + selectedCut;
            delete subject.Cortes[nameCut];

            let updatedCortes = {};
            let cutNumber = 1;
            for (let key in subject.Cortes) {
                if (subject.Cortes.hasOwnProperty(key)) {
                    updatedCortes["Corte " + cutNumber] = subject.Cortes[key];
                    cutNumber++;
                }
            }
            subject.Cortes = updatedCortes;

            localStorage.setItem("items", JSON.stringify(storedItems));

        }else{
            subject.Cortes["Corte " + selectedCut].Notas.splice(selectedNote - 1, 1);
            localStorage.setItem("items", JSON.stringify(storedItems));
        }
    }

    return (
        <>
        <div className="h-[360px]">
            <h1 className="text-2xl font-bold text-black">{info.name}</h1>
            <h6 className="mb-3 text-sm">Eliminar</h6>
            <select className="block bg-white w-full p-1 mb-3" name="options" onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="Corte">Corte</option>
                <option value="Nota">Nota</option>
            </select>
            {getDesignBySelection()}
        </div>
        <div className="flex justify-between">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => onClose()}>Cerrar</button>
            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => (save(), onClose())}>Guardar</button>
        </div>
        </>
    )
}