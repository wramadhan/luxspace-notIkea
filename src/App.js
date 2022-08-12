import "../src/assets/css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Details from "./pages/details";
import Cart from "./pages/cart";
import Congratulation from "./pages/congratulation";
import NotFound from "./pages/notfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/categories/:idc" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/congratulation" element={<Congratulation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
