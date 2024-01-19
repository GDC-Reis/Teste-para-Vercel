import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './Login.css'


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();


    const {login, error: authErro, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")

        const user = {
            email,
            password
        }

        const res = await login(user)

        console.log(user)
    }

    useEffect(() => {
        if(authErro){
            setError(authErro)
        }
    }, [authErro])


    return ( 
        <div>
           
           <h1 className="title_page">Entrar</h1>
           <p className="subtitle_page">Faça o login para realizar compras</p>
            
            <form onSubmit={handleSubmit}>

                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </label>

                

                {!loading && <button className="btn">Entrar</button>}
                {loading && (
                    <button className="btn" disabled>Aguarde...</button>
                )}
                {error && <p className="error">{error}</p>}

            </form>

            <div>
                <NavLink to="/esqueceuSenha" className="esqueceu_senha" id="esqueci_senha">Esqueci minha senha &#128517;</NavLink>
            </div>

        </div>
     );
}
 
export default Login;