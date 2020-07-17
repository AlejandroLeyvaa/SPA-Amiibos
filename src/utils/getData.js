const API = 'https://www.amiiboapi.com/api/amiibo/';
const NAME = '?name='
const getData = async (name) => {
  const apiURL = name ? `${API}${NAME}${name}` : API;
  try {
    console.log(`apiURL: ${apiURL}`)
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log('Datas: ', data);
    return data;
  } catch(error){
    console.error('Fetch Error', error);
  }

};

export default getData;