"use client";

import { useRouter } from "next/navigation";
import ButtonPrincipal from "../buttons/buttonPrincipal";


export default function SectionCTA() {
    const router = useRouter();

    return(
        <section className="py-16 md:py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-foreground mb-4">¿Listo para vivir la experiencia?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Visítanos hoy y descubre por qué somos el café favorito de la ciudad. Tu mesa perfecta te está esperando.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonPrincipal
              title="Contáctanos"
              onClick={() => router.push("/contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 "
            />
            <ButtonPrincipal
              title="Explorar Menú"
              onClick={() => router.push("/catalog")}
              className="border border-primary text-primary hover:bg-primary/5"
            />
          </div>
        </div>
      </section>
    )
}