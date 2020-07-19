import getData from '../utils/getData';

class UI {
  addAmiibo(list) {
    
    const amiiboList = document.getElementById('amiiboList')
    amiiboList.innerHTML = `
      <ul class="Search__container">
        <li class="Search__item">
          <a href="#/${list}">
            <h2 class="Search__character">Character: ${list}</h2>
          </a>
        </li>
      </ul>
    
    `;
    return amiiboList;
  }
}

const getSearch = document.getElementById('form')
getSearch.addEventListener('submit', async e =>{
  
  const search = document.getElementById('search').value.toLowerCase();
  
  const data = await getData();
  // Tomamos la primera letra del input y la convertimos en mayuscula
  const searchCharAt = search.charAt(0).toUpperCase(); 
  // Cortamos los caracteres escritos despues del primero
  const sliceSearch = search.slice(1, search.length);
  // Juntamos el primer caracter con el resto
  const concatSearch = searchCharAt + sliceSearch;
  // Filtramos la lista
  const dataAmiiboFilter = await data.amiibo.filter(character => character.name == concatSearch);
  const list = dataAmiiboFilter[0]['character'];  
  console.log('Some Data: ', search)
  
  const ui = new UI();
  ui.addAmiibo(list)
  e.preventDefault();
});

export default getSearch;