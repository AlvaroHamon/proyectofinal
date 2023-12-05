import Filtro from "./Filtro";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { handleLogout, filtro, setFiltro } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" activeclassname="activo" to="/">
            Marvel
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {localStorage.getItem("login") && (
                <>
                  <Filtro filtro={filtro} setFiltro={setFiltro} />
                  <li className="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      className="nav-link"
                      activeclassname="activo"
                      onClick={() => handleLogout(false)}
                    >
                      Cerrar Sesión
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
