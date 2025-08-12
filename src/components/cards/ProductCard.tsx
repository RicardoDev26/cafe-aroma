interface Props {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }
  
  export function ProductCard({ name, description, price, imageUrl }: Props) {
    return (
      <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden transition-all duration-200 hover:shadow-md hover:scale-105">
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-foreground">{name}</h3>
          <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-primary font-semibold text-lg">{price}</span>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
              Agregar
            </button>
          </div>
        </div>
      </div>
    );
  }