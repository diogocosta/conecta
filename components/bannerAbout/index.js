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
          <p>Idealizada por profissionais atuantes do mercado de construção civil e infraestrutura, a Conecta surgiu para servir como elo entre as mais variadas empresas atuantes de tal setor econômico. A grande parceria existente com alguns dos principais players do mercado nos permite ofertar produtos de forma dinâmica e com excelentes condições comerciais.</p>
          <p>Representamos apenas empresas selecionadas, referências em seus setores de atuação.</p>
          <p>Com o objetivo de garantir a melhor experiência possível aos nossos parceiros comerciais, optamos por apenas ofertar produtos de empresas sólidas, possuidoras de modernos parques industriais e produtos de alta qualidade.</p>
          <p>Por ser um negócio essencialmente de relacionamento comercial, a Conecta tem como uma de suas principais preocupações a qualidade dos produtos oferecidos, motivo pelo qual nos certificamos que os nossos fornecedores possuem todos os certificados de qualidade exigidos.</p>
          <p>Já participamos de relevantes negócios no setor da construção civil e da infraestrutura. Será um prazer contar um pouco mais da nossa história e entender como podemos agregar aos seus negócios.</p>
        </div>

        <div className={`${styles.bannerAboutImage}`}>
          <p>Certificações:</p>
          <Image src={logos} alt="Logos" />
        </div>
      </div>
    </div>
  )
}