import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Shield size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Rogles Datenschutzberatung
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Datenschutz – klar, verständlich und praxisnah.
          </p>
          
          <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto">
            Als externer Datenschutzbeauftragter sorge ich dafür, dass Ihr Unternehmen 
            DSGVO-konform arbeitet – ohne komplizierte Rechtssprache.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-smooth text-lg px-8 py-3"
            >
              Kostenlose Beratung
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-smooth text-lg px-8 py-3"
            >
              Pakete ansehen
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <CheckCircle size={32} className="text-white mb-4" />
              <h3 className="text-lg font-semibold mb-2">DSGVO-Konformität</h3>
              <p className="text-white/80">Vollständige Compliance mit allen Datenschutzbestimmungen</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users size={32} className="text-white mb-4" />
              <h3 className="text-lg font-semibold mb-2">KMU-Spezialist</h3>
              <p className="text-white/80">Maßgeschneiderte Lösungen für kleine und mittelständische Unternehmen</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield size={32} className="text-white mb-4" />
              <h3 className="text-lg font-semibold mb-2">24h Support</h3>
              <p className="text-white/80">Schnelle Hilfe bei allen Datenschutz-Anliegen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;