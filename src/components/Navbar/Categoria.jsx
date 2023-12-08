import "./filtro.css";
import { NavLink, useNavigate } from "react-router-dom";

const Categoria = ({ setCategoria }) => {
  const navigate = useNavigate();

  const handleCategoria = (valor) => {
    setCategoria(valor);
    navigate(`/contenedor/${valor}`);
  };
  return (
    <div className="contenedorfiltro">
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          aria-current="page"
          to={`/contenedor/comics`}
          onClick={() => {
            handleCategoria("comics");
          }}
        >
          Comics
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          to={`/contenedor/series`}
          onClick={() => {
            handleCategoria("series");
          }}
        >
          Series
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          to={`/contenedor/characters`}
          onClick={() => {
            handleCategoria("characters");
          }}
        >
          Personajes
        </NavLink>
      </li>
    </div>
  );
};

export default Categoria;
