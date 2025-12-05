import logo from './logo.svg';
import './App.css';
import Mycomponent from './components/Mycomponent';
import { useState } from 'react';
import title from './components/Title.js';
import Title from './components/Title.js';



function App() {

  const [name] = useState("Matheus");
  const redtitle = false;

  return (
    <div className="App">
      {/* CSS GLOBAL*/}
      <h1>React Com CSS "global"</h1>
      {/* CSS DE COMPONENTE*/}
      <Mycomponent></Mycomponent>
      {/* inline */}
      <p>Este é o parágrafo do App.js</p>

      <p style={{ color: 'blue', fontSize: '25px' }}>Este é o parágrafo estilizado com inline</p>

      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>

  

      <h1 className={redtitle ? 'red-title' : 'title'}>Testando CSS de diferentes formas 2</h1> 
     <Title></Title>
    </div>
  );
}

export default App;
