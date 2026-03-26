// src/data/fontSites.js
// Add, remove, or edit entries here to manage the repository.

export const CATEGORIES = [
  { id: "all",        label: "All",              icon: "bi-grid-fill" },
  { id: "serif",      label: "Serif",            icon: "bi-type" },
  { id: "sans-serif", label: "Sans-serif",       icon: "bi-fonts" },
  { id: "display",    label: "Display",          icon: "bi-stars" },
  { id: "script",     label: "Script / Handwriting", icon: "bi-pen" },
  { id: "monospace",  label: "Monospace",        icon: "bi-code-slash" },
  { id: "variable",   label: "Variable Fonts",   icon: "bi-sliders" },
];

export const PRICING_TYPES = ["Free", "Paid", "Free + Paid"];

export const FONT_SITES = [
  {
    id: 1,
    name: "FontSquirrel",
    url: "https://www.fontsquirrel.com/",
    description: "Un directorio de fuentes curado con una amplia selección de tipografías para explorar y descargar.",
    featured: true,
  },
  {
    id: 2,
    name: "Google Fonts",
    url: "https://fonts.google.com/",
    description: "La biblioteca de fuentes de código abierto más grande, con muchas tipografías de calidad para web e impresión.",
    featured: true,
  },
  {
    id: 3,
    name: "Adobe Fonts",
    url: "https://fonts.adobe.com/",
    description: "Una amplia biblioteca de fuentes integrada con Adobe Creative Cloud para uso en web y escritorio.",
    featured: true,
  },
  {
    id: 4,
    name: "FontSpring",
    url: "https://www.fontspring.com/",
    description: "Un mercado profesional de fuentes con una gran colección de tipografías para proyectos personales y comerciales.",
    featured: true,
  },
  {
    id: 5,
    name: "DaFont",
    url: "https://www.dafont.com/es/",
    description: "Un sitio popular con muchas fuentes decorativas, temáticas y de exhibición para diferentes estilos.",
    featured: true,
  },
  {
    id: 6,
    name: "FontSource",
    url: "https://fontsource.org/",
    description: "Un recurso de fuentes de código abierto enfocado en facilitar el autoalojamiento y la integración en desarrollo web.",
    featured: true,
  },
];
