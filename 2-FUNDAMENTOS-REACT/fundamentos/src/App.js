import FirstComponent from './componentes/FirstComponent';
import TemplateExpresions from './componentes/TemplateExpressions';
import Events from './componentes/events';

import './App.css';

function App() {
  return (
    <div className="App">
      {/*   any comment     */}
     <h1>PAGINA PAI</h1>
     <FirstComponent/>
     <TemplateExpresions/>
     <Events/>
    </div>
  );
}

export default App;
