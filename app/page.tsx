import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Partners from "@/components/partners"
import About from "@/components/about"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingParticles from "@/components/floating-particles"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gray-900 text-white">
      <FloatingParticles />
      <Header />
      <Hero />
      <Services />
      <Partners />
      <About />
      <Features />
      //<Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
