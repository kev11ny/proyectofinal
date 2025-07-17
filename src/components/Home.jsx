import { useState } from "react";
import "./Home.css";
import bienvenido from '../assets/bienvenido.png';
import fono2av from '../assets/fono2av.jpg';
import fg from '../assets/fg.jpg';
import fe from '../assets/fe.jpg';
import fa from '../assets/fa.jpg';
import fc from '../assets/fc.jpg';
import fge from '../assets/fge.jpg';
import faly from '../assets/faly.jpg';
import fk from '../assets/fk.jpg';


export function Home({ usuario, cerrarSesion }) {
  const [pantalla, setPantalla] = useState("welcome");
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  const integrantes = [
    {
      nombre: "Kevin Yalama",
      cedula: "1726849696",
      correo: "kevin.yalama@gmail.com",
      telefono: "0998580245",
      foto: fk,
      titulo: "Bachillaer en ciencias",
      descripcion: "Soy kevin, soy una persona en constante crecimiento, apasinado por el mundo de las tecnologias actualmente estudio desarrollo de software, disfruto enfrentar deafios que me permitan mejorar. Me considero tenaz, amable, respetuoso, siempre busco la forma de aprender mas y superarme dando lo mejor de mi.",
      habilidades: ["Trabajo en equipo", "Resiliente", "Amable", "Respetuoso"],
      educacion: "Colegio Don Bosco- ITQ Desarrollo de Software"
    },
    {
      nombre: "Aaron Lopez",
      cedula: "1726849697",
      correo: "aaron.lopez@gmail.com",
      telefono: "0985245698",
      foto: fa,
      titulo: "Bachiller en Ciencias",
      descripcion: "Soy Aarón, me apaciosa salir a cualquier lugar (la fosh xd) me gusta socializar  y puedo ser un poco serio aveces.",
      habilidades: ["Toma de desiciones", "Adaptabilidad de funciones", "Trabajo en equipo"],
      educacion: " Colegio Cardenal Gonzales Zumarraga- ITQ Desarrollo de Software"
    },
    {
      nombre: "Eric Campoverde",
      cedula: "1726849698",
      correo: "eric.campoverde@gmail.com",
      telefono: "0985632456",
      foto: fe,
      titulo: " Técnico mecánico ",
      descripcion: "Soltero domandor de bandidas chambeador.",
      habilidades: ["Trabajo en equipo", "Lider", ],
      educacion: " U.E. Fiscomisional Pacifico   - ITQ Desarrollo de Software"
    },
    {
      nombre: "Alysson Guaman",
      cedula: "1729123081",
      correo: "alysson.guaman@gmail.com",
      telefono: "0987652413",
      foto: faly,
      titulo: "Bachiller en Ciencias",
      descripcion: "Estudiante de Desarrollo de Software con sólidos conocimientos en desarrollo web, bases de datos y programación orientada a objetos. Apasionada por la tecnología, el aprendizaje continuo y la resolución de problemas mediante soluciones digitales. Con capacidad para trabajar en equipo, adaptarse a nuevos entornos y aportar con responsabilidad y compromiso en proyectos tecnológicos.",
      habilidades: ["Trabajo en equipo", "Responsable", "Autonoma", "Sociable"],
      educacion: "Colegio Giordano Bruno- ITQ Desarrollo de Software"
    },
    {
      nombre: "Cristian Arias",
      cedula: "1726849700",
      correo: "cristian.arias@gmail.com",
      telefono: "099855236421",
      foto: fc,
      titulo: "Administrador de Bases de Datos",
      descripcion: "Gestiona y optimiza el rendimiento de las bases de datos.",
      habilidades: ["MySQL", "PostgreSQL", "MongoDB"],
      educacion: "Sistemas de Información - Universidad ABC"
    },
    {
      nombre: "Geovany Alvaro",
      cedula: "1752772457",
      correo: "geovany.alvaro@gmail.com",
      telefono: "0979163035",
      foto: fge,
      titulo: "Catador de princesas",
      descripcion: "Le entró a todo donde se mueva dinero.",
      habilidades: ["Multifuncional", "Responsable"],
      educacion: "Bachiller en Ciencias - ITQ Desarrollo de Software"
    }
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
          <div
            className="welcome-section horizontal-welcome"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${fono2av})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
            }}
          >
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
                <div
                     className="inicio-section"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${fono2av})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        minHeight: "100vh",
                        color: "white",
                        padding: "20px",
                        textAlign: "center"
                         }}
  >
                        {/* Imagen fg arriba */}
                         <img src={fg} alt="Imagen FG" style={{
                            maxWidth: "800px",
                            width: "90%",
                            height: "auto",
                            borderRadius: "10px",
                            marginBottom: "20px",
                            marginTop: "130px",
                           boxShadow: "0 0 10px rgba(0,0,0,0.7)"
      }}
    />
    
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
                <p>{personaSeleccionada.cedula}</p>
                <p>📧 {personaSeleccionada.correo}</p>
                <p>📞 {personaSeleccionada.telefono}</p>
                <p><strong>{personaSeleccionada.titulo}</strong></p>
                <p>{personaSeleccionada.descripcion}</p>
                <p><strong>Habilidades:</strong></p>
                <ul>
                  {personaSeleccionada.habilidades.map((habilidad, i) => (
                    <li key={i}>✅ {habilidad}</li>
                  ))}
                </ul>
                <p><strong>Educación:</strong> {personaSeleccionada.educacion}</p>
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
