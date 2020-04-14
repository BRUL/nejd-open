import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Info.scss';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <h1>NEJD is het ontwerpatelier van Niels Evenepoel en Jonathan Dequeker.</h1>
        <p>Het atelier heeft ervaring met het inrichten van leefruimtes, paviljoenen, maatmeubelen, en commerciële opdrachten met projecten in de renovatie- en nieuwbouwsector.</p>
        <p>NEJD ontwerpt sterk doordachte omgevingen door het formuleren van een logica en het werken met formele architecturale kwaliteiten als vorm, textuur, kleur en massa. De ontwerpen zetten zich vaak voort in een grondig en kritisch uitvoeringsproces.</p>
        <p>Aarzel niet om jouw uitdaging <Link to="/Contact">met NEJD te delen</Link>.</p>
      </div>
    );
  }
}

export default Info;
