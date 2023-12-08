import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ContenedorTarjeta from "./components/ContenedorTarjetas/ContenedorTarjeta";
import Footer from "./components/Footer/Footer";
import DetalleTarjeta from "./components/Tarjetas/DetalleTarjeta";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [categoria, setCategoria] = useState("comics");
  const [login, setLogin] = useState(false);
  //manejos para el login
  const handleError = (valor) => {
    setError(valor);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === "" || contrasena === "") {
      setError("Los campos son obligatorios");
    } else {
      setLogin(true);
      localStorage.setItem("login", true);
      localStorage.setItem("usuario", usuario);
      console.log(login);
      navigate(`/contenedor/${categoria}`);
    }
  };

  const handleLogout = () => {
    setError(null);
    setLogin(localStorage.setItem("login", false));
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      <Navbar handleLogout={handleLogout} setCategoria={setCategoria} />
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
        {login && (
          <Route
            path={`/contenedor/:categoria`}
            element={<ContenedorTarjeta />}
          />
        )}

        <Route path={`/detalle/:categoria/:id`} element={<DetalleTarjeta />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
