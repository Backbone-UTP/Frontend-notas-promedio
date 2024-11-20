import { add } from "./modals/add";
import { edit } from "./modals/edit";
import { deletem } from "./modals/delete";
import { create } from "./modals/create";

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
            case "crear":
                style = create(info, onClose)
        }
        return style;
    }

    if (!isOpen) return null;
    return( 
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center w-full h-screen z-10">
            <div className="bg-gray-200 p-4 rounded-lg min-h-[450px] min-w-[300px] text-black">
                {setModal(action, info, onClose)}
            </div>
        </div>
    )
}