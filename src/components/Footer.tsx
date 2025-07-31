import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-lg">Rogles Datenschutzberatung</span>
            </div>
            <p className="text-primary-foreground/80">
              Ihr Partner für professionellen Datenschutz. 
              DSGVO-konform, verständlich und praxisnah.
            </p>
            <Badge variant="secondary" className="w-fit">
              <Shield size={14} className="mr-1" />
              DSGVO-konform
            </Badge>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Leistungen</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-white transition-smooth">
                  Externer Datenschutzbeauftragter
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-smooth">
                  DSGVO-Beratung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-smooth">
                  Mitarbeiterschulungen
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-smooth">
                  Datenschutz-Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontakt</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Bastian Rogles</p>
              <p>Händelstraße 33<br />44627 Herne</p>
              <p>
                <a 
                  href="mailto:kontakt.rogles@proton.me"
                  className="hover:text-white transition-smooth"
                >
                  kontakt.rogles@proton.me
                </a>
              </p>
              <p>
                <a 
                  href="tel:01708214796"
                  className="hover:text-white transition-smooth"
                >
                  0170 821 4796
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Rogles Datenschutzberatung. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#impressum" 
                className="text-primary-foreground/80 hover:text-white transition-smooth"
              >
                Impressum
              </a>
              <a 
                href="#datenschutz" 
                className="text-primary-foreground/80 hover:text-white transition-smooth"
              >
                Datenschutzerklärung
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;