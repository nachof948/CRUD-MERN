import './App.css';
import { ListaUsuario, AgregarUsuario, EditarUsuario } from './indice';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> {/* Mueve BrowserRouter aquí */}
      <div className="App">
        <nav className="navbar position-fixed w-100 navbar-expand-lg " data-bs-theme="dark">
          <div className="container contenedor-nav">
            <a className="navbar-brand" href="/">Sistema para agregar, editar o eliminar usuarios</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/agregarusuario"}>Agregar Usuario</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<ListaUsuario />}></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario />}></Route>
          <Route path='/editarusuario/:_id' element={<EditarUsuario />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
