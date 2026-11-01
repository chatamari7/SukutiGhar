import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import ContactPanel from "@/components/ContactPanel";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <main>
        <About />
        <MenuSection />
        <ContactPanel />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
