"use client";
import { useContext } from "react";
import { contextData } from "../context/contextData";

export default function Buttons() {
  const { data, setData } = useContext(contextData);
  const classnameButton =
    "mt-2 mb-2 p-1 cursor-pointer bg-white rounded-[8px] text-[130%] border-[1px] border-b-[4px] border-black h-[30%] transition-all border-r-[4px] w-[95%]";

  return (
    <div className="h-[30vh] border-4 border-black rounded-2xl bg-[#D9D9D9] flex content-center">
      <div className="flex flex-col grow justify-center items-center pl-5">
        <button
          className={classnameButton}
          onClick={() => (
            setData([1, "No se ha seleccionado", data[2]]),
            console.log(data[2][0].cortes[0].notas[0].nota)
          )}
        >
          Crear Corte
        </button>
        <button
          className={classnameButton}
          onClick={() => setData([2, "No se ha seleccionado", data[2]])}
        >
          Editar Corte
        </button>
        <button
          className={classnameButton}
          onClick={() => setData([3, "No se ha seleccionado", data[2]])}
        >
          Editar Materia
        </button>
      </div>
      <div className="flex flex-col grow justify-center items-center pr-5">
        <button
          className={classnameButton}
          onClick={() => setData([4, "No se ha seleccionado", data[2]])}
        >
          Crear Nota
        </button>
        <button
          className={classnameButton}
          onClick={() => setData([5, "No se ha seleccionado", data[2]])}
        >
          Editar Nota
        </button>
        <button
          className={classnameButton}
          onClick={() => setData([6, "No se ha seleccionado", data[2]])}
        >
          Crear Materia
        </button>
      </div>
    </div>
  );
}
