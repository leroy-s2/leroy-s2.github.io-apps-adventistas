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
  dataDownload?: DataDownload; // Descarga opcional de data para modo offline
  status: 'available' | 'coming-soon';
  appType?: 'online-offline' | 'offline-only'; // Tipo de app
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
