import "./contenedortarjeta.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Tarjetas from "../Tarjetas/Tarjetas";
import { useNavigate, useParams } from "react-router-dom";

const ContenedorTarjeta = () => {
  const navigate = useNavigate();
  const login = localStorage.getItem("login");
  const { categoria } = useParams();
  const [datos, setDatos] = useState([]);
  const ts = 2;
  const key = "f1213e3b7cd76bc1318e3e426304997c";
  const hash = "a9274bd14ea97ddccee3596b44860c5b";
  const url = `https://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
      } catch (error) {
        console.log("hubo un error: ", error);
      }
    };
    solicitud();
  }, [categoria]);

  return (
    <>
      {login ? (
        <main className="contenedor">
          {datos.length === 0 ? (
            <div className="text-center loading">
              <div
                className="spinner-border text-secondary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : (
            datos.map((item) => (
              <Tarjetas
                key={item.id}
                ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                titulo={item.title}
                descripcion={item.description}
                categoria={categoria}
                id={item.id}
              />
            ))
          )}
        </main>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default ContenedorTarjeta;
