import React from "react";
import './style.css'

function Contato() {
    return (
        <section className="contato">

            <div className="container-contato">

                <div className="container">

                    <div className="title">
                        <h1>Entre em contato</h1>
                    </div>

                    <div className="form-contato">
                        <form action="">
                            <input id="name" type="text" placeholder="Nome:" />

                            <input id="company" type="text" placeholder="Empresa:" />

                            <input id="wpp" type="text" placeholder="Whatsapp:" />

                            <textarea name="" id="message" placeholder="Mensagem:"></textarea>

                            <button id="btn-enviar">Enviar</button>

                        </form>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contato