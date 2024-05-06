"use client";
import { useState, useContext } from "react";
import { contextData } from "../context/contextData";

export default function Search() {
  const materias = [
    {
      nombre: "matematicas",
      creditos: "1",
    },
    {
      nombre: "fisica",
      creditos: "2",
    },
    {
      nombre: "computacion grafica",
      creditos: "3",
    },
    {
      nombre: "programacion",
      creditos: "4",
    },
    {
      nombre: "estadistica",
      creditos: "5",
    },
    {
      nombre: "estadistica2",
      creditos: "5",
    },
    {
      nombre: "estadistica3",
      creditos: "5",
    },
  ];

  const [count, setCount] = useState(0);
  const { data, setData } = useContext(contextData);

  const classnameTitle =
    "h-[14%] w-full text-4xl flex items-center justify-center";

  const classnameInput =
    count == 0
      ? "items-center bg-white rounded-full border-[3px] border-black h-[1/7] w-[92%] text-[140%] px-8 text-slate-500 cursor-default"
      : "items-center bg-white rounded-full border-[3px] border-black h-[1/7] w-[92%] text-[140%] px-8";

  const classnameBox =
    "items-center bg-white rounded-[20px] border-[3px] border-black h-[70%] w-[92%] text-[130%] my-4 px-4 py-1 overflow-auto no-scrollbar";

  const classnameSubjecList =
    "hover:bg-slate-300 px-4 rounded-full cursor-pointer text-[130%]";

  const selectedSubject = () => {
    if (data[0] == 0) {
      return data[1];
    } else {
      return "No se ha seleccionado";
    }
  };

  return (
    <div className="h-[58vh] mt-[2%] border-4 border-black rounded-2xl bg-[#D9D9D9] basis-full flex flex-col content-between items-center">
      <div className={classnameTitle}>Materia</div>
      <div className={classnameInput}>{selectedSubject()}</div>
      <div className={classnameBox}>
        {data[2].map((materia) => (
          <div
            key={materia.materia}
            onClick={() => (
              setCount(count + 1), setData([data[0], materia.materia, data[2]])
            )}
            className={classnameSubjecList}
          >
            {materia.materia}
          </div>
        ))}
      </div>
    </div>
  );
}
