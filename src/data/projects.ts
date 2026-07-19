import type { AppManifest, AppInfo, AppProject } from '../types';
import himnarioManifest from '../apps/himnario-adventista/manifest.json';
import { himnarioInfo } from '../apps/himnario-adventista/info';

/**
 * Loader del catálogo de apps.
 *
 * Combina cada par (manifest volátil + info estático) en un único
 * AppProject que consumen los componentes. La VERSIÓN es single-source:
 * vive en el manifest, y si dataDownload omite su propia version, se
 * hereda la del manifest. Así en cada release solo se toca el manifest.
 */
function buildProject(manifest: AppManifest, info: AppInfo): AppProject {
  return {
    ...info,
    version: manifest.version,
    lastUpdate: manifest.lastUpdate,
    downloads: manifest.downloads,
    dataDownload: manifest.dataDownload
      ? {
          url: manifest.dataDownload.url,
          fileSize: manifest.dataDownload.fileSize,
          version: manifest.dataDownload.version ?? manifest.version,
          description: manifest.dataDownload.description,
        }
      : undefined,
  };
}

const himnarioAdventista = buildProject(
  himnarioManifest as AppManifest,
  himnarioInfo,
);

export const projects: AppProject[] = [himnarioAdventista];

export const getProjectById = (id: string): AppProject | undefined =>
  projects.find(project => project.id === id);