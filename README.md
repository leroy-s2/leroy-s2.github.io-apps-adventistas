# 🎵 Apps Adventistas

Sitio web para compartir aplicaciones adventistas gratuitas. Primera aplicación: **Himnario Adventista** para Windows, Linux y Mac (próximamente).

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)
![Vite](https://img.shields.io/badge/Vite-7.3-purple)

## 🚀 Características

- ✝️ Interfaz moderna con temática adventista
- 📱 Diseño responsive para todos los dispositivos
- 🎨 Animaciones suaves y elegantes
- 📦 Sistema de descargas con soporte para MEGA
- 🌐 Preparado para despliegue en GitHub Pages

## 📋 Requisitos

- Node.js 18+
- npm o pnpm

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/leroy-s2/Blog-adventist.git

# Entrar al directorio
cd Blog-adventist

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
├── pages/          # Páginas de la aplicación
│   ├── HomePage.tsx
│   ├── DownloadsPage.tsx
│   ├── ProjectDetailPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── data/           # Datos de los proyectos
│   └── projects.ts
├── types/          # Tipos TypeScript
│   └── index.ts
├── App.tsx
└── index.css
```

## 🔗 Agregar Links de Descarga

Para agregar los links de MEGA, edita el archivo `src/data/projects.ts`:

```typescript
downloads: [
  {
    platform: 'windows',
    url: 'TU_LINK_DE_MEGA_AQUI', // Pegar link de MEGA
    fileName: 'HimnarioAdventista-Setup.exe',
    fileSize: '~80 MB',
    status: 'available',
  },
  // ... más plataformas
]
```

## 🌐 Despliegue en GitHub Pages

El proyecto incluye GitHub Actions para despliegue automático:

1. Ve a **Settings > Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. Haz push a la rama `main` y el sitio se desplegará automáticamente

URL del sitio: `https://leroy-s2.github.io/Blog-adventist/`

## 📦 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Ejecuta el linter |

## ➕ Agregar Nuevos Proyectos

Para agregar más aplicaciones, simplemente añade un nuevo objeto al array `projects` en `src/data/projects.ts`:

```typescript
{
  id: 'nuevo-proyecto',
  name: 'Nombre del Proyecto',
  description: 'Descripción corta',
  // ... resto de propiedades
}
```

## 🙏 Créditos

Desarrollado con ❤️ para la comunidad adventista.

---

*"Todo lo que respira alabe al Señor" - Salmo 150:6*
