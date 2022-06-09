import "./App.css";
import Home from "./MyComponents/Home";
import Checkout from "./MyComponents/Checkout";
import Login from "./MyComponents/Login";
import Register from "./MyComponents/Register";
import Payment from "./MyComponents/Payment";
import Detail from "./MyComponents/Detail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="reg" element={<Register />} />
          <Route path="payment" element={<Payment />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </>

    </Router>
  );
}

export default App;
