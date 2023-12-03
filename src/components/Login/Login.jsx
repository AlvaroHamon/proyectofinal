import "./login.css";

const Login = () => {
  return (
    <main className="contenedorlogin">
      <form className="contenedorformulario">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Usuario
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su Usuario"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Contraseña
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su Contraseña"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button type="submit" className="btn btn-outline-secondary">
          Inicio Sesión
        </button>
      </form>
    </main>
  );
};

export default Login;

// className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}
