import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { platform } = req.query;

  // Mapeamos la plataforma con los archivos reales subidos
  const files: Record<string, string> = {
    'windows': 'HimnarioAdventista-Windows.zip',
    'linux-deb': 'HimnarioAdventista-Linux-deb.zip',
    'linux-flatpak': 'HimnarioAdventista-Linux-Flatpak.zip'
  };

  const filename = typeof platform === 'string' ? files[platform] : null;

  if (!filename) {
    return res.status(400).json({ error: 'Plataforma no válida' });
  }

  // IMPORTANTE: Reemplaza esto con el subdominio que te dio R2
  const r2BaseUrl = 'https://pub-4d9b18c9d97e44eb816ad7c74020d7c6.r2.dev'; 
  const downloadUrl = `${r2BaseUrl}/${filename}`;

  try {
    // Suma +1 al contador de Neon
    await sql`
      UPDATE file_downloads 
      SET download_count = download_count + 1, last_downloaded_at = CURRENT_TIMESTAMP
      WHERE platform = ${platform as string}
    `;

    // Redirige (302) al archivo final
    return res.redirect(302, downloadUrl);
  } catch (error) {
    console.error('Error en base de datos:', error);
    // Fallback: Si la DB falla, igual enviamos al usuario al archivo
    return res.redirect(302, downloadUrl);
  }
}
