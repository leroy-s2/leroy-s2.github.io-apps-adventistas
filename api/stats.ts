import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { rows } = await sql`SELECT platform, download_count FROM file_downloads`;
    
    // Convertimos el array a un objeto: { "windows": 10, "linux-deb": 5, ... }
    const stats = rows.reduce((acc: any, row: any) => {
      acc[row.platform] = row.download_count;
      return acc;
    }, {});

    return res.status(200).json(stats);
  } catch (error) {
    console.error('Error en base de datos:', error);
    return res.status(500).json({ error: 'Error obteniendo estadísticas' });
  }
}
