import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

import './Navbar.css'

const Navbar = () => {

    const {user} = useAuthValue();
    const {logout} = useAuthentication();

    return ( 
        <nav className="navbar">

          <NavLink to="/home" className="brand">Mel <span>Dourado</span></NavLink>

          <div className="nav_teste">

            <ul className="links_link">
                    <li> <NavLink to="/home" className="">Inicio</NavLink></li>

                    <li> <NavLink to="/about" className="">Sobre</NavLink></li>

                    {!user && (
                    
                    <ul className="links_link"> 
                        <li> <NavLink to="/register">Cadastrar</NavLink>
                        </li>

                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        
                    </ul>
                )}
                

                {user && (
                    <ul className="links_link">
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>

                        <li>
                            <NavLink to="/product">Produtos</NavLink>
                        </li>
                        
                    </ul>
                )}

            </ul>
            

          </div>
           
           
            
        </nav>
     );
}
 
export default Navbar;