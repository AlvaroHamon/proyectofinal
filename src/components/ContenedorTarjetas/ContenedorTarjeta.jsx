import "./contenedortarjeta.css";
import Tarjetas from "../Tarjetas";
import { useEffect, useState } from "react";
import axios from "axios";

const ContenedorTarjeta = () => {
  const [datos, setDatos] = useState([]);
  const ts = 2;
  const key = "f1213e3b7cd76bc1318e3e426304997c";
  const hash = "a9274bd14ea97ddccee3596b44860c5b";
  const categotia = "comics";
  const url = `http://gateway.marvel.com/v1/public/${categotia}?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
        console.log(datos);
      } catch (error) {
        console.log("hubo un error: ", error);
      }
    };
    solicitud();
  }, []);

  return (
    <>
      <main className="contenedor">
        {/* <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/8/60/6553cca0c0c41/detail.jpg"
          titulo="Card title"
          descripcion="Soy una descripcion"
        /> */}

        {datos.map((item) => (
          <Tarjetas
            key={item.id}
            ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
            titulo={item.title}
            descripcion={item.description}
          />
        ))}
      </main>
    </>
  );
};

export default ContenedorTarjeta;
