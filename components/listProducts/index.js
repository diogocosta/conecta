import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './listProducts.module.css'
import image1a from './foto1a.jpg'
import image1b from './foto1b.jpg'
import image1c from './foto1c.jpg'
import image2a from './foto2a.jpg'
import image2b from './foto2b.jpg'
import image3a from './foto3a.jpg'
import image3b from './foto3b.jpg'
import image4a from './foto4a.jpg'
import image4b from './foto4b.jpg'
import image5a from './foto5a.jpg'
import image5b from './foto5b.jpg'
import image6a from './foto6a.jpg'
import image6b from './foto6b.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'

export const ListProducts = () => {
    useEffect(() => {
        AOS.init();
      }, [])

      console.log(image1a.src)

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
                        <div className={`${styles.listProductsItemSlider}`}>
                            <Fade arrows={false} duration={3000}>
                                <div className={`${styles.listProductsItemSlide}`}>
                                    <div style={{ 'backgroundImage': `url(${image1a.src})` }}></div>
                                </div>
                                <div className={`${styles.listProductsItemSlide}`}>
                                    <div style={{ 'backgroundImage': `url(${image1b.src})` }}></div>
                                </div>
                                <div className={`${styles.listProductsItemSlide}`}>
                                    <div style={{ 'backgroundImage': `url(${image1c.src})` }}></div>
                                </div>
                            </Fade>
                        </div>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Defensas metálicas, grades, gradis e cercamentos</h4>
                            <p>Empresa estabelecida em área fabril com mais de 70 mil metros quadrados na região de Guarulhos, especializada na fabricação de derivados de aço. Conta com um maquinário moderno e atualizado e possui cota nas maiores usinas nacionais. Fabricação e matéria-prima 100% nacional.</p>
                            <ul>
                                <li>Defensas metálicas certificadas</li>
                                <li>Defensa metálica semi-maleável</li>
                                <li>Cercamentos</li>
                                <li>Grades e gradis</li>
                                <li>Grades de contenção e demarcação</li>
                                <li>Pisos metálicos</li>
                                <li>Tubos Industriais (redondo, quadrado, elíptico, retangular)</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.listProductsItem}`} data-aos="fade-up">
                        <Fade arrows={false} duration={3000}>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image2a.src})` }}></div>
                            </div>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image2b.src})` }}></div>
                            </div>
                        </Fade>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Derivados do aço</h4>
                            <p>Empresa metalúrgica com mais de 8 décadas de experiência, atuando com produtos certificados e auditados pelas certificações ISO. Possui área fabril de 40 mil metros quadrados onde estão instalados os galpões de produção e armazenamento. Nossa atuação está focada nos consumidores finais da indústria e da construção civil e nos canais de revenda e distribuição.</p>
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
                        <Fade arrows={false} duration={3000}>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image3a.src})` }}></div>
                            </div>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image3b.src})` }}></div>
                            </div>
                        </Fade>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Estruturas e construções metálicas</h4>
                            <p>Empresa atuante nos ramos de residências, aviação, construção civil, energia, offshore, óleo & gás, petroquímica, transportes e projetos especiais. Conta com tecnologias e com todo um quadro de colaboradores altamente qualificados para oferecer projetos com excelência em engenharia, consultoria, planejamento, fabricação e montagem de estruturas metálicas.</p>

                            <ul>
                                <li>Residencial</li>
                                <li>Comercial</li>
                                <li>Industrial</li>
                                <li>Pontes e Passarelas</li>
                                <li>Óleo e Gás</li>
                                <li>Infraestrutura</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.listProductsItem}`} data-aos="fade-up">
                        <Fade arrows={false} duration={3000}>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image4a.src})` }}></div>
                            </div>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image4b.src})` }}></div>
                            </div>
                        </Fade>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Vidros</h4>
                            <p>Empresa com mais de 100 anos de atuação no mercado de processamento de vidro, oferece a maior diversidade de produtos e atende principalmente o mercado de construção civil. Conta com a maior linha de Laminação do Brasil e possui capacidade para produzir as maiores peças de vidros laminados, multilaminados e temperados laminados.</p>

                            <ul>
                                <li>Laminados</li>
                                <li>Temperados</li>
                                <li>Revestidos Acústicos</li>
                                <li>Texturizados</li>
                                <li>Espelhados</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.listProductsItem}`} data-aos="fade-up">
                        <Fade arrows={false} duration={3000}>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image5a.src})` }}></div>
                            </div>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image5b.src})` }}></div>
                            </div>
                        </Fade>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Pedreira</h4>
                            <p>Empresa destacada no setor de mineração, com mais de 50 anos de atuação, fornecendo agregados de altíssima qualidade para indústria de construção civil no Estado de São Paulo. Recentemente executou grandes investimentos em tecnologia de ponta, se tornando uma das principais produtoras de brita e areia de brita nesse mercado. </p>

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

                    <div className={`${styles.listProductsItem}`} data-aos="fade-up">
                        <Fade arrows={false} duration={3000}>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image6a.src})` }}></div>
                            </div>
                            <div className={`${styles.listProductsItemSlide}`}>
                                <div style={{ 'backgroundImage': `url(${image6b.src})` }}></div>
                            </div>
                        </Fade>
                        <div className={`${styles.listProductsItemText}`}>
                            <h4>Cal e Calcário</h4>
                            <p>Empresa brasileira, fundada em 1949, especializada na produção de calcário, agregados e cal, destinados à siderurgia, indústria química, açúcar e álcool, papel e celulose, mineração, agricultura, construção civil, entre outros. Esses mais de 70 anos de experiência na indústria da cal, são traduzidos em atendimento técnico de excelência e sólido relacionamento com seus clientes, em todo o território nacional.</p>

                            <ul>
                                <li>Cal Virgem Calcítica</li>
                                <li>Cal Virgem Dolomítica</li>
                                <li>Cal Hidratada Calcítica</li>
                                <li>Cal Hidratada Dolomítica</li>
                                <li>Calcário Calcítico</li>
                                <li>Calcário Dolomítico</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}