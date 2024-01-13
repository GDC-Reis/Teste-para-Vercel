import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

import './Navbar.css'

const Navbar = () => {

    const {user} = useAuthValue();
    const {logout} = useAuthentication();

    return ( 
        <nav>
           
           <ul className="nav_link">
                <li><NavLink to="/home">Home</NavLink></li>
           </ul>
            
            
            {!user && (
                
                <ul className="nav_link"> 
                    <li>
                        <NavLink to="/register">Cadastrar</NavLink>
                    </li>
            
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    
                </ul>
            )}
            
            <ul className="nav_link">
                <li><NavLink to="/about">Sobre</NavLink></li>
            </ul>
            
            <ul className="nav_link">
                <li><NavLink to="/product">Produtos</NavLink></li>
            </ul>

            {user && (
                <ul className="nav_link">
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                </ul>
                
            )}

            
            
        </nav>
     );
}
 
export default Navbar;