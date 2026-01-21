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
  status: 'available' | 'coming-soon';
}

export interface DownloadLink {
  platform: 'windows' | 'linux' | 'mac';
  url: string;
  fileName: string;
  fileSize: string;
  status: 'available' | 'coming-soon';
}
