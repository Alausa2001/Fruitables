import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  Contact,
  Checkout,
  Home,
  Layout,
  NotFound,
  Login,
  Register,
  Shop,
  ShopDetail,
} from "./pages";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="product/:id" element={<ShopDetail />} />
        <Route path="shop" element={<Shop />} />
        <Route element={<AuthOutlet fallbackPath="/login" />}>
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
