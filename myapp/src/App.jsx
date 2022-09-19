import './App.css';
import Home from './components/home';
import About from './components/about';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router> 
    <nav className='nav'>
      <ul>
        <li> <Link to="/">Home</Link>             </li>
        <li> <Link to="/about">About</Link>       </li>
       
      
      </ul>
    </nav>

    <Routes>
  
      
      <Route path="/about" element={<About />} /> 
    
      <Route path="/" element={ <Home />} />

    </Routes>
</Router>
);
}

export default App;