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
        <title>Conecta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main data-scroll-container className={`${onest.className}`}>
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
