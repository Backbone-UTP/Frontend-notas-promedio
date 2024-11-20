import { useState } from "react"

export function create( info, onClose){
    const [subjectName, setSubjectName] = useState("")
    const [subjectCredits, setSubjectCredits] = useState(0)

    const save = () => {
        let storedItems = JSON.parse(localStorage.getItem("items"));
        const newSubject = {
            "name" : subjectName,
            "credits" : subjectCredits,
            "Cortes" : {}
        }
        storedItems.push(newSubject)
        localStorage.setItem("items", JSON.stringify(storedItems))
    }

    return (
        
        <>
            <div className="h-[360px]">
                <h1 className="text-2xl font-bold text-black mb-3">{info}</h1>
                <label className="block">Nombre de la Materia</label>
                <input required type="text" className="block p-1 mb-3 w-full" onChange={(e) => setSubjectName(e.target.value)}></input>
                <label className="block">Creditos de la Materia</label>
                <input required type="number" className="block p-1 mb-3 w-full" onChange={(e) => setSubjectCredits(e.target.value)}></input>
            </div>
            <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => onClose()}>Cerrar</button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => (save() ,onClose())}>Guardar</button>
            </div>
        </>
    )
}