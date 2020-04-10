import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import './Project.scss';
const projectName = "untitled";

class Untitled extends Component {
  render() {
    return (
      <div className="Project Untitled">

        <ResponsiveImage projectName={projectName} imageName="patio-plant-centered" alt="" title="" className="banner" />

        <section>
          <h1>Untitled</h1>
          <h2>Perspectief en licht</h2>
          <p>Een reeks rails waarop vrij spots kunnen geplaatst worden, die denser wordt naar de ingang toe. Dit laat de uitbater toe om zowel gericht als gezoneerde verlichting te gebruiken.</p>
          <p>Het patroon heeft een omgekeerd diepte-effect: de lange ruimte lijkt—bij het naar binnen komen—korter, uitnodigender. Tegelijkertijd worden de rails op één hoogte gemonteerd, waardoor de verschillende plafondniveaus verdwijnen.</p>
        </section>

        <ResponsiveImage projectName={projectName} imageName="minimal-walls-slant" alt="" title="" className="" />
        <ResponsiveImage projectName={projectName} imageName="column-walls-lighting" alt="" title="" className="" />

        <section>
          <h2>Muren, hoeken en massa</h2>
          <p>We hebben rust en eenheid in de ruimte geïntroduceerd door het plaatsen van grote, massieve voorzetwanden. Deze vlakken bieden een houvast, een rechte lijn waartegen de vele hoeken en kanten, insprongen en niveauverschillen zich kunnen oriënteren.</p>
        </section>

        <ResponsiveImage projectName={projectName} imageName="detail-lighting-wall-paint" alt="" title="" className="" />


        <section>
          <h2>Verticaal podium</h2>
          <p>Grote witte vlakken en gerichte verlichting creëren een plaats van vrijheid, van mogelijkheden.</p>
        </section>

        <ResponsiveImage projectName={projectName} imageName="welcome-entrance-lighting-overview" alt="" title="" className="stretch" />

        <section className="stretch">
          <ResponsiveImage projectName={projectName} imageName="minimal-radiator-wall-ceiling-light" alt="" title="" className="" />
          <ResponsiveImage projectName={projectName} imageName="window-frames-grayscale" alt="" title="" className="" />
          <ResponsiveImage projectName={projectName} imageName="thumbnail" alt="" title="" className="" />
        </section>

      </div>
    );
  }
}

export default Untitled;
