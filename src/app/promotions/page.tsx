"use client";

import { useRouter } from "next/navigation";
import { PromotionCard } from "@/components/cards/PromotionsCard";
import { promotions } from "@/components/constant/promotions";
import ButtonPrincipal from "@/components/buttons/buttonPrincipal";


export default function Promociones() {
    const router = useRouter()

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-foreground mb-4 text-4xl md:text-5xl">Promociones Especiales</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No te pierdas nuestras ofertas exclusivas y promociones especiales. Disfruta de tus productos favoritos con descuentos increíbles y combos únicos.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-foreground mb-3">🔥 Promociones Destacadas</h2>
            <p className="text-muted-foreground">Las ofertas más populares de la semana</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.slice(0, 3).map((promotion) => (
              <div key={promotion.id} className="relative">
                <div className="absolute -top-3 -right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm z-10">
                  {promotion.discount}
                </div>
                <PromotionCard
                  title={promotion.title}
                  description={promotion.description}
                  imageUrl={promotion.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <h2 className="text-foreground mb-3">Todas Nuestras Promociones</h2>
            <p className="text-muted-foreground">Explora todas las ofertas disponibles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {promotions.map((promotion) => (
              <div key={promotion.id} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <PromotionCard
                    title={promotion.title}
                    description={promotion.description}
                    imageUrl={promotion.imageUrl}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{promotion.validUntil}</span>
                      <span className="bg-primary px-2 py-1 rounded text-xs">{promotion.discount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-foreground mb-4">¿Listo para aprovechar estas ofertas?</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Visítanos hoy mismo y no te pierdas estas promociones exclusivas. También puedes contactarnos para más información sobre nuestras ofertas especiales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonPrincipal
              title="Ver Catálogo Completo"
              onClick={() => router.push("/catalog")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            />
            <ButtonPrincipal
              onClick={() => router.push("/contact")}
              title="Contactanos"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/30 rounded-lg p-6">
            <h4 className="text-foreground mb-3">Términos y Condiciones</h4>
            <div className="text-muted-foreground text-sm space-y-2 leading-relaxed">
              <p>• Las promociones no son acumulables entre sí</p>
              <p>• Válido únicamente en nuestras instalaciones</p>
              <p>• Sujeto a disponibilidad de productos</p>
              <p>• Café Aroma se reserva el derecho de modificar estas promociones</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}