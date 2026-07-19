// Tipos volátiles: cambian en cada release (viven en manifest.json)
export interface AppManifest {
  id: string;
  version: string;
  lastUpdate: string;
  downloads: DownloadLink[];
  /**
   * `version` es opcional: si se omite, el loader hereda la versión
   * del manifest. Así la versión sigue siendo single-source.
   */
  dataDownload?: {
    url: string;
    fileSize: string;
    version?: string;
    description: string;
  };
}

// Tipos estáticos: el showcase, casi nunca cambia (viven en info.ts)
export interface AppInfo {
  id: string;            // debe coincidir con manifest.id
  name: string;
  description: string;
  longDescription: string;
  icon: string;          // ruta relativa dentro de public/, ej: "himnario-adventista/logo.ico"
  category: string;
  appType?: 'online-offline' | 'offline-only';
  screenshots: string[];
  features: string[];
  status: 'available' | 'coming-soon';
}

// Tipo final que consumen los componentes (Navbar, ProjectCard, pages, etc.)
export interface AppProject {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  version: string;
  lastUpdate: string;
  category: string;
  screenshots: string[];
  features: string[];
  downloads: DownloadLink[];
  dataDownload?: DataDownload;
  status: 'available' | 'coming-soon';
  appType?: 'online-offline' | 'offline-only';
}

export interface DownloadLink {
  platform: 'windows' | 'linux' | 'mac';
  url: string;
  fileName: string;
  fileSize: string;
  status: 'available' | 'coming-soon';
}

export interface DataDownload {
  url: string;
  fileSize: string;
  version: string;
  description: string;
}