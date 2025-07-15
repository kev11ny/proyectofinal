import "./components/Formulario.css";
import { useState } from "react";
import logokaeacg from './assets/logokaeacg.png';

export function Formulario({ setUsuario }) {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombreUsuario === "" || contrasena === "") {
      setError(true);
      return;
    }

    setError(false);
    setUsuario(nombreUsuario);
  };

  return (
    <div className="login-layout">
      <img src={logokaeacg} alt="Logo" className="login-logo-left" />

      <section>
        <h1>Login</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button type="submit">Ingresar</button>
        </form>
        {error && <p className="error">Por favor, complete todos los campos.</p>}
      </section>
    </div>
  );
}
