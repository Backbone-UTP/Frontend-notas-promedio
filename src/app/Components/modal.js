export function Modal({ isOpen, onClose, info, action }) {

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-15 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold text-black">{info}</h1>
            <p className="text-gray-500">{action}</p>
            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={() => onClose()}>Close</button>
        </div>
        </div>
    );
}