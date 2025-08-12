'use client';

import React, { useState } from 'react';
import { Testimony } from '@/components/constant/testimonials';

interface AddTestimonyCardProps {
  onAdd: (newTestimony: Testimony) => void;
}

export function AddTestimonyCard({ onAdd }: AddTestimonyCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState({
    name: '',
    position: '',
    photo: '',
    comment: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddClick = () => {
    setIsAdding(true);
    setError('');
  };

  const handleCancel = () => {
    setIsAdding(false);
    setForm({ name: '', position: '', photo: '', comment: '' });
    setError('');
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.comment.trim()) {
      setError('Por favor ingresa tu nombre y tu reseña.');
      return;
    }

    const newTestimony: Testimony = {
      name: form.name.trim(),
      position: form.position.trim() || undefined,
      photo: form.photo.trim() || undefined,
      comment: form.comment.trim(),
    };

    onAdd(newTestimony);
    setIsAdding(false);
    setForm({ name: '', position: '', photo: '', comment: '' });
    setError('');
  };

  return (
    <article className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow cursor-pointer">
      {!isAdding ? (
        <button
          onClick={handleAddClick}
          aria-label="Agregar nuevo testimonio"
          className="flex flex-col items-center justify-center text-primary hover:text-primary/50 focus:outline-none"
          style={{ maxWidth: '150px', margin: '0 auto' }}
        >
          <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center text-6xl font-extrabold leading-none select-none">
            +
          </div>
          <span className="mt-4 text-lg font-semibold">Agregar tu reseña</span>
        </button>
      ) : (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-full max-w-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left font-medium mb-1">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="position" className="block text-left font-medium mb-1">
              Puesto (opcional)
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={form.position}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-left font-medium mb-1">
              URL de la imagen (opcional)
            </label>
            <input
              type="url"
              id="photo"
              name="photo"
              value={form.photo}
              onChange={handleInputChange}
              placeholder="https://ejemplo.com/tu-photo.jpg"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-left font-medium mb-1">
              Tu reseña <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment"
              name="comment"
              value={form.comment}
              onChange={handleInputChange}
              rows={4}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              required
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm mb-4 text-left">{error}</p>
          )}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-700 focus:outline-none"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-primary hover:bg-primary/80 text-white font-semibold focus:outline-none"
            >
              Enviar
            </button>
          </div>
        </form>
      )}
    </article>
  );
}
