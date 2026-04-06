import { Link, NavLink } from 'react-router-dom';
import '../styles/stylesRouter.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/TitansApp"
            >
                Inicio
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/TitansApp/pure"
                    >
                        Puros
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/TitansApp/shifting"
                    >
                        Cambiantes
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/TitansApp/search"
                    >
                        Busqueda
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
