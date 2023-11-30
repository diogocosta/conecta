import React from 'react'
import Image from 'next/image'
import styles from './Banner.module.css'
import logos from './logos.png'

export const BannerAbout = () => {
  return (
    <div id="about" className={`${styles.bannerAbout}`}>
      <div className={`${styles.bannerAboutContainer}`}>
        <div className={`${styles.bannerAboutContent}`}>
          <p>Devido ao ótimo relacionamento dos sócios a grandes Indústrias e Empresas no ramo da Construção Civil e Infraestrutura, nós da Conecta Assessoria e Representações Comerciais garantimos os melhores preços, o melhor atendimento e condições comerciais diferenciadas aos nossos clientes.</p>
          <p>Nossos parceiros são referências em seus setores de atuação e estão no mercado há mais de 40 anos, contam com áreas fabris expressivas localizadas no estado de São Paulo e possuem capacidade para atender em todo território nacional.</p>
          <p>Todas as empresas contam com um moderno parque industrial, maquinário atualizado recentemente e únicos no Brasil, proporcionando alta produtividade e garantindo os melhores preços.</p>
          <p>A qualidade dos produtos oferecidos sempre será nossa maior preocupação, portanto exigimos dos nossos fornecedores todos os certificados de qualidade nacionais, internacionais e um controle de processos rigoroso.</p>
          <p>Já atendemos grandes players do mercado da Construção Civil e Infraestrutura e será um prazer atender a sua empresa também.</p>
        </div>

        <div className={`${styles.bannerAboutImage}`}>
          <p>Certificações:</p>
          <Image src={logos} alt="Logos" />
        </div>
      </div>
    </div>
  )
}