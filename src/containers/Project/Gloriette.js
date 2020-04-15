import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import MetaImage from '../../components/MetaImage/MetaImage';

import './Project.scss';

const pageTitle = 'Gloriette: een buitenruimte';
const pageDescription = 'Een verdiepingshoge structuur biedt steun aan het wolkendak, omlijst muren van tuin, met vensters tussen wilgenbomen.';

class Gloriette extends Component {
  render() {
    return (
      <div className="Project Gloriette">

        <MetaTags>
          <title>{pageTitle}</title>
          <meta name="title" content={pageTitle} />
          <meta name="description" content={pageDescription} />
          <MetaImage projectName="gloriette" imageName="gloriette1" />
        </MetaTags>

        <ResponsiveImage projectName="gloriette" imageName="gloriette1" alt="" title="" className="banner" />

        <section>
          <h1>Gloriëtte</h1>
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

        <ResponsiveImage projectName="gloriette" imageName="gloriette2" alt="" title="" className="" />
        <ResponsiveImage projectName="gloriette" imageName="gloriette3" alt="" title="" className="" />
        <ResponsiveImage projectName="gloriette" imageName="gloriette4" alt="" title="" className="" />
        <ResponsiveImage projectName="gloriette" imageName="gloriette6" alt="" title="" className="stretch" />
        <ResponsiveImage projectName="gloriette" imageName="gloriette5" alt="" title="" className="" />
        <ResponsiveImage projectName="gloriette" imageName="gloriette7" alt="" title="" className="" />
        <ResponsiveImage projectName="gloriette" imageName="gloriette8" alt="" title="" className="stretch" />

      </div>
    );
  }
}

export default Gloriette;
