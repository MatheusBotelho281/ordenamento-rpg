import React from 'react'
import { ImgDestaque, Wrapper, DiscordButtom } from './styles'
import { useState } from 'react'

export default function Destaque() {

    const [right, setRight] = useState("200px")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function Open(){
        setRight("250px")
        setTimeout(function(){
            setIsMenuOpen(true);
        }, 100);
    }
    function Close(){
        setRight("200px")
        setTimeout(function(){
            setIsMenuOpen(false);
        }, 20);
    }

    return (
        <>
            <Wrapper>
                <ImgDestaque>
                    <div className="inner-text">
                        <div>
                            <h5>
                                O Despertar do Campeão Gélido
                            </h5>
                            <h2>
                                O Caminho até Aqui.
                            </h2>
                        </div>
                        <div>
                            <div className="vertical-column" />
                            <p className="p-inner-text">
                                Desde a invasão do velho Rei Mago o mundo não foi mais o mesmo...
                            </p>
                            <p style={{ marginTop: "20px" }} className="p-inner-text">
                                E algo grandioso está se aproximando.
                            </p>
                        </div>
                    </div>
                    <DiscordButtom onMouseEnter={Open} onMouseLeave={Close} direita={right}>
                        <img src="./discord.png" />
                        {isMenuOpen && <p>
                            Servidor | Mesa 3
                        </p>}
                    </DiscordButtom>
                </ImgDestaque>

            </Wrapper>
        </>
    )
}
