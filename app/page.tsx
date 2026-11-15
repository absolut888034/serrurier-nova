import { StatusBar } from "@/components/layout/StatusBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { CTABanner } from "@/components/sections/CTABanner"
import { Solidaire } from "@/components/sections/Solidaire"
import { Zones } from "@/components/sections/Zones"
import { Avis } from "@/components/sections/Avis"
import { Methode } from "@/components/sections/Methode"
import { Apropos } from "@/components/sections/Apropos"
import { FAQ } from "@/components/sections/FAQ"
import { ContactForm } from "@/components/sections/ContactForm"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function HomePage() {
  return (
    <>
      <StatusBar />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <CTABanner
          variant="paper"
          eyebrow="Urgence · 24h/24"
          title="Une porte à ouvrir maintenant ?"
          titleAccent="Un appel suffit."
          subtitle="Le serrurier vous répond directement, évalue votre situation et vous annonce un délai et un prix avant tout déplacement."
          secondary={{ label: "Demander un devis écrit", href: "#contact" }}
        />
        <Solidaire />
        <Zones />
        <Avis />
        <CTABanner
          variant="navy"
          eyebrow="Disponible maintenant"
          title="Décrivez votre serrure."
          titleAccent="On vous rappelle dans la minute."
          subtitle="Au téléphone pour les urgences, par formulaire pour un devis détaillé ou un rendez-vous."
          primaryLabel="Appeler maintenant"
          secondary={{ label: "Formulaire de contact", href: "#contact" }}
        />
        <Methode />
        <Apropos />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
