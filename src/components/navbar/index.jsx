import "./style.css";
// import {greenshop-icon} from './greenshop-icon'
function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="greenshop">
            <img src="" alt="greenshop" />
            <h2>GREENSHOP</h2>
          </div>
          <div className="navbar">
            <h1>Home</h1>
            <h1>Shop</h1>
            <h1>Plant Care</h1>
            <h1>Blogs</h1>
          </div>
          <div className="searchbar">
            <img src="./assets/navbar/search-icon" alt="search-icon" />
            <img src="" alt="bascket-iscon" />
            <div className="logout">
              <img src="" alt="log-out" />
              <h1>Login</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
