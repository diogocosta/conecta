import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import conectaSymbol from './conectaSymbol.svg'

export const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footerContainer}`}>
                <div className={`${styles.footerHead}`}>
                    <h3>
                        Quer se conectar com
                        <br />
                        nossas empresas?
                    </h3>
                    <p>
                        <a href="/" className={`${styles.footerButton}`}>Fale Conosco</a>
                    </p>
                </div>

                <div className={`${styles.footerContent}`}>
                    <div className={`${styles.footerAbout}`}>
                        <Image src={conectaSymbol} />
                        <div className={`${styles.footerAboutText}`}>
                            <h4>Conectamos empresas com soluções.</h4>
                            <p><a href="mailto:contato@conectamr.com.br">contato@conectamr.com.br</a></p>
                        </div>
                    </div>
                    <div className={`${styles.footerMenus}`}>
                        <nav className={`${styles.footerMenu}`}>
                            <ul>
                                <li><a href="#welcome">Início</a></li>
                                <li><a href="#about">Sobre nós</a></li>
                                <li><a href="#products">Produtos</a></li>
                                <li><a href="#business">Empresas</a></li>
                            </ul>
                        </nav>
                        <nav className={`${styles.footerMenu}`}>
                            <ul>
                                <li><a href="">Instagram</a></li>
                                <li><a href="">Linkedin</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`${styles.footerCopy}`}>
                    <p>©Conecta MR 2023. Todos os direitos reservados.</p>
                    <p>Design by Yupper Digital ✌️</p>
                </div>
            </div>
        </footer>
    )
}