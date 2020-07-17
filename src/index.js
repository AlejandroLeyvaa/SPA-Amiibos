import getData from './utils/getData';
import router from  './routes/index';
import getSearch from './utils/getSearch';

window.addEventListener('load', getData)
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
