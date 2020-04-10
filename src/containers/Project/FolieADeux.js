import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import './Project.scss';
const projectName = "folieadeux";

class FolieADeux extends Component {
  render() {
    return (
      <div className="Project FolieADeux">

        <ResponsiveImage projectName={projectName} imageName="minimalistic-tables-bench-glass-stairs" alt="" title="" className="banner" />

        <section>
          <h1>Folie à Deux</h1>
          <p>Voor het inrichten van een koffiehuis in een voormalige burgerwoning, was het noodzakelijk om bepaalde elementen uit het interieur te halen en ontbrekende voorzieningen toe te voegen.</p>
          <p>We hebben deze twee handelingen echt als afzonderlijke interventies beschouwd. Ze afzonderlijk ontwerpen verduidelijkte meteen aan welke elementen er waarde wordt gehecht. Het weghalen stond voor ons steeds in functie van het beter laten uitkomen van bestaande delen maar het toont zich ook fysiek in de ruimte, met een massa en vaak ook kleuraanduiding.</p>
        </section>

        <ResponsiveImage projectName={projectName} imageName="green-white-parquet-doors-ceiling" alt="" title="" className="" />
        <ResponsiveImage projectName={projectName} imageName="detail-glass-frame-stairs" alt="" title="" className="" />

        <section>
          <p>Enkel waar het oorspronkelijke interieur voorzieningen miste werden elementen toegevoegd, die dan wel afstand houden van hun omgeving zodat ze een open interactie aangaan met de gebruiker. Het zijn vrijblijvende, haast abstracte volumes die hun gebruik subtiel suggereren. In geen geval zouden ze het oorspronkelijke interieur willen imiteren of beïnvloeden.</p>
          <p>We hopen dat door de manier waarop we weggenomen en toegevoegd hebben, er een omgeving is ontstaan die de uniciteit in ere houdt en uitnodigt om ze ongedwongen te gaan ontdekken.</p>
        </section>

        <ResponsiveImage projectName={projectName} imageName="corner-marble-gray-mirror-frame-mantle" alt="" title="" className="" />
        <ResponsiveImage projectName={projectName} imageName="green-door-ceiling-mirror-curtains" alt="" title="" className="stretch" />

        <ResponsiveImage projectName={projectName} imageName="detail-door-jamb-minimalistic-green-gray-moulures" alt="" title="" className="" />
        <ResponsiveImage projectName={projectName} imageName="couches-bars-flowers" alt="" title="" className="" />
        <ResponsiveImage projectName={projectName} imageName="tables-newspaper-coffee-glass" alt="" title="" className="stretch" />

      </div>
    );
  }
}

export default FolieADeux;
