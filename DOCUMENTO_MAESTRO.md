# Documento Maestro: El Club del Laburo

## 1. Visión General del Proyecto
**El Club del Laburo** es la plataforma institucional y educativa definitiva para potenciar la empleabilidad y el emprendimiento digital. El objetivo de la plataforma es centralizar los servicios ofrecidos por Brandon Candia y Hernán Lamanna, brindando herramientas concretas sobre Inteligencia Artificial, Creación de Contenido y Estrategias de Empleabilidad.

Originalmente nacido como una landing page para el "Future Work Accelerator" (Bootcamp), el proyecto evolucionó para convertirse en el **sitio web oficial** de toda la marca, adoptando una arquitectura multi-página.

## 2. Servicios y Estructura de Navegación
La plataforma está dividida en 5 pilares principales, accesibles desde una barra de navegación global:

1. **Inicio (`/`)**: La página principal institucional que presenta la propuesta de valor de la comunidad, un resumen de los 5 servicios, estadísticas de impacto (seguidores, alumnos) y presentación de los fundadores.
2. **Bootcamp Intensivo (`/bootcamp`)**: El programa original de 5 semanas en vivo, enfocado en IA y creación de contenido para el trabajo.
3. **Curso On Demand (`/curso-on-demand`)**: Un curso asincrónico para aprender a crear contenido y usar IA al propio ritmo. Incluye módulos detallados, métodos de pago (Mercado Pago, Transferencia, WhatsApp) y la promesa de un producto digital final.
4. **Lives en TikTok (`/lives-tiktok`)**: Información sobre los encuentros semanales gratuitos en vivo (Lunes de 11 a 13hs) liderados por Hernán Lamanna.
5. **Streaming Semanal (`/streaming`)**: El show oficial de "El Club del Laburo" emitido por YouTube (Miércoles de 10 a 12hs), conducido por ambos creadores.
6. **Conferencias y Eventos (`/eventos`)**: Un espacio para anunciar encuentros presenciales, conferencias y talleres.

## 3. Identidad Visual y Diseño
El sitio está diseñado con un enfoque **Premium Dark** para transmitir modernidad, tecnología y profesionalismo.

- **Colores Principales:** 
  - Fondo oscuro / Carbón (`bg-charcoal` o `#030711`) en todo el `body`.
  - Color de acento: Coral / Naranja, utilizado para resaltar textos, botones principales y bordes.
  - Colores secundarios: Esmeralda, Rojo, Púrpura (usados como insignias/badges para diferenciar servicios).
- **Tipografías:**
  - *Headings:* **Syne** (Moderna, geométrica, audaz).
  - *Body:* **DM Sans** (Limpia, altamente legible para interfaces).
- **Animaciones:** Integración profunda con `framer-motion` para micro-interacciones, scroll reveals, expansiones de acordeones y transiciones suaves entre páginas.

## 4. Stack Tecnológico
El proyecto es una **Single Page Application (SPA)** moderna, rápida y escalable.

- **Framework Core:** React 18
- **Build Tool:** Vite
- **Lenguaje:** TypeScript
- **Enrutamiento:** React Router DOM (v6/v7)
- **Estilos:** Tailwind CSS (configurado con variables CSS personalizadas en `index.css`)
- **Componentes Base:** Shadcn UI (Radix UI) para componentes accesibles.
- **Iconografía:** Lucide React
- **Animaciones:** Framer Motion
- **Gestión de Estado/Datos:** TanStack Query (React Query)
- **Notificaciones:** Sonner y Toaster

## 5. Perfiles de los Fundadores
- **Brandon Candia (IA · Desarrollo · Automatización):** Fundador y Director Académico de Academia Labora. Desarrollador de IA para Ditobanx. Aporta el conocimiento técnico, el uso de Claude, automatizaciones con n8n y desarrollo No-Code.
- **Hernán Lamanna (Contenido · Marketing · Empleabilidad):** Creador de contenido especializado en empleabilidad con más de 700.000 seguidores (@hernilamanna). Aporta la visión estratégica de marca personal, cómo armar CVs atractivos y destacarse en procesos de selección. Es conferencista y mentor laboral.

## 6. Próximos Pasos y Escalabilidad
El proyecto actualmente es puramente Frontend (sitio estático informativo). En el futuro, su escalabilidad podría incluir:
- **Integración Backend/Base de Datos:** Para capturar leads (ej. inscripciones a la lista de espera de eventos) directamente en una base de datos propia.
- **Campus Virtual Integrado:** Evolucionar hacia un LMS propio donde los alumnos puedan iniciar sesión, consumir el contenido on-demand e interactuar en la comunidad, sin depender de plataformas externas.
- **Sistema de Pagos Nativo:** Integración vía API directa con Mercado Pago o Stripe para checkout embebido en lugar de links de pago externos.
