"use client";
import { createContext } from "react";
import { useState } from "react";

export const contextData = createContext();

export default function FunctionDataContex({ children }) {
  const [data, setData] = useState([0, "No se ha seleccionado", []]);
  return (
    <contextData.Provider value={{ data, setData }}>
      {" "}
      {children}{" "}
    </contextData.Provider>
  );
}
