import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Tarjeta from './orquestador/tarjeta.jsx';
import docs from './data/formulario.json';

const preguntas = Array.isArray(docs) ? docs : [];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app">
      {preguntas.map((doc, index) => (
        <Tarjeta
          key={doc.id ?? index}
          pregunta={doc.pregunta ?? 'Sin texto'}
          index={index}
          total={preguntas.length}
          onNext={() => {}}
        />
      ))}
    </div>
  </StrictMode>
);