import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Content from '@/components/Content'
import Gallery from '@/components/Gallery'
import Links from '@/components/Links'
import Contact from '@/components/Contact'

export default function Home() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Introduction/>
      <Content/>
      <Gallery/>
      <Links/>
      <Contact/>
    </>
  )
}
