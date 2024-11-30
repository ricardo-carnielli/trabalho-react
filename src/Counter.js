import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado.
import './Counter.css'; // Importa o arquivo CSS para estilização.

const Counter = () => {
  const [count, setCount] = useState(0); // Define o estado inicial 'count' como 0 e a função 'setCount' para atualizá-lo.

  return (
    <div className="counter-container"> {/* Contêiner principal do componente. */}
      <h1 data-testid="counter-value">Contador: {count}</h1> {/* Exibe o valor atual do contador. */}
      <div className="button-container"> {/* Contêiner para os botões. */}
        <button
          className="counter-button"
          data-testid="increment-button"
          onClick={() => setCount(count + 1)} // Incrementa o valor do contador ao clicar.
        >
          Incrementar
        </button>
        <button
          className="counter-button"
          data-testid="decrement-button"
          onClick={() => setCount(count - 1)} // Decrementa o valor do contador ao clicar.
        >
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default Counter; // Exporta o componente Counter.
