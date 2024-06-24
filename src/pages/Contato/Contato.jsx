import React from "react";
import './style.css'

function Contato() {
    return (
        <>
            <div className="container-contato">

                <div className="container">

                    <div className="form-contato">
                        <form action="">
                            <input type="text" placeholder="Nome:" />

                            <input type="text" placeholder="Empresa:" />

                            <input type="text" placeholder="Whatsapp:" />

                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contato