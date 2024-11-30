import './App.css';
import Counter from './Counter'; // Importando o componente Counter

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao Contador!</h1>
        <Counter /> {/* Exibindo o componente Counter */}
      </header>
    </div>
  );
}

export default App;
