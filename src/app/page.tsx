import Feedbacks from "@components/components/Feedbacks";
import Footer from "@components/components/Footer";
import HomeTop from "@components/components/HomeTop";
import Differentials from "@components/components/Differentials";
import Contact from "@components/components/Contact";
import WhatsAppFixed from "@components/components/WhatsAppFixed";
import Public from "@components/components/Public";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeTop />
      <div className="bg-black d-flex justify-content-center gap-3 align-items-center py-2">
        <Image width={50} height={50} src="/icons/Location.svg" alt="Ícone de localização" />
        <p className="text-shadow-location mb-0">Válido somente para Brasília e Região</p>
      </div>
      <Differentials />
      <Public />
      <Feedbacks />
      {/* <Contact /> */}
      <Footer />
      <WhatsAppFixed />
    </main>
  )
}
