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
                    <a href="/">Inicio</a>
                    <a href="/">Sobre nós</a>
                    <a href="/">Produtos</a>
                    <a href="/">Empresas</a>
                    <a href="/" className={`${styles.mainNavButton}`}>Fale Conosco</a>
                </nav>
            </div>
      </header>
    )
};