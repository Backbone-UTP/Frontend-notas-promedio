import "../styles/card.css";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { Modal } from "./modal";
import { useState } from "react";

export default function Card({ index, currentIndex, values, main}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [action, setAction] = useState("");
  const positionOffset = index - currentIndex;
  const translateValue = positionOffset * 100;
  const scaleValue = 1 - 0.08 * Math.abs(positionOffset);
  const rotateYValue = positionOffset *  - 0.01;

  const style = {
    transform: `translateX(${translateValue}px) scale(${scaleValue}) perspective(60px) rotateY(${rotateYValue}deg)`,
    zIndex: -Math.abs(positionOffset),
  };

  const className = () => {
    if (positionOffset === 0) {
      return "flex flex-col items-center justify-center card-container bg-gray-800 rounded-lg p-4 scrollbar-hiddenuy";
    } else {
      return "flex flex-col items-center justify-center card-container bg-gray-800 rounded-lg p-4 scrollbar-hiddenuy blur-[2px]";
    }
  }

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if(main){

    return (
      <>
        <div className={className()} style={style}>
          <button className="border-2 py-3 px-14 rounded duration-300 hover:bg-white hover:text-black" 
            onClick={() => {openModal(); setAction("crear")}}>
              Crear Materia
          </button>
        </div>
        <Modal isOpen={modalIsOpen} onClose={closeModal} info={"crear Materia"} action={action}/>
      </>
    );
    
  }else{

    return (
      <>
        <div className={className()} style={style}>
          <div className="flex flex-col justify-between text-white">
            <h1 className="text-2xl font-bold">{values.name}</h1>
            <div className="flex justify-between">
              <p className="text-sm w-44">Promedio: 3.0</p>
              <IoIosAddCircle className="hover:cursor-pointer" onClick={() => {openModal(); setAction("add")}}/>  
              <CiEdit className="hover:cursor-pointer" onClick={() => {openModal(); setAction("edit")}}/>
              <MdDelete className="hover:cursor-pointer" onClick={() => {openModal(); setAction("delete")}}/>
            </div>
          </div>
          <div className="mt-4">
            {Object.keys(values.Cortes).map((corteName) => (
              <div key={corteName} className="border-t border-gray-700 py-2">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">{corteName}</h2>
                  <p className="text-sm">Porcentaje: {values.Cortes[corteName].porcentaje} %</p>
                </div>
                <ul className="ml-7 text-base">
                  {values.Cortes[corteName].Notas.map((nota, index) => (
                    <li key={index} className="flex">
                      <span className="w-24">Nota {index + 1}</span>  
                      <span className="w-24">{nota[1]} %</span>
                      <span className="text-gray-500">{nota[0]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Modal isOpen={modalIsOpen} onClose={closeModal} info={values} action={action}/>
      </>
    );

  }
}
