import Head from 'next/head'
import { Onest } from 'next/font/google'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { BannerAbout } from '@/components/bannerAbout'
import { ListProducts } from '@/components/listProducts'
import { ListBusiness } from '@/components/listBusiness'
import { Footer } from '@/components/footer'

const onest = Onest({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Conecta Representações - Conectando o Brasil</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Conecta Representações - Conectando o Brasil" />
        <meta name="description" content="Auxiliamos nossos clientes no desenvolvimento de novas oportunidades de negócios, de forma transparente, com atendimento personalizado e a preços diferenciados." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://conectaglobal.com.br/" />
        <meta property="og:title" content="Conecta Representações - Conectando o Brasil" />
        <meta property="og:description" content="Auxiliamos nossos clientes no desenvolvimento de novas oportunidades de negócios, de forma transparente, com atendimento personalizado e a preços diferenciados." />
        <meta property="og:image" content="https://conectaglobal.com.br/conecta.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://conectaglobal.com.br/" />
        <meta property="twitter:title" content="Conecta Representações - Conectando o Brasil" />
        <meta property="twitter:description" content="Auxiliamos nossos clientes no desenvolvimento de novas oportunidades de negócios, de forma transparente, com atendimento personalizado e a preços diferenciados." />
        <meta property="twitter:image" content="https://conectaglobal.com.br/conecta.jpg" />
      </Head>
      <main className={`${onest.className}`}>
        <Header />
        <Hero />
        <BannerAbout />
        <ListProducts />
        <ListBusiness />
        <Footer />
      </main>
    </>
  )
}
