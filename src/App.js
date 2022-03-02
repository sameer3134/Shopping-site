
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    
    <BrowserRouter>
     <Header />
     <div><Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/cart" element={<Cart/>} />
     </Routes>  </div>
     <footer className="page-footer font-large blue">
  <div className="footer-copyright text-center py-3 text-primary ">
    <a > :-Designed by Mohd Sameer</a>
  </div>
</footer>
    </BrowserRouter>
  );
}

export default App;
