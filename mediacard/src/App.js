import React from 'react';
import './App.scss';

class App extends React.Component {

  render() {
    const title = 
      <div className="title-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_t2UqNbONstRizykqdVCiIAcRUZ0-kHcxLaajMAyaMvVhVjRMQ"           className="App-img" alt="ejemplo de macetas con tetas" />
        <h1 className="App-title">Arte y tetas en una maceta</h1>
      </div>;

    const paragraph = 
      <div className="content-container">
        <p className="content">
      Las macetetas nacieron para quedarse. Combinan arte y naturaleza en su estado más puro: las domingas, contenedoras innatas de la leche materna, se transforman en contenedoras de plantas, rosas y arbustos. 
        </p>
        <p className="content">
        La magia ocurre través del un trabajo manual con arcilla: el resultado de cada creador y creadora es tan variable como la cantidades de tetas y naturaleza existente. Cada maceteta es única, así como lo es su contenido.
        </p>
      </div>;

    const endContent = 
      <div className="conteiner-heart">
        <p className="content-continue">Leer más...</p>
        <p>54</p>
        <i class="fas fa-heart"></i>
      </div>;

    const generalContainer =   
      <div className="App">
        <div className="App-container">
          {title}
          {paragraph}
          {endContent}
          </div>
      </div>;

    return (
    generalContainer
    );
  }
}

export default App;
