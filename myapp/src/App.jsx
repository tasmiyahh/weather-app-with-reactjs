import './App.css';
import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router> 
    <nav className='nav'>
      <ul>
        <li> <NavLink to="/">Home</NavLink>             </li>
        <li> <NavLink to="about">About</NavLink>       </li>
        <li>  <NavLink to="gallery">Gallery</NavLink></li>
       
      
      </ul>
    </nav>

    <Routes>
  
      
      <Route path="/about" element={<About />} /> 
    
      <Route path="/" element={ <Home />} />

      <Route path='gallery' element={<Gallery/>}/>

    </Routes>
</Router>
);
}

export default App;