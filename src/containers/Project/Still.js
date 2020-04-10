import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import './Project.scss';
const projectName = "still";

class Still extends Component {
  render() {
    return (
      <div className="Project Still">

        <ResponsiveImage projectName={projectName} imageName="top-surface" alt="" title="" className="banner" />

        <section>
          <h1>Still</h1>
          <p><i>Still</i> is altijd in beweging voor de aanschouwer.</p>
          <p>De structuur van rond staal lijkt toch telkens weer te ontsnappen aan zijn begrip ervan. Door rond het object te stappen verandert het beeld, terwijl de onderliggende structuur als een schim zichtbaar wordt.</p>
          <p>Zo complex de structuur, zo eenvoudig het tafelblad; een massief stuk hardhout met nét de juiste afmetingen op nét de juiste hoogte.</p>
        </section>

        <section className="stretch">
          <ResponsiveImage projectName={projectName} imageName="frontal-left" alt="" title="" className="" />
          <ResponsiveImage projectName={projectName} imageName="frontal-right" alt="" title="" className="" />
        </section>

      </div>
    );
  }
}

export default Still;
