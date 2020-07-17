import logo from '../assets/Amiibo.png'
const Header = () => {
  const view = ` 
    <div class="Header__main">
        <div class="Header-logo">
            <h1>
            <a href="/">
            Amiibos.io
            </a>
            </h1>
        </div>
        <div>
            <img class="Main__logo" src="${logo}" alt="Logo">
        </div>
        <div class="Header-nav">
            <a href="#/about/">
                About
            </a>
        </div>
    </div>
    `;
    return view;
};
  
export default Header;