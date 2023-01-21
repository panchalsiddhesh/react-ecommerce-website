import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>} ></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
