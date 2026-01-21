import { useEffect, useRef } from 'react';

interface CommentsProps {
  projectId: string;
}

const Comments = ({ projectId }: CommentsProps) => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Limpiar cualquier script previo de Giscus
    if (commentsRef.current) {
      commentsRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'leroy-s2/Blog-adventist'); // Tu repositorio
    script.setAttribute('data-repo-id', ''); // Se llenará después de habilitar Discussions
    script.setAttribute('data-category', 'Comentarios');
    script.setAttribute('data-category-id', ''); // Se llenará después de crear la categoría
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', projectId);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'es');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      // Cleanup
      if (commentsRef.current) {
        commentsRef.current.innerHTML = '';
      }
    };
  }, [projectId]);

  return (
    <div className="glass-card rounded-2xl p-6 animate-fade-in">
      <h2 className="text-xl font-bold text-white mb-6 font-serif flex items-center gap-2">
        💬 Comentarios y Soporte
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        ¿Tienes preguntas, sugerencias o problemas? Deja tu comentario aquí y te responderé lo antes posible.
        Necesitas una cuenta de GitHub para comentar.
      </p>
      <div ref={commentsRef} className="giscus-container" />
      
      {/* Fallback mientras no esté configurado Giscus */}
      <div className="text-center py-8 border border-dashed border-white/20 rounded-xl mt-4">
        <span className="text-4xl mb-4 block">🚧</span>
        <h3 className="text-white font-semibold mb-2">Sistema de comentarios próximamente</h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Los comentarios estarán disponibles una vez que se configure GitHub Discussions en el repositorio.
          Por ahora, puedes crear un Issue en GitHub para reportar problemas.
        </p>
        <a
          href="https://github.com/leroy-s2/Blog-adventist/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-adventist-accent/20 text-adventist-accent hover:bg-adventist-accent hover:text-adventist-dark transition-all"
        >
          Crear Issue en GitHub
        </a>
      </div>
    </div>
  );
};

export default Comments;
