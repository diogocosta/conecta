import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './listProducts.module.css'
import guardRail from './guard-rail.jpg'
import glass from './glass.jpg'
import pedreira from './pedreira.jpg'
import bar from './bar.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const ListProducts = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id="products" className={`${styles.listProducts}`}>
            <div className={`${styles.listProductsContainer}`}>
                <div className={`${styles.listProductsHead}`} data-aos="fade-up">
                    <h3>Os melhores produtos<br />das melhores empresas </h3>
                    {/* <div className={`${styles.listProductsSubline}`}>
                        <p>Devido ao ótimo relacionamento dos sócios da Conecta a Grandes Indústrias, garantimos o melhor
                            atendimento, relacionamento e o preço mais competitivo para atender suas demandas.</p>
                    </div> */}
                </div>
                <div className={`${styles.listProductsItems}`}>
                    <div className={`${styles.listProductsItem}`} data-aos="fade-up">
                        <figure>
                            <Image src={guardRail} alt="Guard<li>ail, Gradil, Cercamento" />
                        </figure>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Guard-rail, Gradil, Cercamento</h4>
                            <p>Somos representantes de um dos maiores players do Brasil, estabelecido em área fabril com mais de 70 mil metros quadrados no Estado de São Paulo. Especialista na fabricação de derivados de aço e com maquinário moderno e atualizado, possui cota nas maiores usinas nacionais. Fabricação e matéria-prima 100% nacional.</p>
                            <ul>
                                <li>Defensas metálicas</li>
                                <li>Defensa metálica semi-maleável</li>
                                <li>Grades e gradis</li>
                                <li>Grades de contenção e demarcação</li>
                                <li>Tubos Industriais (redondo, quadrado, elíptico, retangular)</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.listProductsItem}`} data-aos="fade-up">
                        <figure>
                            <Image src={bar} alt="Guard<li>ail, Gradil, Cercamento" />
                        </figure>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Derivados do aço</h4>
                            <p>Empresa metalúrgica com mais de 8 décadas de experiência, atuando com produtos certificados e auditados. Nossa atuação está focada nos consumidores finais da indústria e da construção civil e nos canais de revenda e distribuição.</p>
                            <ul>
                                <li>Vergalhão barra reta</li>
                                <li>Telas soldadas Tipo Q</li>
                                <li>Treliças</li>
                                <li>Arame recozido torcido/trançado</li>
                                <li>Arames galvanizados</li>
                                <li>Pregos</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.listProductsItem}`} data-aos="fade-up">
                        <figure>
                            <Image src={glass} alt="Vidro" />
                        </figure>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Vidros</h4>
                            <p>Representamos uma tradicional indústria do mercado de construção civil e moveleiro nacional, com quase um século de atuação do mercado.</p>

                            <ul>
                                <li>Laminados</li>
                                <li>Temperados</li>
                                <li>Revestidos Acústicos</li>
                                <li>Anti-bactérias</li>
                                <li>Hidrofóbicos</li>
                                <li>Esmaltados</li>
                                <li>Impressos</li>
                                <li>Texturizados</li>
                                <li>Espelhados</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.listProductsItem}`} data-aos="fade-up">
                        <figure>
                            <Image src={pedreira} alt="Pedreira" />
                        </figure>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Pedreira</h4>
                            <p>Representamos uma das principais produtoras de brita e areia de brita do Brasil. A empresa tem mais de 50 anos de mercado e é fornecedora das principais construtoras e de grandes obras públicas.</p>

                            <ul>
                                <li>Areia de Brita (Fina, média, grossa, prime e seca)</li>
                                <li>Pedrisco (Limpo, fino e misto)</li>
                                <li>Pedra (Tipo 1,2,3,4 e 5)</li>
                                <li>Brita Graduada</li>
                                <li>Brita Graduada tratada com cimento</li>
                                <li>Concreto Compactado a rolo</li>
                                <li>Rachão (Gabião, graduado, do cone e primário)</li>
                                <li>Lastro Ferroviário e Sub Lastro</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}