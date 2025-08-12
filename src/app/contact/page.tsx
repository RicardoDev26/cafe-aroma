"use client"

import { useRouter } from "next/navigation";
import { ContactForm } from "@/components/sections/ContactForm";
import SectionInfoAdditional from "@/components/sections/SectionInfoAdditional";
import SectionInfoContact from "@/components/sections/SectionInfoContact";
import SectionSchedules from "@/components/sections/SectionSchedules";
import ButtonPrincipal from "@/components/buttons/buttonPrincipal";


export default function Contact() {
    const router = useRouter();

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-foreground mb-4 text-4xl md:text-5xl">Contáctanos</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. ¿Tienes preguntas, sugerencias o quieres hacer una reserva? 
            No dudes en ponerte en contacto con nosotros. ¡Nos encantaría escucharte!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <div className="mb-8">
              <h2 className="text-foreground mb-3">Envíanos un Mensaje</h2>
              <p className="text-muted-foreground leading-relaxed">
                Completa el formulario y te responderemos lo antes posible. Tu opinión es muy importante para nosotros.
              </p>
            </div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            {/* InforContact */}
            <SectionInfoContact />

            {/* Schedules */}
            <SectionSchedules />

            {/* InfoAdditional */}
            <SectionInfoAdditional />

          </div>
        </div>

        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-accent/20 rounded-2xl p-8">
          <h3 className="text-foreground mb-4">¡Te esperamos en Café Aroma!</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Ven a vivir la experiencia completa. Nuestro equipo está listo para atenderte con la mejor sonrisa y el café más delicioso de la ciudad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonPrincipal
              title="Volver al Inicio"
              onClick={() => router.push("/")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            />
            <ButtonPrincipal
              title="Ver Catálogo"
              onClick={() => router.push("/catalog")}
              className="border border-primary text-primary hover:bg-primary/5"
            />
          </div>
        </div>

      </div>
    </div>
  );
}