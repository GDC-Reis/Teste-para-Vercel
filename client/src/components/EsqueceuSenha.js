import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"

import './EsqueceuSenha.css'

const EsqueceuSenha = () => {

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, emailVal);
            alert("Link enviado com sucesso !! Verifique seu e-mail");
            history("/login");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <div className="App">
                <h1 className="title_page_esqueceu_senha">Forgot Password</h1>
                <div className="form_esqueceu_senha">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input name="email" /><br /><br />
                        <button className="btn_esqueceu_senha">Enviar</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default EsqueceuSenha;
