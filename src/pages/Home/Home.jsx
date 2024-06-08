import React from "react";
import './style.css';
import perfil from '../../assets/perfil.png'


let arrowLeft = '<';
let arrowRight = '>';

function Home() {
    return (
        <section className="home">

            <div className="container">

                <div className="container-home">

                    <div className="title">
                        <h1>{arrowLeft} Sobre {arrowRight}</h1>
                    </div>

                    <div className="container-elements">

                        <div className="content-left">



                            <div className="about">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptate est beatae explicabo animi repellendus quasi placeat harum vel autem, vero adipisci. Maiores eligendi similique delectus quidem magni ratione repellat est odio assumenda mollitia, optio eum distinctio vel. Sit quae vitae quod. Unde voluptas placeat esse in saepe odio, omnis inventore, fugiat quidem laboriosam iure fuga at? Provident voluptates repudiandae perferendis voluptatem quos, enim quis maxime adipisci unde nostrum dignissimos voluptatibus aspernatur iure quaerat pariatur in magni quas cumque! Nesciunt impedit hic quia pariatur alias minima velit cum harum expedita? Culpa dolorum soluta eligendi voluptate quos dolores nostrum quibusdam ipsa.
                                </p>
                            </div>

                            <div className="btns">
                                <button>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                        </svg>Linkedin
                                    </a>
                                </button>

                                <button>
                                    <a href="https://github.com/henriqerocha" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                        </svg>Github
                                    </a>
                                </button>

                                <button>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
                                        </svg>Download CV
                                    </a>
                                </button>

                            </div>

                        </div>

                        <div className="content-right">
                            <img src={perfil} alt="imagem de perfil" />
                        </div>

                    </div>

                    <div className="divisor"></div>

                    <div className="timeline">
                        <div className="timeline-container">
                            <ul>
                                <li className="timeline-item">
                                    <div className="title-timeline">
                                        <h3>DESENVOLVEDOR FRONT-END</h3>
                                    </div>
                                    <div className="instituicao">
                                        <h4>DEVMEDIA</h4>
                                    </div>
                                    <div className="desc-timeline">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugit commodi, rerum facilis quisquam, aliquid beatae eligendi doloremque iusto recusandae iure nesciunt voluptas provident fuga exercitationem vel perferendis ducimus quas molestiae maiores ea, consequuntur iste! Quaerat labore mollitia quos! Odit, officiis esse mollitia minus adipisci maiores temporibus repudiandae cum in!</p>
                                    </div>
                                </li>

                                <li className="timeline-item">
                                    <div className="title-timeline">
                                        <h3>DESENVOLVEDOR FRONT-END</h3>
                                    </div>
                                    <div className="instituicao">
                                        <h4>DEVMEDIA</h4>
                                    </div>
                                    <div className="desc-timeline">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugit commodi, rerum facilis quisquam, aliquid beatae eligendi doloremque iusto recusandae iure nesciunt voluptas provident fuga exercitationem vel perferendis ducimus quas molestiae maiores ea, consequuntur iste! Quaerat labore mollitia quos! Odit, officiis esse mollitia minus adipisci maiores temporibus repudiandae cum in!</p>
                                    </div>
                                </li>

                                <li className="timeline-item">
                                    <div className="title-timeline">
                                        <h3>DESENVOLVEDOR FRONT-END</h3>
                                    </div>
                                    <div className="instituicao">
                                        <h4>DEVMEDIA</h4>
                                    </div>
                                    <div className="desc-timeline">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugit commodi, rerum facilis quisquam, aliquid beatae eligendi doloremque iusto recusandae iure nesciunt voluptas provident fuga exercitationem vel perferendis ducimus quas molestiae maiores ea, consequuntur iste! Quaerat labore mollitia quos! Odit, officiis esse mollitia minus adipisci maiores temporibus repudiandae cum in!</p>
                                    </div>
                                </li>

                                <li className="timeline-item">
                                    <div className="title-timeline">
                                        <h3>DESENVOLVEDOR FRONT-END</h3>
                                    </div>
                                    <div className="instituicao">
                                        <h4>DEVMEDIA</h4>
                                    </div>
                                    <div className="desc-timeline">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugit commodi, rerum facilis quisquam, aliquid beatae eligendi doloremque iusto recusandae iure nesciunt voluptas provident fuga exercitationem vel perferendis ducimus quas molestiae maiores ea, consequuntur iste! Quaerat labore mollitia quos! Odit, officiis esse mollitia minus adipisci maiores temporibus repudiandae cum in!</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Home