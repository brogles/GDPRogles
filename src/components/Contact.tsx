import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📞 Kontakt
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sie haben Fragen oder möchten ein Angebot erhalten? 
            Kontaktieren Sie mich über Ihren bevorzugten Weg.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  Kontaktdaten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Rogles Datenschutzberatung</h3>
                  <p className="text-muted-foreground">Bastian Rogles</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-muted-foreground" />
                    <span>Händelstraße 33</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4"></span>
                    <span>44627 Herne</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-muted-foreground" />
                    <a 
                      href="mailto:kontakt.rogles@proton.me"
                      className="text-primary hover:underline transition-smooth"
                    >
                      kontakt.rogles@proton.me
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-muted-foreground" />
                    <a 
                      href="tel:01708214796"
                      className="text-primary hover:underline transition-smooth"
                    >
                      0170 821 4796
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MessageSquare size={20} className="text-accent" />
                  </div>
                  🔒 Signal Messenger
                </CardTitle>
                <CardDescription>
                  Sichere und verschlüsselte Kommunikation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Für vertrauliche Anfragen nutzen Sie gerne Signal:
                </p>
                <div className="bg-secondary/50 p-4 rounded-lg text-center">
                  <p className="font-mono font-semibold text-lg">GDPR.86</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Scannen Sie den QR-Code oder suchen Sie nach diesem Nutzernamen
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Signal öffnen
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Schnellanfrage</CardTitle>
              <CardDescription>
                Senden Sie mir eine unverbindliche Anfrage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Name *
                  </label>
                  <input 
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Ihr Name"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    E-Mail *
                  </label>
                  <input 
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="ihre@email.de"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Unternehmen
                  </label>
                  <input 
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Nachricht *
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder welches Paket Sie interessiert..."
                  ></textarea>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy"
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <a href="#datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu. *
                  </label>
                </div>
                
                <Button className="w-full bg-hero-gradient hover:opacity-90 transition-smooth">
                  Anfrage senden
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                * Pflichtfelder
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;