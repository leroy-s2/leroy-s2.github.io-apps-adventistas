import { DiscussionEmbed } from 'disqus-react';

interface CommentsProps {
  /** Identificador único para el hilo. Opcional: si se omite, Disqus usa la URL.
   *  ÚSALO SOLO para threads NUEVOS (ej: "sugerencias-de-apps"). Para threads
   *  que ya existen en admin, NO pasarlo: Disqus debe matchear por la URL exacta. */
  identifier?: string;
  /** Ruta canónica DENTRO del router (ej: "/project/himnario-adventista" o "/sugerencias").
   *  SIN "#". Se combina con origin + BASE_URL para formar la URL que indexa Disqus. */
  path: string;
  /** Título de la página (opcional) */
  title?: string;
}

const Comments = ({ identifier, path, title }: CommentsProps) => {
  const disqusShortname = 'adventlink';

  // Construir la URL canónica SIN hash (Disqus no indexa rutas hash).
  // Normalizamos para no duplicar el "/" entre BASE_URL y path.
  const base = import.meta.env.BASE_URL || '/';
  const url = `${window.location.origin}${base.replace(/\/+$/, '')}${path}`;

  const disqusConfig: Record<string, string> = {
    url: url,
    title: title || document.title,
  };
  // Sólo agregamos identifier si se provee. Para el hilo del himnario (ya existente
  // en el admin con URL editada) NO pasamos identifier: el match es por URL.
  if (identifier) {
    disqusConfig.identifier = identifier;
  }

  return (
    <div className="glass-card rounded-2xl p-6 animate-fade-in">
      <h2 className="text-xl font-bold text-white mb-4 font-serif flex items-center gap-2">
        💬 Comentarios
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        ¿Tienes preguntas, sugerencias o comentarios? ¡Déjanos saber! Puedes iniciar sesión con Google, Facebook o crear una cuenta de Disqus.
      </p>
      <div className="bg-white/90 border border-slate-200/60 rounded-xl p-4 overflow-hidden disqus-custom-wrapper">
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
      <noscript>
        Por favor habilita JavaScript para ver los comentarios.
      </noscript>
    </div>
  );
};

export default Comments;