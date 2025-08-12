'use client';

import React, { useState } from 'react';
import { initialTestimonials } from '@/components/constant/testimonials';
import { Testimony } from '@/components/constant/testimonials';
import { AddTestimonyCard } from '@/components/cards/AddTestimonyCard';

export default function TestimonionPage() {
  const [testimonios, setTestimonios] = useState<Testimony[]>(initialTestimonials);

  const handleAddTestimony = (newTestimony: Testimony) => {
    setTestimonios(prev => [newTestimony, ...prev]);
  };

  return (
    <main className="bg-background min-h-screen text-gray-900 flex flex-col">
      <section className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {testimonios.map(({ name, position, photo, comment }, i) => (
            <article
              key={i}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {photo ? (
                <img
                  src={photo}
                  alt={`Foto de ${name}`}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-primary"
                  loading="lazy"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 mb-6 flex items-center justify-center text-xl text-gray-600 select-none">
                  ?
                </div>
              )}
              <p className="mb-6 text-black italic text-lg">"{comment}"</p>
              <p className="font-semibold text-xl text-gray-900">{name}</p>
              {position && (
                <p className="mt-1 text-sm text-primary font-medium">{position}</p>
              )}
            </article>
          ))}

          <AddTestimonyCard onAdd={handleAddTestimony} />
        </div>
      </section>
    </main>
  );
}
