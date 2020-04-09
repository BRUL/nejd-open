import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Info.scss';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <p>NEJD is het ontwerpatelier met Niels Evenepoel en Jonathan Dequeker, ontstaan na een gezamenlijke opdracht tijdens de studies Interieurarchitectuur aan de Faculteit Interieurarchitectuur Campus Sint-Luca in Gent.</p>
        <p>Het atelier heeft ervaring met het inrichten van leefruimtes, paviljoenen, maatmeubelen, en commerciële opdrachten met projecten in de renovatie- en nieuwbouw sector.</p>
        <p>NEJD ontwerpt sterk doordachte omgevingen door het formuleren van een logica vanuit allerlei uitdagende contexten. Er wordt daarbij gewerkt met formele architecturale kwaliteiten als vorm, textuur, kleur en massa. De ontwerpen zetten zich vaak voort in een grondig en kritisch uitvoeringsproces.</p>
        <p>Aarzel niet om jouw uitdaging <Link to="/Contact">met NEJD te delen</Link>.</p>
      </div>
    );
  }
}

export default Info;
