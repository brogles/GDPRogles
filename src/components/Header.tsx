import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-bold text-xl">Rogles Datenschutzberatung</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
            Leistungen
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
            Kontakt
          </a>
          <a href="#impressum" className="text-muted-foreground hover:text-primary transition-smooth">
            Impressum
          </a>
          <a href="#datenschutz" className="text-muted-foreground hover:text-primary transition-smooth">
            Datenschutz
          </a>
          <Button size="sm" className="bg-hero-gradient hover:opacity-90 transition-smooth">
            Beratung anfragen
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container py-4 space-y-4">
            <a href="#services" className="block text-muted-foreground hover:text-primary transition-smooth">
              Leistungen
            </a>
            <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth">
              Kontakt
            </a>
            <a href="#impressum" className="block text-muted-foreground hover:text-primary transition-smooth">
              Impressum
            </a>
            <a href="#datenschutz" className="block text-muted-foreground hover:text-primary transition-smooth">
              Datenschutz
            </a>
            <Button className="w-full bg-hero-gradient hover:opacity-90 transition-smooth">
              Beratung anfragen
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;