import type { AppProject } from '../types';

export const projects: AppProject[] = [
  {
    id: 'himnario-adventista',
    name: 'Himnario Adventista',
    description: 'El himnario oficial de la Iglesia Adventista del Séptimo Día en formato digital. Incluye letra, pista y versión cantada de cada himno.',
    longDescription: `El Himnario Adventista es una aplicación de escritorio completa que te permite acceder a todos los himnos del Himnario Adventista del Séptimo Día.

Esta aplicación ha sido desarrollada pensando en las necesidades de iglesias, directores de música, pianistas, y todos los hermanos que desean tener acceso a los himnos de nuestra fe.

La aplicación incluye tres modos de reproducción para cada himno:
• Letra: Visualiza la letra completa del himno
• Cantado: Escucha la versión cantada del himno
• Pista: Reproduce solo la pista instrumental para acompañamiento

Ideal para cultos, estudios bíblicos, momentos devocionales personales, o simplemente para disfrutar de los hermosos himnos de nuestra iglesia.`,
    icon: 'logo-himnario.ico',
    version: '1.6',
    lastUpdate: '2026-01-20',
    category: 'Música & Adoración',
    screenshots: [
      'screenshot-inicio.png',
      'screenshot-reproduccion.png',
    ],
    features: [
      'Todos los himnos del Himnario Adventista oficial',
      'Tres modos: Letra, Cantado y Pista instrumental',
      'Funciona completamente sin conexión a internet',
      'Búsqueda por número, título o fragmento de letra',
      'Interfaz intuitiva y fácil de usar',
      'Compatible con Windows, Linux y próximamente macOS',
    ],
    downloads: [
      {
        platform: 'windows',
        url: '', // Aquí irá el link de MEGA para Windows
        fileName: 'HimnarioAdventista-Setup.exe',
        fileSize: '3.30 GB',
        status: 'available',
      },
      {
        platform: 'linux',
        url: 'https://upeuedupe-my.sharepoint.com/:u:/g/personal/angel_silva_s_upeu_edu_pe/IQDhD9t7NrIGRJN61JIi514HAXCoq3Y5hpDdHvvj1OBdCYw?e=RuAfwn&download=1',
        fileName: 'HimnarioAdventista.AppImage',
        fileSize: '3.28 GB',
        status: 'available',
      },
      {
        platform: 'mac',
        url: '',
        fileName: 'HimnarioAdventista.dmg',
        fileSize: '3.30 GB',
        status: 'coming-soon',
      },
    ],
    status: 'available',
  },
];

export const getProjectById = (id: string): AppProject | undefined => {
  return projects.find(project => project.id === id);
};
