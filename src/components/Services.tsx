import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  Users, 
  Phone, 
  Calendar,
  Shield,
  AlertCircle
} from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "DSB Start",
      price: "ab 80 €/Monat",
      description: "Der Einstieg in professionellen Datenschutz",
      popular: false,
      features: [
        "Eintragung als externer DSB",
        "Einmalige Bestandsaufnahme", 
        "Jährlicher Empfehlungskatalog",
        "Zugriff auf Musterdokumente"
      ],
      icon: <FileText size={24} />
    },
    {
      name: "DSB Plus",
      price: "ab 160 €/Monat", 
      description: "Erweiterte Beratung und Support",
      popular: true,
      features: [
        "Alle Leistungen aus DSB Start",
        "Beratung (1 Std./Monat inklusive)",
        "Support per E-Mail & Signal", 
        "Prüfung von Datenschutzerklärungen"
      ],
      icon: <Users size={24} />
    },
    {
      name: "DSB Pro+",
      price: "ab 400 €/Monat",
      description: "Vollumfängliche Datenschutz-Betreuung",
      popular: false,
      features: [
        "Alle Leistungen aus DSB Plus",
        "Jährliche Schulung für Mitarbeiter",
        "Vor-Ort- oder Online-Workshop",
        "4 Std. individuelle Beratung pro Monat",
        "24 Std. Reaktionszeit"
      ],
      icon: <Shield size={24} />
    }
  ];

  const additionalServices = [
    {
      name: "AV-Vertragsprüfung",
      price: "420 € netto",
      description: "pro Dokument",
      icon: <FileText size={20} />
    },
    {
      name: "Datenschutzerklärung prüfen & aktualisieren", 
      price: "150 € netto",
      description: "Vollständige Überarbeitung",
      icon: <CheckCircle size={20} />
    },
    {
      name: "Datenschutz-Workshops & Schulungen",
      price: "auf Anfrage",
      description: "Individuelle Schulungskonzepte",
      icon: <Users size={20} />
    },
    {
      name: "Weitere individuelle Leistungen",
      price: "120 € netto",
      description: "Stundensatz für DFSA, Audit, Risikoanalyse",
      icon: <AlertCircle size={20} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📦 Produktpakete
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Externer Datenschutzbeauftragter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie das passende Paket für Ihr Unternehmen. 
            Alle Preise verstehen sich als Netto-Preise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative transition-smooth hover:shadow-card-hover ${
                pkg.popular ? 'ring-2 ring-primary shadow-card-hover' : 'shadow-card'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Beliebt
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {pkg.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground"> (netto)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full mt-6 bg-hero-gradient hover:opacity-90 transition-smooth">
                  Paket wählen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            💼 Zubuchbare Einzelleistungen
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Individuelle Zusatzleistungen
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-smooth">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <div className="text-accent">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-primary">
                    {service.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;