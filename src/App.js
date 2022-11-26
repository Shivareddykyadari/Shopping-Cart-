import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Context/Products';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/product" element={<Products/>}/>       */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
