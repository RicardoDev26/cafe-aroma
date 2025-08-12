interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export function PromotionCard({ title, description, imageUrl }: Props) {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg overflow-hidden shadow-lg text-primary-foreground">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-primary-foreground">{title}</h3>
        <p className="text-primary-foreground/90 mb-4 leading-relaxed">
          {description}
        </p>
        <button className="bg-accent text-accent-foreground px-6 py-2 rounded-md hover:bg-accent/90 transition-colors">
          Ver Oferta
        </button>
      </div>
    </div>
  );
}