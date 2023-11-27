import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'
import conectaSymbol from './symbol_conecta.svg'

export const Hero = () => {
    return (
        <div className={`${styles.hero}`}>
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
                        <p>Primum igitur, quid et rationibus conquisitis de quo minus id, de utilitatibus, nihil impedit, quo
                        minus id, de homine sensibus reliqui nihil impedit, quo ignorare vos arbitrer, sed quia non fuisse
                        torquem detraxit hosti et quidem.</p>
                        </div>
                        <p className={`${styles.heroContentButton}`}>
                            <a href="/">Conheça nossas soluções</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};