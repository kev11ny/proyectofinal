import { useState } from "react";
import "./Home.css";
import bienvenido from '../assets/bienvenido.png';

export function Home({ usuario, cerrarSesion }) {
  const [pantalla, setPantalla] = useState("welcome");
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  const integrantes = [
    { nombre: "Kevin Yalama", correo: "kevin@correo.com", telefono: "123456789", foto: "https://via.placeholder.com/150" },
    { nombre: "Ana López", correo: "ana@correo.com", telefono: "234567890", foto: "https://via.placeholder.com/150" },
    { nombre: "Luis Pérez", correo: "luis@correo.com", telefono: "345678901", foto: "https://via.placeholder.com/150" },
    { nombre: "María Torres", correo: "maria@correo.com", telefono: "456789012", foto: "https://via.placeholder.com/150" },
    { nombre: "José Ramírez", correo: "jose@correo.com", telefono: "567890123", foto: "https://via.placeholder.com/150" },
    { nombre: "Elena Díaz", correo: "elena@correo.com", telefono: "678901234", foto: "https://via.placeholder.com/150" },
  ];

  const mostrarVista = (vista) => {
    setPantalla(vista);
    setPersonaSeleccionada(null);
  };

  return (
    <div className="container">
      {pantalla !== "welcome" && (
        <aside className="sidebar">
          <button className="sidebar-button" onClick={() => mostrarVista("inicio")}>Inicio</button>
          <button className="sidebar-button" onClick={() => mostrarVista("info")}>Información</button>
          <button className="sidebar-button" onClick={cerrarSesion}>Cerrar sesión</button>

        </aside>
      )}

      <main className="main">
        {pantalla === "welcome" && (
  <div className="welcome-section horizontal-welcome">
    <img src={bienvenido} alt="Logo" className="login-bienvenido-left" />

    <div className="welcome-text-container">
      <h1 className="welcome-title">¡HOLA,</h1>
      <h1 className="welcome-subtitle">{usuario.toUpperCase()}!</h1>
      <p className="welcome-text">
        Estamos encantados de tenerte aquí. Explora la información del equipo o navega por el panel.
      </p>
      <button className="welcome-button" onClick={() => setPantalla("inicio")}>
        Comenzar
      </button>
    </div>
  </div>
)}
        {pantalla === "inicio" && (
          <div className="inicio-section">
            <h1>Bienvenido, {usuario}</h1>
            <p>Usa el menú lateral para explorar el sistema.</p>
          </div>
        )}

        {pantalla === "info" && (
          <div className="info-section">
            {personaSeleccionada ? (
              <div className="detalle-persona">
                <img src={personaSeleccionada.foto} alt={personaSeleccionada.nombre} />
                <h3>{personaSeleccionada.nombre}</h3>
                <p>📧 {personaSeleccionada.correo}</p>
                <p>📞 {personaSeleccionada.telefono}</p>
                <button onClick={() => setPersonaSeleccionada(null)}>Volver</button>
              </div>
            ) : (
              <div className="circulos">
                {integrantes.map((persona, index) => (
                  <img
                    key={index}
                    className="circulo"
                    src={persona.foto}
                    alt={persona.nombre}
                    title={persona.nombre}
                    onClick={() => setPersonaSeleccionada(persona)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

