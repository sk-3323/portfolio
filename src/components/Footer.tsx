import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-foreground/80 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> by{" "}
            <span className="font-semibold gradient-text">Shubham Kaniya</span>
          </p>
         
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
