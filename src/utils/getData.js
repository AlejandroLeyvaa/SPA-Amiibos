const API = 'https://www.amiiboapi.com/api/amiibo/';
const getData = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    console.log('Datas: ', data);
    return data;
  } catch(error){
    console.error('Fetch Error', error);
  }

};

export default getData;