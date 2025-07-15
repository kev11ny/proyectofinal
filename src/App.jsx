import { Formulario } from './Formulario';
import { Home } from './components/Home';
import { useState } from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState("");

  const cerrarSesion = () => {
    setUsuario("");
  };

  return (
    <div className="App">
      {
        usuario.length === 0
          ? <Formulario setUsuario={setUsuario} />
          : <Home usuario={usuario} cerrarSesion={cerrarSesion} />
      }
    </div>
  );
}

export default App;
