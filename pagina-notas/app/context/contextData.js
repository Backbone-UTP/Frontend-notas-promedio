"use client"
import { createContext } from "react"
import { data } from "../components/varibaleDatos"
import { useState } from "react"

export const contextData = createContext()

export default function FunctionDataContex ({children}){ 
    const [data1, cambioData1] = useState(data)
    return  <contextData.Provider value={{data1,cambioData1}} > {children} </contextData.Provider>
}

