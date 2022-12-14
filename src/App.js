import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

// porque no funciona Products?
import { Products } from "./pages/Products";
import { Warning } from "./components/warning/Warning";

function App() {
  return (
    <>
    <Warning/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
