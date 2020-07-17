import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Home__Characters">
      ${characters.amiibo.map(character => `
        <article class="Home__Character-item">
          <img class="Home__Character-image"src="${character['image']}" alt ="${character['name']}">
          <a class="Home__Character-Anchor" href="#/${character['name']}">
            <span class="Home__Character-name">
              <h2>${character['name']}</h2> 
            </span>
          </a> 
        </article>
      `).join('')}
    </div>
  `
  return view;
};

export default Home;