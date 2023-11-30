import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'
import conectaSymbol from './symbol_conecta.svg'

export const Hero = () => {
    return (
        <div id="welcome" className={`${styles.hero}`}>
            <div className={`${styles.heroSymbol}`}>
                <Image src={conectaSymbol} alt="Conecta" />
            </div>

            <video autoPlay muted loop id="videoHero" className={`${styles.heroVideo}`}>
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <div className={`${styles.heroWrap}`}>
                <div className={`${styles.heroContainer}`}>
                    <div className={`${styles.heroContent}`}>
                        <h2 className={`${styles.heroContentTitle}`}>Conectando o Brasil</h2>
                        <div className={`${styles.heroContentText}`}>
                            <p>Devido ao ótimo relacionamento dos sócios da Conecta a Grandes Indústrias, garantimos o melhor atendimento, relacionamento e o preço mais competitivo para atender suas demandas.</p>
                            <p><strong>Nossa missão é garantir o melhor preço e atendimento ao nosso cliente.</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};