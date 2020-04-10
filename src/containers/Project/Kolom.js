import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import './Project.scss';
const projectName = "kolom";

class Kolom extends Component {
  render() {
    return (
      <div className="Project Kolom">

        <ResponsiveImage projectName={projectName} imageName="detail-bottom" alt="" title="" className="banner" />

        <section>
          <h1>Kolom</h1>
          <p>
            <i>Kolom</i> is een vrijstaande boekenkast.<br />
            Ze bestaat uit een moduleerbare houten structuur die op een betonnen sokkel pivoteert. In situ brengt het meubel een bepalende architecturale kwaliteit: de circulaire vorm doet de aanschouwer denken aan een zuil terwijl de horizontale onderverdeling plaats biedt voor het rangschikken van boeken.
          </p>
          <p>Vervaardigd uit Afromosiahout vormt deze opeenvolging van kruisen een ritmische en opwaartse geometrie die de mogelijkheid van een oneindige uitzetting suggereert. Ze rust op een betonnen voetstuk die als pivot en verbinding dient tussen de grond en de houten structuur. Het meubel vormt een microarchitectuur dat functie en vorm verheft tot een nieuwe harmonie.</p>
        </section>

        <ResponsiveImage projectName={projectName} imageName="full-filled-rotating" alt="" title="" className="" />

        <section className="stretch">
          <ResponsiveImage projectName={projectName} imageName="full-empty-straight" alt="" title="" className="" />
          <ResponsiveImage projectName={projectName} imageName="full-filled-straight" alt="" title="" className="" />
          <ResponsiveImage projectName={projectName} imageName="full-filled-rotated" alt="" title="" className="" />
        </section>

        <ResponsiveImage projectName={projectName} imageName="graphic" alt="" title="" className="stretch" />

      </div>
    );
  }
}

export default Kolom;
