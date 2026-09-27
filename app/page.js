import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ServicesBar from "@/components/ServicesBar";
import HeaderMobile from "@/components/HeaderMobile";


export default function Home() {
  return (
    <>
      
      <Header />
      <HeaderMobile />

     
      <TopBanner />

      <main>
       
        <Hero />
      </main>

      
      <FloatingButtons />

     
      <ServicesBar />

     
      <Footer />
    </>
  );
}