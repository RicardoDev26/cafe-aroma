"use client"

import { useState } from 'react';


export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 md:p-8">
      <h2 className="mb-6 text-foreground text-center">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label
                htmlFor="name"
                className="
                    flex items-center gap-2 text-sm leading-none font-medium select-none
                    group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50
                    peer-disabled:cursor-not-allowed peer-disabled:opacity-50
                    text-foreground
                "
            >
                Nombre
            </label>
            <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
                className="
                    file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground
                    dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base
                    transition-[color,box-shadow] outline-none
                    file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium
                    disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
                    md:text-sm
                    focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                    bg-input-background border-border focus:border-primary mt-1
                "
            />
        </div>
        
        <div>
            <label
                htmlFor="email"
                className="
                    flex items-center gap-2 text-sm leading-none font-medium select-none
                    group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50
                    peer-disabled:cursor-not-allowed peer-disabled:opacity-50
                    text-foreground
                "
                >
                Correo Electrónico
            </label>
            <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="
                    file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground
                    dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base
                    transition-[color,box-shadow] outline-none
                    file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium
                    disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
                    md:text-sm
                    focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                    mt-1 bg-input-background border-border focus:border-primary
                "
            />
        </div>
        
        <div>
            <label
                htmlFor="message"
                className="
                    flex items-center gap-2 text-sm leading-none font-medium select-none
                    group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50
                    peer-disabled:cursor-not-allowed peer-disabled:opacity-50
                    text-foreground
                "
                >
                Mensaje
            </label>

          <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="
                    placeholder:text-muted-foreground
                    focus-visible:border-ring focus-visible:ring-ring/50
                    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
                    aria-invalid:border-destructive
                    dark:bg-input/30
                    flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2
                    text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px]
                    disabled:cursor-not-allowed disabled:opacity-50
                    md:text-sm mt-1 bg-input-background border-border focus:border-primary
                    resize-none
                "
            />
        </div>
        
        <button
            type="submit"
            className="
                inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all
                disabled:pointer-events-none disabled:opacity-50
                [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
                outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-primary text-primary-foreground hover:bg-primary/90
            "
        >
            Enviar Mensaje
        </button>
      </form>
    </div>
  );
}