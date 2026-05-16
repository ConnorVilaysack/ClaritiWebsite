import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import OldVsNew from "@/components/OldVsNew";
import SkinShowcase from "@/components/SkinShowcase";
import ProductIngredients from "@/components/ProductIngredients";
import Features from "@/components/Features";
import SkinAnalysis from "@/components/SkinAnalysis";
import Testimonials from "@/components/Testimonials";

import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <OldVsNew />
        <SkinShowcase />
        <ProductIngredients />
        <Features />
        <SkinAnalysis />
        <Testimonials />

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
