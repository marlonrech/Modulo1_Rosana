import React from 'react';
import './App.css';
import CapsLock from './components/CapsLock';
import CapsLock2 from './components/CapsLock2';
import CapsLock3 from './components/CapsLock3';
import Soma from './components/Soma';
import Botao from './components/Botao';
import CartaoDePresente from './components/CartaoDePresente';
import Post from './components/Post/Post';

function App() {

  return (
    <div className="App">
      <h2>Componente sem usar props</h2>
      <CapsLock />

      <h2>Componente usando props</h2>
      <CapsLock2 textoEnviado="Eu sou um texto de props" cor="blue" />
      <button>
        <CapsLock2 textoEnviado="Oi, turo bem" legal="!!!"/>
      </button>

      <CapsLock3 legal="!!!">
        Eu sou um texto filho
      </CapsLock3>

      <CartaoDePresente titulo="Parabéns Arthur">
        <CapsLock />
        <div>
          <h5>Seu aniversário é muito importante pra mim.</h5>
        </div>
        <p>Eu gosto de te chamar de Arthur.</p>
        <button>Clique aqui para ganhar seu presente</button>
      </CartaoDePresente>

      <h2>Soma</h2>
      <Soma numero1={10} numero2={20} />

      <h2>Botao</h2>
      <Botao corDeFundo="blue" texto="sou um botão"/>

      <hr />

      <Post 
        imagemDoPerfil="https://avatars.githubusercontent.com/u/45580434?v=4"	
        nomeDoAutor="Rosana Rezende"
        dataDoPost="Hoje"
        fotoDoPost="https://picsum.photos/200/300/?random"
        descricaoDoPost="Eu sou um post"
        curtidoPor="Cleiton"
        numeroDeCurtidas={10}
      />
    </div>
  );
}

export default App;
