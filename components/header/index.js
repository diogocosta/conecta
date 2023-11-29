import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import logo from './conecta.svg'

export const Header = () => {

    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.headerContainer}`}>
                <div>
                    <a href="/"><Image src={logo} alt="Conecta" /></a>
                </div>

                <nav className={`${styles.mainNav}`}>
                    <a href="#welcome">Inicio</a>
                    <a href="#about">Sobre nós</a>
                    <a href="#products">Produtos</a>
                    <a href="#business">Empresas</a>
                    <a href="mailto:contato@conectamr.com.br" className={`${styles.mainNavButton}`}>Fale Conosco</a>
                </nav>
            </div>
      </header>
    )
};