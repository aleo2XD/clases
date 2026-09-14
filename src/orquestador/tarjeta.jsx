import '../style/Tarjeta.css'
import Boton from '../componentes/boton.jsx'
import Index from '../componentes/index.jsx'
import Pregunta from '../componentes/pregunta.jsx'

export default function Tarjeta({ pregunta = 'Sin texto', index = 0, total = 1, onNext = () => {} }) {
  return (
    <div className="tarjeta">
      <Index index={index} total={total} />
      <Pregunta pregunta={pregunta} />
      <Boton onClick={onNext}>Siguiente</Boton>
    </div>
  )
}