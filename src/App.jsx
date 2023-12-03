import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContenedorTarjeta from "./components/ContenedorTarjetas/ContenedorTarjeta";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tarjetas" element={<ContenedorTarjeta />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
