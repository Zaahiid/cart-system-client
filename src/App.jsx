import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import { CartProvider } from "./context/CartContext";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>}/>
          </Route>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
