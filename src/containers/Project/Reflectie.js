import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import './Project.scss';
const projectName = "reflectie";

class Reflectie extends Component {
  render() {
    return (
      <div className="Project Reflectie">

        <ResponsiveImage projectName={projectName} imageName="glasplaat-rood-in-fruithoflaan" alt="" title="" className="banner" />

        <section>
          <h1>Reflectie</h1>
          <p>Sinds de inrichting van een pand in de Oude Houtlei in Gent een tijd geleden, zitten wij in het vak "glazen platen ophangen". Het is een uiterst boeiende discipline: gewapend met een reflecterend vlak in één enkele, specifieke kleur verkennen we ruimtes met als doel muren te doorbreken. Figuurlijk dan.</p>
          <p>De kleur en de plaatsing van het vlak zijn de enige factoren waar we iets aan veranderen. Maar de plaat is aanwezig doordat ze de interactie aangaat met de ruimte op zo veel andere manieren. Door de keuze van de wand waar ze komt te hangen: hier staat ze het verst van de voordeur, en lokt ze de blik diep de kamer in. Door de positie op de wand in relatie tot de andere elementen: ze onderstreept de uitzonderlijk hoge deuren, de horizontale asymmetrie spiegelt die van de deur naast zich.</p>
          <p>De weerspiegeling heeft een haast poëtische kwaliteit: vat de ruimte in één kleur, brengt licht en schaduw naar voren, en belangrijk: ze toont dingen vanuit het standpunt van de muur. Ze laat ons toe stukken te nemen en die nog eens te herhalen, verder te trekken, om te draaien. Niet toevallig hangt <em>Reflectie in Rood</em> hoog: zo speelt ze met het houten plafond. Niet toevallig brengt ze net dat witte stukje muur nog in beeld en de stoere railverlichting als je op nét de uiste plaats staat.</p>
        </section>

      </div>
    );
  }
}

export default Reflectie;
