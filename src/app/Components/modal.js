import { add } from "./modals/add";
import { edit } from "./modals/edit";
import { deletem } from "./modals/delete";

export function Modal({ isOpen, onClose, info, action }) {
    const setModal = (action, info, onClose) => {
        let style;
        switch(action){
            case "add":
                style = add(info, onClose)
                break;
            case "edit":
                style = edit(info, onClose)
                break;
            case "delete":
                style = deletem(info, onClose)
                break;
        }
        return style;
    }

    if (!isOpen) return null;
    return( 
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center w-full h-screen z-10">
            <div className="bg-gray-200 p-4 rounded-lg min-h-[450px] min-w-[300px] text-black">
                <div className="h-[360px]">
                    {setModal(action, info, onClose)}
                </div>
                <div className="flex justify-between">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => onClose()}>Cerrar</button>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => onClose()}>Guardar</button>
                </div>
            </div>
        </div>
    )
}