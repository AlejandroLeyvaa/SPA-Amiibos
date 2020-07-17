import getData from './getData';

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
  e.preventDefault();

  const search = document.getElementById('search').value.toLowerCase();
  
  const data = await getData();
  // const dataMap = await data.amiibo.map(character => character.name.toLowerCase())
  
  const searchCharAt = search.charAt(0).toUpperCase();
  const sliceSearch = search.slice(1, search.length);
  const concatSearch = searchCharAt + sliceSearch;
  const dataAmiiboFilter = await data.amiibo.filter(character => character.name == concatSearch)
  const list = dataAmiiboFilter[0]['character'];
  // const dataFilter = data.amiibo;
  // const amiiboFilter = dataFilter.filter(x => x.name == concatSearch)
  // console.log('Search: ', searchCharAt)
  // console.log('Slice Search: ', sliceSearch)
  console.log('Some Data: ', search)
  console.log('Concat Search: ', concatSearch)
  console.log('Search Filter: ', dataAmiiboFilter)
  console.log('Search Filter Object: ', dataAmiiboFilter[0]['character'])
  // console.log('Data Map:', dataMap)


  const ui = new UI();
  ui.addAmiibo(list)
});

export default getSearch;