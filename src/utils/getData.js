const API = 'https://www.amiiboapi.com/api/amiibo/';
const NAME = '?name='
const getData = async (name) => {
  const apiURL = name ? `${API}${NAME}${name}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch(error){
    console.error('Fetch Error', error);
  }

};

export default getData;