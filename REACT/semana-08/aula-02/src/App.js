import './App.css';
import CapsLock from './components/CapsLock';
import CapsLock2 from './components/CapsLock2';
import Soma from './components/Soma';
import Botao from './components/Botao';

function App() {

  return (
    <div className="container">
      <h2>Componente sem usar props</h2>
      <CapsLock />

      <h2>Componente usando props</h2>
      <CapsLock2 textoEnviado="Eu sou um texto de props" cor="blue" />
      <button>
        <CapsLock2 textoEnviado="Oi, turo bem" legal="!!!"/>
      </button>

      <h2>Soma</h2>
      <Soma numero1={10} numero2={20} />

      <h2>Botao</h2>
      <Botao corDeFundo="blue" texto="sou um botão"/>
    </div>
  );
}

export default App;
