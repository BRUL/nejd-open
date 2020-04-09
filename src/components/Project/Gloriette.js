import React, { Component } from 'react';
import gloriette1 from '../../images/gloriette1.jpg';
import gloriette2 from '../../images/gloriette2.jpg';
import gloriette3 from '../../images/gloriette3.jpg';
import gloriette4 from '../../images/gloriette4.jpg';
import gloriette5 from '../../images/gloriette5.jpg';
import gloriette6 from '../../images/gloriette6.jpg';
import gloriette7 from '../../images/gloriette7.jpg';
import gloriette8 from '../../images/gloriette8.jpg';
import './Project.scss';

class Gloriette extends Component {
  render() {
    return (
      <div className="Project Gloriette">
        <img src={gloriette1} alt="" title="" className="banner" />
        <section>
          <h1>Gloriette</h1>
          <p>Uitgestrekte velden over het glooiende heuvelland brachten een scherpe wind uit het noordwesten.<br />
          Een poreuze structuur vangt ze op en wendt ze af: enkel de hoogste takken getuigen nog van de harde wind.</p>
          <p>Herfst, winter, lente, zomer: de akkers dragen een kleurrijke garderobe.<br />
          Glas, als stilstaand water, vertroebelt het landschapskleed tot vlakken van kleur. Een filter om bij het opkijken in de velden veel meer te zien.</p>
          <p>Een crescendo voor het oog, valt de blik van links naar rechts de verte in naar de stad en haar hoogste torens.<br />
          Een barrière van hardhouten latten golft speels met het landschap mee, eerst hoog, dan geleidelijk lager. Om de kijker het deinzen van de ogen aan te leren en ze daarna te belonen.</p>
          <p>Oude stenen werpen onbekommerd schaduw over verleden en toekomst.<br />
          Water weerkaatst nu een heldere hemel. Het is een oninneembare kalmte die de dorre dromen klaart.<br />
          Een ruimte los en overgaand, tussen weidse wereld en veilig binnen.</p>
          <p>Een verdiepingshoge structuur biedt steun aan het wolkendak, omlijst muren van tuin, met vensters tussen wilgenbomen.<br />
          Een <i>gloriëtte</i>: om geborgen buiten te vertoeven, een anker voor het huis, een uitnodiging om tussen natuur te tafelen.</p>
        </section>
        <img src={gloriette2} alt="" title="" className="" />
        <img src={gloriette3} alt="" title="" className="" />
        <img src={gloriette4} alt="" title="" className="" />
        <img src={gloriette6} alt="" title="" className="stretch" />

        <img src={gloriette5} alt="" title="" className="" />
        <img src={gloriette7} alt="" title="" className="" />
        <img src={gloriette8} alt="" title="" className="stretch" />
      </div>
    );
  }
}

export default Gloriette;
