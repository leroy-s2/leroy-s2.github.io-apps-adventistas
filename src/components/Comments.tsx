import { useEffect, useRef } from 'react';

interface CommentsProps {
  /** Identificador único para el hilo de comentarios */
  identifier: string;
  /** URL de la página (opcional, se usa location.href por defecto) */
  url?: string;
  /** Título de la página (opcional) */
  title?: string;
}

// Definir la configuración de Disqus
interface DisqusConfig {
  page: {
    url: string;
    identifier: string;
    title: string;
  };
}

declare global {
  interface Window {
    DISQUS: {
      reset: (config: { reload: boolean; config: () => void }) => void;
    };
  }
}

const Comments = ({ identifier, url, title }: CommentsProps) => {
  const disqusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const disqusShortname = 'adventlink';
    const pageUrl = url || window.location.href;
    const pageIdentifier = identifier;
    const pageTitle = title || document.title;

    // Crear configuración de Disqus
    const disqusConfig = function (this: DisqusConfig) {
      this.page = {
        url: pageUrl,
        identifier: pageIdentifier,
        title: pageTitle
      };
    };

    // Asignar al objeto global window
    (window as any).disqus_config = disqusConfig;

    // Si Disqus ya está cargado, resetear
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: disqusConfig
      });
    } else {
      // Cargar Disqus por primera vez
      const script = document.createElement('script');
      script.src = `https://${disqusShortname}.disqus.com/embed.js`;
      script.setAttribute('data-timestamp', String(+new Date()));
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup: remover el iframe de Disqus al desmontar
      if (disqusRef.current) {
        disqusRef.current.innerHTML = '';
      }
    };
  }, [identifier, url, title]);

  return (
    <div className="glass-card rounded-2xl p-6 animate-fade-in">
      <h2 className="text-xl font-bold text-white mb-4 font-serif flex items-center gap-2">
        💬 Comentarios
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        ¿Tienes preguntas, sugerencias o comentarios? ¡Déjanos saber! Puedes iniciar sesión con Google, Facebook o crear una cuenta de Disqus.
      </p>
      <div id="disqus_thread" ref={disqusRef} className="disqus-container" />
      <noscript>
        Por favor habilita JavaScript para ver los comentarios.
      </noscript>
    </div>
  );
};

export default Comments;
