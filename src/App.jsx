import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ContenedorTarjeta from "./components/ContenedorTarjetas/ContenedorTarjeta";
import Footer from "./components/Footer/Footer";
import DetalleTarjeta from "./components/Tarjetas/DetalleTarjeta";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [filtro, setFiltro] = useState("");
  //manejos para el login
  const handleError = (valor) => {
    setError(valor);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === "" || contrasena === "") {
      setError("Los campos son obligatorios");
      setLogin(false);
    } else {
      setLogin(true);
      localStorage.setItem("login", true);
      localStorage.setItem("usuario", usuario);
      console.log(localStorage.getItem("login"));
      navigate("/contenedor/comics");
    }
  };
  const handleLogout = () => {
    setError(null);
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      <Navbar
        handleLogout={handleLogout}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Login
              usuario={usuario}
              setUsuario={setUsuario}
              contrasena={contrasena}
              setContrasena={setContrasena}
              handleLogin={handleLogin}
              error={error}
              handleError={handleError}
            />
          }
        />
        {login}
        <Route
          path={`/contenedor/comics`}
          element={<ContenedorTarjeta filtro={filtro} />}
        />
        <Route
          path={`/detalle/${filtro}/:id`}
          element={<DetalleTarjeta filtro={filtro} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
