export default function SectionInfoContact() {
    return (
        <section className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-foreground mb-4">Información de Contacto</h3>
            <div className="space-y-4">
            <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">📍</span>
                <div>
                <h4 className="text-foreground">Dirección</h4>
                <p className="text-muted-foreground">Calle Principal 123, Centro Histórico<br/>Ciudad, Estado 12345</p>
                </div>
            </div>
            
            <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">📞</span>
                <div>
                <h4 className="text-foreground">Teléfono</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567<br/>WhatsApp: +1 (555) 987-6543</p>
                </div>
            </div>
            
            <div className="flex items-start space-x-3">
                <span className="text-primary text-xl mt-1">✉️</span>
                <div>
                <h4 className="text-foreground">Email</h4>
                <p className="text-muted-foreground">info@cafearoma.com<br/>reservas@cafearoma.com</p>
                </div>
            </div>
            </div>
        </section>
    )
}