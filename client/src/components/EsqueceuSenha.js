import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"

const EsqueceuSenha = () => {

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, emailVal);
            alert("Check your email for password reset instructions");
            history("/login");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <div className="App">
                <h1>Forgot Password</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input name="email" /><br /><br />
                    <button>Reset</button>
                </form>
            </div>
        </div>
    );
}

export default EsqueceuSenha;
