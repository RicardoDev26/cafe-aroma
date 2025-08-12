export default function SectionSchedules() {
    return (
        <section className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-foreground mb-4">Horarios de Atención</h3>
            <div className="space-y-3">
            <div className="flex justify-between items-center">
                <span className="text-foreground">Lunes - Viernes</span>
                <span className="text-muted-foreground">7:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-foreground">Sábados</span>
                <span className="text-muted-foreground">8:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-foreground">Domingos</span>
                <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm">
                <span className="text-primary">💡</span> Los fines de semana recomendamos hacer reserva previa
                </p>
            </div>
            </div>
        </section>
    )
}