import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'
import conectaSymbol from './symbol_conecta.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Hero = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id="welcome" className={`${styles.hero}`}>
            <div className={`${styles.heroSymbol}`} data-aos="fade-down" data-aos-duration="1000">
                <Image src={conectaSymbol} alt="Conecta" />
            </div>

            <video autoPlay muted loop id="videoHero" className={`${styles.heroVideo}`}>
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <div className={`${styles.heroWrap}`}>
                <div className={`${styles.heroContainer}`}>
                    <div className={`${styles.heroContent}`}>
                        <h2 className={`${styles.heroContentTitle}`} data-aos="fade-up">Conectando o Brasil</h2>
                        <div className={`${styles.heroContentText}`} data-aos="fade-up">
                            <p>Colocamos à disposição dos nossos clientes, um profundo conhecimento da indústria nacional de construção civil e infraestrutura.</p>
                            <p>Nossa missão é auxiliar nossos clientes no desenvolvimento de novas oportunidades de negócios, de forma transparente, com foco em inteligência de preços, agilidade no atendimento e condições comerciais diferenciadas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};