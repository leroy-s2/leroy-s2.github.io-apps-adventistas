import React, { useEffect, useState } from 'react';
import { TrendingDown, Users } from 'lucide-react';

// ─── Tipos ────────────────────────────────────────────────────────────────────

/** Shape que devuelve GET /api/stats */
export interface DownloadStats {
  windows:         number;
  'linux-deb':     number;
  'linux-flatpak': number;
}

// ─── Helpers de cómputo ───────────────────────────────────────────────────────

/** Total Linux = deb + flatpak */
export const linuxTotal  = (s: DownloadStats) => (s['linux-deb'] ?? 0) + (s['linux-flatpak'] ?? 0);

/** Total global = windows + linux-deb + linux-flatpak */
export const grandTotal  = (s: DownloadStats) => (s.windows ?? 0) + linuxTotal(s);

const fmt = (n: number) => n.toLocaleString('es-PE');

// ─── Hook ─────────────────────────────────────────────────────────────────────

const CACHE_KEY = 'himnario_neon_stats';
const CACHE_TTL = 60_000; // 1 minuto

export function useDownloadStats() {
  const [stats, setStats]     = useState<DownloadStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Leer caché session
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (raw) {
        const { value, ts } = JSON.parse(raw) as { value: DownloadStats; ts: number };
        if (Date.now() - ts < CACHE_TTL) {
          setStats(value);
          setLoading(false);
          return;
        }
      }
    } catch (_) { /**/ }

    const ctrl = new AbortController();

    fetch('/api/stats', { signal: ctrl.signal })
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() as Promise<DownloadStats>; })
      .then(data => {
        setStats(data);
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ value: data, ts: Date.now() })); } catch (_) { /**/ }
      })
      .catch(err => { if (err.name !== 'AbortError') console.warn('[DownloadCounter]', err); })
      .finally(() => setLoading(false));

    return () => ctrl.abort();
  }, []);

  return { stats, loading };
}

// ─── Badge debajo del botón ───────────────────────────────────────────────────

interface BadgeProps {
  /** 'windows' muestra stats.windows | 'linux' muestra deb+flatpak */
  platform: 'windows' | 'linux';
  stats: DownloadStats | null;
  loading: boolean;
}

const LABEL: Record<BadgeProps['platform'], string> = {
  windows: 'Windows',
  linux:   'Linux',
};

export const DownloadCountBadge: React.FC<BadgeProps> = ({ platform, stats, loading }) => {
  const count = stats
    ? platform === 'windows'
      ? stats.windows ?? 0
      : linuxTotal(stats)
    : 0;

  return (
    <div className="flex items-center justify-center gap-1.5 mt-1.5 opacity-80">
      <TrendingDown size={11} className="text-emerald-400" />
      <span className="text-[11px] font-medium text-emerald-300">
        {loading ? (
          <span className="text-gray-500 animate-pulse">Cargando…</span>
        ) : count > 0 ? (
          <>
            {fmt(count)}{' '}
            <span className="text-gray-400 font-normal">
              descargaron en {LABEL[platform]}
            </span>
          </>
        ) : (
          <span className="text-gray-500">Sé el primero en descargar</span>
        )}
      </span>
    </div>
  );
};

// ─── Card "Instalaron" para el hero ──────────────────────────────────────────

interface StatCardProps {
  stats: DownloadStats | null;
  loading: boolean;
}

/** Total = windows + linux-deb + linux-flatpak */
export const InstallsStatCard: React.FC<StatCardProps> = ({ stats, loading }) => (
  <div className="glass-card rounded-lg px-4 py-2 border border-emerald-500/20">
    <span className="text-gray-400 text-xs flex items-center gap-1">
      <Users size={10} className="text-emerald-400" />
      Instalaron
    </span>
    <p className="text-emerald-400 font-semibold">
      {loading ? (
        <span className="text-gray-500 animate-pulse text-sm">…</span>
      ) : stats ? (
        fmt(grandTotal(stats))
      ) : (
        '–'
      )}
    </p>
  </div>
);
