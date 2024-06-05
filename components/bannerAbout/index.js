import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './Banner.module.css'
import logos from './logos.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const BannerAbout = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="about" className={`${styles.bannerAbout}`}>
      <div className={`${styles.bannerAboutContainer}`} data-aos="fade-up">
        <div className={`${styles.bannerAboutContent}`}>
          <p>Idealizada por profissionais atuantes no mercado de construção civil e infraestrutura, a Conecta surgiu para servir como elo entre empresas atuantes de tal setor econômico. A grande parceria existente com alguns dos principais players do mercado nos permite ofertar produtos de forma inteligente e dinâmica.</p>

          <p>Por ser um negócio essencialmente de relacionamento, a Conecta tem como uma de suas principais preocupações, representar apenas empresas selecionadas, referências em seus setores de atuação. Sendo assim, nossos fornecedores possuem todos os certificados de qualidade exigidos.</p>

          <p>Estamos entusiasmados por ter a oportunidade de nos conectar com você. Sua satisfação é nossa principal prioridade e nos dedicamos a fornecer um serviço excepcional, adaptado assuas necessidades.</p>
        </div>

        <div className={`${styles.bannerAboutImage}`}>
          <p>Certificações:</p>
          <Image src={logos} alt="Logos" />
        </div>
      </div>
    </div>
  )
}