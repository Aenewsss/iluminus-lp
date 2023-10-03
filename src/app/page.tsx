import Feedbacks from "@components/components/Feedbacks";
import Footer from "@components/components/Footer";
import HomeTop from "@components/components/HomeTop";
import Differentials from "@components/components/Differentials";
import Contact from "@components/components/Contact";
import WhatsAppFixed from "@components/components/WhatsAppFixed";

export default function Home() {
  return (
    <main>
      <HomeTop />
      <Differentials />
      <Feedbacks />
      <Contact />
      <Footer />
      <WhatsAppFixed />
    </main>
  )
}
