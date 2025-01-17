import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section from '../components/Section/Section'
import ContentArticle from '../components/Content/ContentArticle'
import ContentImage from '../components/Content/ContentImage'
import TopBanner from '../components/Banner/TopBanner'
import Footer from '../core/components/Navigations/Footer'
import Navbar from '../core/components/Navigations/Navbar'
import ContentMap from '../components/Content/ContentMap'

import { Paragraphs, PetaAnalisisKopi, PetaAnalisisKopi2 } from '../src/contents/article'
import ContributorSection from '../components/Contributors/ContributorSection'
import IntroBanner from '../components/Banner/IntroBanner'
import ScrollToTop from '../core/components/Navigations/ScrollToTop'

const pengantar = Paragraphs[0]
const pengambilandata = Paragraphs[1]
const metodologi = Paragraphs[2]
const hasilanalisis = Paragraphs[3]
const penduduk = Paragraphs[4]
const korelasi = Paragraphs[5]
const Peta = Paragraphs[5]

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />

      <TopBanner />

      <IntroBanner />

      <Section
        isOpen={true}
        title={pengantar.heading.toUpperCase()}
      >
        <ContentArticle
          article={pengantar.content[0].content[0]}
          contentType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[0].content[1]}
          contentType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[0].content[2]}
          contentType={pengantar.content[0].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[0]}
          contentType={pengantar.content[1].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[1]}
          contentType={pengantar.content[1].type}
        />
        <ContentArticle
          article={pengantar.content[1].content[2]}
          contentType={pengantar.content[1].type}
        />
      </Section>

      <Section
        isOpen={true}
        title={"Pengambilan Data".toUpperCase()}
      >
        <ContentArticle
          article={pengambilandata.content[0].content[0]}
          contentType={pengambilandata.content[0].type}
        />

        <ContentArticle
                  article={pengambilandata.content[0].content[1]}
                  contentType={pengambilandata.content[0].type}
                />
        <ContentMap
          mapTitle='Lingkup Analisis Artikel'
          footer='Lingkup Analisis'
          mapProperties={PetaAnalisisKopi}
        />

        
      </Section>

      <Section
        isOpen={true}
        title={"Metodologi".toUpperCase()}
      >
        {/* <ContentArticle
          articleTitle='Data dan Pengambilan Data'
          article='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.'
        /> */}
        <ContentArticle
                  article={metodologi.content[0].content[0]}
                  contentType={metodologi.content[0].type}
                />
        <ContentArticle
                  article={metodologi.content[0].content[1]}
                  contentType={metodologi.content[0].type}
                />
        
        {/* <ContentImage
          imageTitle='Lokasi Studi dan Unit Analisis'
          imageURL='https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
          footer='1. Image'
        /> */}
        {/* <ContentArticle
          articleTitle='Metodologi analisis'
          article='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
        hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
        minus veniam tempora deserunt? Molestiae eius quidem quam repellat.'
        /> */}
      </Section>

      <Section
        isOpen={true}
        title={"Bagaimana Persebaran Toko Kopi di Jakarta?".toUpperCase()}
      >
        <ContentArticle
          articleTitle='Hasil Analisis'
          article={hasilanalisis.content[0].content[0]}
          contentType={hasilanalisis.content[0].type}
        />
        <ContentMap
          mapTitle='Peta Sebaran Kopi'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[1]}
          contentType={hasilanalisis.content[0].type}
        />
        <ContentMap
          mapTitle='Peta Hotspot'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[2]}
          contentType={hasilanalisis.content[0].type}
        />
        
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[3]}
          contentType={hasilanalisis.content[0].type}
        />
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[4]}
          contentType={hasilanalisis.content[0].type}
        />
        <ContentMap
          mapTitle='Peta Aglomerasi'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />
        <ContentArticle
          articleTitle=''
          article={hasilanalisis.content[0].content[5]}
          contentType={hasilanalisis.content[0].type}
        />
        
      </Section>

      <Section
        isOpen={true}
        title={"Penduduk Jakarta Di Mana?".toUpperCase()}
      >

    <ContentArticle
              articleTitle=''
              article={penduduk.content[0].content[0]}
              contentType={penduduk.content[0].type}
            />

<ContentMap
          mapTitle='Peta Penduduk'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />


<ContentArticle
              articleTitle=''
              article={penduduk.content[0].content[1]}
              contentType={penduduk.content[0].type}
            />

<ContentMap
          mapTitle='Peta Penduduk'
          footer='1. Peta Sebaran Kopi Menggunakan Analisis GIS'
          mapProperties={PetaAnalisisKopi}
        />



      </Section>


      <Section
        isOpen={true}
        title={"Hubungan Penduduk & Toko Kopi".toUpperCase()}
      >

<ContentArticle
              articleTitle=''
              article={korelasi.content[0].content[0]}
              contentType={korelasi.content[0].type}
            />


      </Section>

      <ContributorSection />
      <ScrollToTop />
      <Footer />
    </div >
  )
}

export default Home