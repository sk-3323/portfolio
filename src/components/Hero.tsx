import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-shift"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text animate-scale-in">
              Shubham Kaniya 👋
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium">
              MERN Stack Developer
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turning ideas into{" "}
            <span className="text-accent font-semibold">scalable digital experiences</span>
            {" "}with clean code and modern tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <Eye className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
