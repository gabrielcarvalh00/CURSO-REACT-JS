import React, { useState } from "react";

function RenderizacaoCondicional() {
  // Inicialização do estado, 'x' como true e 'name' como diferente de "João"
  const [x, setX] = useState(true);
  const [name, setName] = useState("Maria");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}

      {!x && <p>Agora x é falso</p>}
      <h1>If Ternário</h1>

      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}

      <button
        onClick={() => {setName("João"); setX(false);}}>
        Clica aqui
      </button>
    </div>
    
  );
}

export default RenderizacaoCondicional;
