export default function SectionInfoAdditional(){
    return (
        <section className="bg-card rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-foreground mb-4">Información Adicional</h3>
            <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start space-x-3">
                    <span className="text-primary">🚗</span>
                    <p>Estacionamiento disponible en la calle</p>
                </div>
                <div className="flex items-start space-x-3">
                    <span className="text-primary">🚌</span>
                    <p>Transporte público: Líneas 15, 23 y 47 - Parada "Centro"</p>
                </div>
                <div className="flex items-start space-x-3">
                    <span className="text-primary">🚶</span>
                    <p>A 5 minutos caminando desde la plaza principal</p>
                </div>
                <div className="flex items-start space-x-3">
                    <span className="text-primary">♿</span>
                    <p>Acceso para personas con movilidad reducida</p>
                </div>
            </div>
        </section>
    )
}