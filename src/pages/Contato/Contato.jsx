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
                            <input type="text" placeholder="Nome:" />

                            <input type="text" placeholder="Empresa:" />

                            <input type="text" placeholder="Whatsapp:" />

                            <textarea name="" id="" placeholder="Mensagem:"></textarea>

                            <button>Enviar</button>

                        </form>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contato