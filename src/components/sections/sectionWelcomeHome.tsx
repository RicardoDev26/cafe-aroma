"use client";

import { useRouter } from "next/navigation";
import ButtonPrincipal from "../buttons/buttonPrincipal";

export default function SectionWelcomeHome() {
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/20 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-foreground mb-6 text-4xl md:text-6xl">
          Bienvenido a Café Aroma
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Descubre sabores únicos en cada taza. Café artesanal, productos frescos y el mejor
          ambiente para disfrutar momentos especiales. Desde 1995, creando experiencias
          inolvidables una taza a la vez.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ButtonPrincipal
            title="Ver Catálogo"
            onClick={() => router.push("/catalog")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 "
          />
          <ButtonPrincipal
            title="Ver Promociones"
            onClick={() => router.push("/promotions")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 border-none"
          />
        </div>
      </div>
    </section>
  );
}
