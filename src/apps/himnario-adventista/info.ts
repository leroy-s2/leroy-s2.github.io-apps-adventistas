import type { AppInfo } from '../../types';

/**
 * Showcase ESTÁTICO del Himnario Adventista.
 * Lo que casi nunca cambia entre releases: descripciones, features,
 * capturas, icono y categoría. No VERSION ni ENLACES (esos viven en el
 * manifest.json que está al lado de este archivo).
 */
export const himnarioInfo: AppInfo = {
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
  icon: 'himnario-adventista/logo-himnario.ico',
  category: 'Música & Adoración',
  appType: 'online-offline',
  screenshots: [
    'himnario-adventista/screenshot-inicio.png',
    'himnario-adventista/screenshot-reproduccion.png',
    'himnario-adventista/screenshot-detalles.png',
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
  status: 'available',
};