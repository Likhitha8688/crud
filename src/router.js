import Home from "./home.js"
import About from "./about.js"
import Contacts from "./contacts.js"
import Page from "./page.js"
import Gallery from "./gallery.js"
import "./router.css"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
//import { Link } from "react-router-dom";
function Myfun(){
    return(
        <div>
            <Router>
            <ul>
            <li>React Developer</li>

                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>    
                <li>
                    <Link to="/page">Page</Link>
                </li>
                <button>Join Class</button>
            </ul>
            <Routes>
                <Route path="/home"element={<Home/>}/>
                <Route path="/about"element={<About/>}/>
                <Route path="/contacts"element={<Contacts/>}/>
                <Route path="/page"element={<Page/>}/>
                <Route path="/gallery"element={<Gallery/>}/>
            </Routes>
            </Router>
        </div>
    )
}
export default Myfun;



