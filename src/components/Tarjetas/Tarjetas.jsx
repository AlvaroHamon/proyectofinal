import { Link, useParams } from "react-router-dom";

const Tarjetas = ({ ruta, titulo, descripcion, id }) => {
  const { categoria } = useParams();
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={ruta} className="card-img-top" alt={titulo} title={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <Link className="btn btn-primary" to={`/detalle/${categoria}/${id}`}>
            Ver Mas
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
