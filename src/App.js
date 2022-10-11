import React from "react";
import Header from "./Header";

/*
COMPONENTES CRIANDO E USANDO

    -Import React
    - * Função que retorna JSX
        - sempre tem que ter elemento pai
        - React Frgment
    -Exportar Função
    -Para usar o componente :
        - Importar 
        - Usar como tag, exemplo : <App />    
*/
function App() {
    return (
        <>
            <Header titulo= "teste 1" subtitulo= "teste 2" />
        </>
    )
}

export default App