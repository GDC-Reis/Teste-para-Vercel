import { useState } from "react";
import './Contato.css'
import emailjs from '@emailjs/browser'

const Contato = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos do formulário !!");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }

        emailjs.send("service_d33lu9f", "template_ewk0n7h", templateParams, "N7d3jmmCydWk0eFBs")
        .then((response) => {
            console.log("EMIAL ENVIADO", response.status, response.text);
            setName('');
            setEmail('');
            setMessage('');
        }, (err) => {
                console.log("ERRO: ", err);
        })
    }


    return ( 
        <div className="container">
            <h1 className="contato">Contato</h1>

            <form className="form" onSubmit={sendEmail}>
                <input
                    className="input"
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    className="input"
                    type="text"
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea
                    className="textarea"
                    placeholder="Digite sua mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <input className="button" type="submit" value="Enviar" />
            </form>
        </div>
     );
}
 
export default Contato;