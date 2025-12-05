import logo from './logo.svg';
import './App.css';
import Mycomponent from './components/Mycomponent';

function App() {
  return (
    <div className="App">
      {/* CSS GLOBAL*/}
        <h1>React Com CSS "global"</h1>
        {/* CSS DE COMPONENTE*/}
        <Mycomponent></Mycomponent>
        {/* inline */}
        <p>Este é o parágrafo do App.js</p>

        <p style={{ color: 'blue', fontSize: '25px' }}>Este é o parágrafo estilizado com inline</p>
    </div>
  );
}

export default App;
