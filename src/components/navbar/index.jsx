import "./style.css";
import greenshopIcon from '../../assets/navbar/greenshop-icon.svg'
import searchIcon from '../../assets/navbar/search-icon.svg'
import bascketIcon from '../../assets/navbar/bascket-icon.svg'
import logout from '../../assets/navbar/Logout.svg'


function Navbar() {
  return (
    <header>
      <div className="container1">
        <div className="wrapper1">
          <div className="greenshop">
            <img src={greenshopIcon} alt="greenshop" />
            <h2>GREENSHOP</h2>
          </div>
          <div className="navbar">
            <h1>Home</h1>
            <h1>Shop</h1>
            <h1>Plant Care</h1>
            <h1>Blogs</h1>
          </div>
          <div className="searchbar">
            <img src={searchIcon} alt="search-icon" />
            <img src={bascketIcon} alt="bascket-iscon" />
            <div className="logout">
              <img src={logout} alt="log-out" />
              <h1>Login</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
