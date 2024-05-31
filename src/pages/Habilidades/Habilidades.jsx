import React from "react";
import './style.css';
import imgHtml from '../../assets/html.png';
import imgCss from '../../assets/icon-css.png';
import imgJS from '../../assets/icon-js.png';
import imgBootstrap from '../../assets/icon-bootstrap.png';
import imgReact from '../../assets/react.png';

let arrowLeft = '<';
let arrowRight = '>';

function Habilidades() {
    return (
        <section className="habilidades">

            <div className="container-habilidades">

                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: '100%' }}>


                    <div className="title">
                        <h1>{arrowLeft} Habilidades {arrowRight} </h1>
                    </div>

                    <div className="content-habilidades">

                        <div class="content-cards">

                            <div class="card meuCard pt-1">
                                <div class="tools">
                                    <div class="circle">
                                        <span class="red box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="yellow box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="green box"></span>
                                    </div>
                                </div>

                                <div class="img-card">
                                    <img src={imgHtml} class="card-img-hab" alt="imagem html" title="html" />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">HTML</p>
                                </div>
                            </div>

                            <div class="card meuCard pt-1">
                                <div class="tools">
                                    <div class="circle">
                                        <span class="red box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="yellow box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="green box"></span>
                                    </div>
                                </div>

                                <div class="img-card">
                                    <img src={imgCss} class="card-img-hab" alt="imagem html" title="html" />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">CSS</p>
                                </div>
                            </div>

                            <div class="card meuCard pt-1">

                                <div class="tools">
                                    <div class="circle">
                                        <span class="red box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="yellow box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="green box"></span>
                                    </div>
                                </div>

                                <div class="img-card">
                                    <img src={imgBootstrap} class="card-img-hab" alt="imagem html" title="html" />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Bootstrap</p>
                                </div>
                            </div>

                            <div class="card meuCard pt-1">

                                <div class="tools">
                                    <div class="circle">
                                        <span class="red box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="yellow box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="green box"></span>
                                    </div>
                                </div>

                                <div class="img-card">
                                    <img src={imgJS} class="card-img-hab" alt="imagem html" title="html" />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">JavaScript</p>
                                </div>
                            </div>

                            <div class="card meuCard pt-1">

                                <div class="tools">
                                    <div class="circle">
                                        <span class="red box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="yellow box"></span>
                                    </div>
                                    <div class="circle">
                                        <span class="green box"></span>
                                    </div>
                                </div>

                                <div class="img-card">
                                    <img src={imgReact} class="card-img-hab" alt="imagem html" title="html" />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">ReactJS</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section >
    )
}

export default Habilidades