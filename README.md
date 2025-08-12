# Café Aroma

## Descripción

Café Aroma es una interfaz web responsiva para una cafetería, replicando fielmente el diseño provisto en Figma.  
La página muestra productos y promociones simulados con datos mock, adaptándose perfectamente a dispositivos desktop y mobile.

---

## Tecnologías usadas

- React.js con Next.js
- Tailwind CSS para estilos y diseño responsivo
- Docker (archivo Dockerfile incluido para facilitar la ejecución)
- Datos mock definidos en variables JavaScript para simular productos y promociones

---

## Cómo ejecutar el proyecto

### Requisitos previos

- Node.js (v18 o superior) y npm (si quieres correr local sin Docker)  
- Docker (opcional, para ejecutar con contenedores)  

### Ejecutar localmente sin Docker

```bash
npm install
npm run dev
```
La aplicación estará disponible en http://localhost:3000.

### Ejecutar localmente con docker

 1-.Construir la imagen
```bash
docker build -t cafe-aroma .
```
 2-. Correr el contenedor
 ```bash
docker run -p 3000:3000 cafe-aroma
```