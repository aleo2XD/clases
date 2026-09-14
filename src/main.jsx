import Tarjeta from './orquestador/tarjeta.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import docs from "./formalario.json"
createRoot(document.getElementById('root')).render(
    <StrictMode>
        {
            docs.map ((Doc) => (
            <Tarjeta
                        key = {Doc.id}

                    />
            ))
        }


       
    </StrictMode>