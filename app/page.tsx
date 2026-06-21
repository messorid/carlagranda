import Header          from "@/components/Header";
import Hero            from "@/components/Hero";
import ComoFunciona    from "@/components/ComoFunciona";
import TiposAccidentes from "@/components/TiposAccidentes";
import SobreCarla      from "@/components/SobreCarla";
import Contacto        from "@/components/Contacto";
import Footer          from "@/components/Footer";
import FadeIn          from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero visible de inmediato, sin animación de entrada */}
        <Hero />

        <FadeIn><ComoFunciona /></FadeIn>
        <FadeIn><TiposAccidentes /></FadeIn>
        <FadeIn><SobreCarla /></FadeIn>

        {/* Sección: Testimonios — por implementar */}

        <FadeIn><Contacto /></FadeIn>
      </main>

      <Footer />
    </>
  );
}
