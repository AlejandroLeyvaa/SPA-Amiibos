import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
  const name = getHash()
  const characters = await getData(name); 
  const view = `
  <section class="Characters__container">
    <div class="Characters__inner">
      <article class="Characters__card">
        <img Character__image src="${characters.amiibo[0]['image']}" alt="${characters.amiibo[0]['name']}">
      </article>
      <article class="Characters__amiibo-stats">
        <h1 class="Character__name">${characters.amiibo[0]['name']}</h1>
        <h3>Character: <span>${characters.amiibo[0]['name']}</span></h3>
        <h3>Game: <span>${characters.amiibo[0]['gameSeries']}</span></h3>
        <h3>Amiibo Series: <span>${characters.amiibo[0]['amiiboSeries']}</span></h3>
      </article>
    </div>
  </section>

  `
  return view;
};

export default Character;