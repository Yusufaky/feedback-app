import React from "react";
function App() {
  const Titulo = "Titulo do blog";
  const Corpo = "Corpo do blog";
  const comentarios = [
    { id: 1, text: "Comentario 1" },
    { id: 2, text: "Comentario 2" },
    { id: 3, text: "Comentario 3" },
  ];
  return (
    <div className="container">
      <h1>{Titulo}</h1>
      <p>{Corpo}</p>
      <div className="comentarios">
        <h3>comentarios ({comentarios.length})</h3>
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
