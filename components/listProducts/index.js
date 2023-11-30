import React from 'react'
import Image from 'next/image'
import styles from './listProducts.module.css'
import guardRail from './guard-rail.jpg'
import glass from './glass.jpg'
import pedreira from './pedreira.jpg'
import bar from './bar.jpg'

export const ListProducts = () => {
    return (
        <div id="products" className={`${styles.listProducts}`}>
            <div className={`${styles.listProductsContainer}`}>
                <div className={`${styles.listProductsHead}`}>
                    <h3>Os melhores produtos<br />das melhores empresas </h3>
                    {/* <div className={`${styles.listProductsSubline}`}>
                        <p>Devido ao ótimo relacionamento dos sócios da Conecta a Grandes Indústrias, garantimos o melhor
                            atendimento, relacionamento e o preço mais competitivo para atender suas demandas.</p>
                    </div> */}
                </div>
                <div className={`${styles.listProductsItems}`}>
                    <div className={`${styles.listProductsItem}`}>
                        <figure>
                            <Image src={guardRail} alt="Guard-rail, Gradil, Cercamento" />
                        </figure>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Guard-rail, Gradil, Cercamento</h4>
                            <p>Somos representantes do maior player do brasil, área fabril em SP com mais de 70 mil metros
                                quadrados, especialista na fabricação de derivados de aço. Maquinário atualizado e com grande
                                capacidade produtiva. Cota nas maiores usinas nacionais. Possui todas as normas ABNT e certificados
                                de qualidade. Fabricação e matéria prima 100% nacional.</p>
                            <ul>
                                <li>Defensas metálicas</li>
                                <li>Defensa metálica Semi-maleável</li>
                                <li>Grades e gradis</li>
                                <li>Grades de contenção e demarcação</li>
                                <li>Tubos Industriais (redondo, quadrado, elíptico, retangular)</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.listProductsItem}`}>
                        <figure>
                            <Image src={bar} alt="Guard-rail, Gradil, Cercamento" />
                        </figure>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Derivados do aço</h4>
                            <p>Somos representantes do maior player do brasil, área fabril em SP com mais de 70 mil metros quadrados, especialista na fabricação de derivados de aço. Maquinário atualizado e com grande capacidade produtiva. Cota nas maiores usinas nacionais. Possui todas as normas ABNT e certificados de qualidade. Fabricação e matéria prima 100% nacional.</p>
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

                    <div className={`${styles.listProductsItem}`}>
                        <figure>
                            <Image src={glass} alt="Vidro" />
                        </figure>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Vidros</h4>
                            <p>
                                Representamos uma grande indústria com 98 anos de atuação no mercado, já fornecendo para as
                                principais construtoras do Brasil. Atualmente possuem a maior linha de laminação na América Latina.
                                Atuando no mercado de construção civil e moveleiro.</p>

                            <ul>
                                <li>Laminados</li>
                                <li>Temperados</li>
                                <li>RevestidosAcústicos</li>
                                <li>Anti-bactérias</li>
                                <li>Hidrofóbicos</li>
                                <li>Esmaltados</li>
                                <li>Impressos</li>
                                <li>Texturizados</li>
                                <li>Espelhados</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.listProductsItem}`}>
                        <figure>
                            <Image src={pedreira} alt="Pedreira" />
                        </figure>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Pedreira</h4>
                            <p>
                                Representamos uma grande pedreira com 50 anos de atuação no mercado, e que fornece para as
                                principais construtoras do Brasil.</p>

                            <ul>
                                <li>Brita</li>
                                <li>Concreto Compactado A Rolo</li>
                                <li>Rachão</li>
                                <li>Pedra</li>
                                <li>Pedrisco</li>
                                <li>Areia</li>
                                <li>Cascalho</li>
                                <li>Saibro</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}