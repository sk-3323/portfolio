import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WhatsAppAgentService from "@/components/WhatsAppAgentService";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <WhatsAppAgentService />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
};

export default Index;
