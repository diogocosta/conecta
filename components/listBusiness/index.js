import React from 'react'
import Image from 'next/image'
import styles from './listBusiness.module.css'
import brandCCR from './brand-ccr.png'
import brandSP from './brand-cidade-sp.png'
import brandConstru from './brand-construcopany.png'
import brandCPTM from './brand-cptm.png'
import brandCury from './brand-cury.png'
import brandDialogo from './brand-dialogo.png'
import brandEngeform from './brand-engeform.png'
import brandLucio from './brand-lucio.png'
import brandMetro from './brand-metro.png'
import brandRacional from './brand-racional.png'
import brandRfm from './brand-rfm.png'
import brandSinaliza from './brand-sinalisa.png'
import brandSinco from './brand-sinco.png'
import brandTrisul from './brand-trisul.png'

export const ListBusiness = () => {
    return (
        <div className={`${styles.listBusiness}`}>
            <div className={`${styles.listBusinessContainer}`}>
                <div className={`${styles.listBusinessHead}`}>
                    <h3>Os melhores produtos<br />das melhores empresas </h3>
                    <div className={`${styles.listBusinessSubline}`}>
                        <p>Devido ao ótimo relacionamento dos sócios da Conecta a Grandes Indústrias, garantimos o melhor
                            atendimento, relacionamento e o preço mais competitivo para atender suas demandas.</p>
                    </div>
                </div>
                <div className={`${styles.listBusinessItems}`}>
                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandCCR} alt="CCR" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandCPTM} alt="CPTM" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandConstru} alt="Construcompany" /></figure>
                    </div>
                    
                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandCury} alt="Cury" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandDialogo} alt="Dialogo" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandEngeform} alt="Engeform" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandLucio} alt="Lucio" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandMetro} alt="Metro" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandRacional} alt="Racional" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandRfm} alt="RFM" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandSP} alt="Cidade de SP" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandSinaliza} alt="Sinaliza" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandSinco} alt="Sinco" /></figure>
                    </div>

                    <div className={`${styles.listBusinessItem}`}>
                        <figure><Image src={brandTrisul} alt="Trisul" /></figure>
                    </div>
                </div>
            </div>
        </div>
    )
}