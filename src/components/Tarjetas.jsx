const Tarjetas = ({ ruta, titulo, descripcion }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={ruta} className="card-img-top" alt={titulo} title={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
