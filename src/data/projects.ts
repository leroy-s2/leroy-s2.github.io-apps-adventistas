import type { AppProject } from '../types';

export const projects: AppProject[] = [
  {
    id: 'himnario-adventista',
    name: 'Himnario Adventista',
    description: 'El himnario oficial de la Iglesia Adventista del Séptimo Día en formato digital. Incluye letra, pista y versión cantada de cada himno. Funciona online y offline.',
    longDescription: `El Himnario Adventista es una aplicación de escritorio completa que te permite acceder a todos los himnos del Himnario Adventista del Séptimo Día.

Esta aplicación ha sido desarrollada pensando en las necesidades de iglesias, directores de música, pianistas, y todos los hermanos que desean tener acceso a los himnos de nuestra fe.

🌐 MODO ONLINE/OFFLINE
La aplicación detecta automáticamente si tienes los datos descargados localmente. Si no los tienes, reproduce los himnos directamente desde internet. Esto te permite:
• Usar la app inmediatamente después de instalar (modo online)
• Descargar los datos para uso sin conexión (modo offline)

La aplicación incluye tres modos de reproducción para cada himno:
• Letra: Visualiza la letra completa del himno
• Cantado: Escucha la versión cantada del himno
• Pista: Reproduce solo la pista instrumental para acompañamiento

Ideal para cultos, estudios bíblicos, momentos devocionales personales, o simplemente para disfrutar de los hermosos himnos de nuestra iglesia.`,
    icon: 'logo-himnario.ico',
    version: '2.0.2',
    lastUpdate: '2026-02-04',
    category: 'Música & Adoración',
    appType: 'online-offline',
    screenshots: [
      'screenshot-inicio.png',
      'screenshot-reproduccion.png',
    ],
    features: [
      'Todos los himnos del Himnario Adventista oficial',
      'Tres modos: Letra, Cantado y Pista instrumental',
      'Funciona online (streaming) y offline (datos locales)',
      'Instalador ligero - descarga la data solo si la necesitas',
      'Búsqueda por número, título o fragmento de letra',
      'Interfaz intuitiva y fácil de usar',
      'Compatible con Windows y Linux',
    ],
    downloads: [
      {
        platform: 'windows',
        url: 'https://upeuedupe-my.sharepoint.com/:u:/g/personal/angel_silva_s_upeu_edu_pe/IQBzp4EaqT6YQIn3u1EMZMTSAd4EqGZ_yDT6MEG5nvyiH8E?e=5BfCeX&download=1',
        fileName: 'HimnarioAdventista-Setup.exe',
        fileSize: '112,9 MB',
        status: 'available',
      },
      {
        platform: 'linux',
        url: 'https://upeuedupe-my.sharepoint.com/:u:/g/personal/angel_silva_s_upeu_edu_pe/IQCUvlyX-_ZFT7XNFdJbtkSBAS1jhaoM_jc9l2dXVxAgzcg?e=qVjBst&download=1',
        fileName: 'HimnarioAdventista.AppImage',
        fileSize: '57,1 MB',
        status: 'available',
      },
      {
        platform: 'mac',
        url: '',
        fileName: 'HimnarioAdventista.dmg',
        fileSize: 'Por definir',
        status: 'coming-soon',
      },
    ],
    dataDownload: {
      url: 'https://upeuedupe-my.sharepoint.com/:u:/g/personal/angel_silva_s_upeu_edu_pe/IQBPgALocteMR6u703GOVpzoATfEOvlH9slXFtVr-BctjDw?e=Ixw8bf&download=1',
      fileSize: '3.23 GB',
      version: '2.0.2',
      description: 'Datos de audio para uso sin conexión',
    },
    status: 'available',
  },
];

export const getProjectById = (id: string): AppProject | undefined => {
  return projects.find(project => project.id === id);
};
