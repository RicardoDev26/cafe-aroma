export default function SectionFeatures(){
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-foreground mb-4">¿Por qué elegir Café Aroma?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nos dedicamos a ofrecerte la mejor experiencia cafetera con productos de calidad premium y un servicio excepcional.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary text-3xl">☕</span>
                </div>
                <h3 className="text-foreground mb-3">Café Premium</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Granos seleccionados de las mejores fincas del mundo, tostados artesanalmente para garantizar el sabor perfecto en cada taza.
                </p>
                </div>

                <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary text-3xl">🥐</span>
                </div>
                <h3 className="text-foreground mb-3">Productos Frescos</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Panadería y repostería horneada diariamente con ingredientes naturales y recetas tradicionales que han pasado de generación en generación.
                </p>
                </div>

                <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary text-3xl">🏠</span>
                </div>
                <h3 className="text-foreground mb-3">Ambiente Acogedor</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Un espacio diseñado para que te sientas como en casa, perfecto para trabajar, estudiar o simplemente disfrutar de un momento de tranquilidad.
                </p>
                </div>
            </div>
            </div>
        </section>
    )
}