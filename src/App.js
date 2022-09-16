import { Routes, Route, Link, NavLink } from "react-router-dom"
import Blog from "./pages/Product";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./pages/Header";
import About from "./pages/About";


function App() {
  return (
<div className="banner">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About/>} />
    </Routes>

    </div>
  )
}
export default App;