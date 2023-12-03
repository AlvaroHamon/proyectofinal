import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ContenedorTarjeta from "./components/ContenedorTarjetas/ContenedorTarjeta";
import Footer from "./components/Footer/Footer";
import DetalleTarjeta from "./components/Tarjetas/DetalleTarjeta";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tarjetas" element={<ContenedorTarjeta />} />
        <Route path="/tarjetas/:id" element={<DetalleTarjeta />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
