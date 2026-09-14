import '../styles/tarjeta.css'
import { useState } from "react"
import Boton from "../componentes/boton.jsx"
import Index from "../componentes/index.jsx"
import Pregunta from "../componentes/pregunta.jsx"


export function Tarjeta({Pregunta, Index, Boton}) {
  return (
    <div className="tarjeta">
      <Index index={index} total={total} />
      <Pregunta pregunta={pregunta} />
      <Boton onClick={onNext}>Siguiente</Boton>
    </div>
  );
}