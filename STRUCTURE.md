# Estructura del Proyecto - Portfolio Nathanael Cedeño

## 📁 Estructura de Carpetas

```
Mi_Portafolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal con metadata SEO
│   ├── page.tsx                 # Página principal (Hero Section)
│   ├── globals.css              # Estilos globales y utilidades Tailwind
│   └── favicon.ico              # Favicon del sitio
│
├── components/                   # Componentes React
│   ├── terminal/
│   │   └── InteractiveTerminal.tsx  # Terminal interactivo funcional
│   └── ui/
│       └── button.tsx           # Componente Button con variantes
│
├── lib/                         # Utilidades y helpers
│   └── utils.ts                 # Función cn() para merge de clases
│
├── types/                       # Definiciones TypeScript
│   └── index.ts                 # Interfaces compartidas
│
├── constants/                   # Datos estáticos
│   ├── projects.ts              # Información de proyectos
│   ├── social.ts                # Enlaces sociales
│   └── tech-stack.ts            # Stack tecnológico
│
├── public/                      # Assets estáticos (imágenes, etc.)
│
└── Configuración
    ├── package.json             # Dependencias del proyecto
    ├── tsconfig.json            # Configuración TypeScript
    ├── tailwind.config.ts       # Configuración Tailwind con temas neón
    ├── next.config.js           # Configuración Next.js
    ├── postcss.config.js        # Configuración PostCSS
    └── .eslintrc.json           # Configuración ESLint
```

## 🎨 Componentes Principales

### 1. InteractiveTerminal (`components/terminal/InteractiveTerminal.tsx`)
Terminal funcional con:
- ✅ Comandos interactivos (`help`, `ls projects`, `cat bio`, etc.)
- ✅ Historial de comandos navegable (Arrow Up/Down)
- ✅ Animaciones fluidas con Framer Motion
- ✅ Diseño neón con bordes animados
- ✅ Scroll automático

### 2. Hero Section (`app/page.tsx`)
Sección principal con:
- ✅ Título cinético con efectos neón
- ✅ Badge de "10x Productivity"
- ✅ Terminal integrado
- ✅ Indicador de scroll animado
- ✅ Fondos con gradientes radiales

## 🚀 Comandos Disponibles en el Terminal

- `help` - Muestra todos los comandos disponibles
- `ls projects` - Lista los proyectos destacados
- `cat bio` - Muestra la biografía
- `cat skills` - Muestra las habilidades técnicas
- `cat contact` - Muestra información de contacto
- `whoami` - Información del desarrollador
- `clear` - Limpia la terminal

## 🎯 Próximos Pasos de Desarrollo

### Fase 2: Secciones Adicionales
1. **Projects Section (Bento Grid)**
   - Crear componente `BentoGrid.tsx`
   - Implementar cards para TuHospedajeRD y VeriStay
   - Agregar efectos hover magnéticos
   - Integrar imágenes y logos

2. **AI Lab Section**
   - Gráficos del flujo de trabajo con IA
   - Visualización de herramientas (Cursor, Prompt Engineering)
   - Métricas de productividad

3. **Social Media Section**
   - Cards para YouTube y TikTok
   - Feed integrado o enlaces
   - Botones con efectos neón

4. **Tech Stack Cloud**
   - Componente interactivo con iconos flotantes
   - Efectos de hover y movimiento
   - Categorización por tipo

5. **Contact Section**
   - Formulario de contacto
   - Enlaces sociales mejorados
   - Animaciones de entrada

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** (App Router)
- **TypeScript** (Tipado estricto)
- **Tailwind CSS** (Estilos utility-first)
- **Framer Motion** (Animaciones)
- **Shadcn/UI** (Componentes base)
- **Radix UI** (Primitivos accesibles)

## 📝 Notas de Desarrollo

- Todos los componentes son TypeScript estrictos
- Mobile-first approach
- SEO optimizado con metadata
- Imágenes en formato WebP/AVIF
- Fuentes locales para mejor rendimiento

## 🎨 Paleta de Colores

- **Fondo**: `#000000` (Negro profundo)
- **Neón Azul**: `#00F0FF`
- **Neón Violeta**: `#B026FF`
- **Texto**: Blanco con variaciones de gris
- **Bordes**: Gradientes neón animados
