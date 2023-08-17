import "./App.css";
// import Header from './Components/Header'
// import MainPage from './Components/MainPage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./Components/Menu";
import Location from "./Components/Location";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        {/* <Header/> */}
        <nav className="header-bar">
          <div>
            <Link to="/">
              <img src="../src/assets/brand_logo.png" alt="Brand Logo" />
            </Link>
          </div>
          <ul className="menu-list">
            <Link to="/menu">
              <li>MENU</li>
            </Link>
            <Link to="/location">
              <li>LOCATION</li>
            </Link>
            <Link to="/about">
              <li>ABOUT</li>
            </Link>
            <Link to="/contact">
              <li>CONTACT</li>
            </Link>
          </ul>
          <div>
            <button className="login-btn">LOGIN</button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
