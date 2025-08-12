export function Footer() {
    return (
      <footer className="bg-[#6F4E37] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-primary-foreground mb-4">Café Aroma</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Disfruta de los mejores cafés y productos de panadería en un ambiente acogedor y moderno.
              </p>
            </div>
            
            <div>
              <h4 className="text-primary-foreground mb-4">Horarios</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Lunes - Viernes: 7:00 AM - 9:00 PM</p>
                <p>Sábados: 8:00 AM - 10:00 PM</p>
                <p>Domingos: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-primary-foreground mb-4">Contacto</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>📍 Calle Principal 123, Ciudad</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@cafearoma.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
            <p className="text-primary-foreground/80">
              © 2025 Café Aroma. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
  }