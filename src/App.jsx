import {useState} from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import './app.scss'


function App() {
  
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
          <Intro />
          <Portfolio />
        </div>
       
    </div>
  );
}

export default App;
