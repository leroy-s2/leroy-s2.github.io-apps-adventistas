import { useEffect, useRef } from 'react';

interface CommentsProps {
  /** Identificador único para el hilo de comentarios (ej: 'himnario-adventista' o 'sugerencias') */
  issueId: string;
  /** Título descriptivo para la sección */
  title?: string;
  /** Descripción adicional */
  description?: string;
}

const Comments = ({
  issueId,
  title = '💬 Comentarios y Soporte',
  description = '¿Tienes preguntas, sugerencias o problemas? Deja tu comentario aquí y te responderé lo antes posible. Necesitas una cuenta de GitHub para comentar.'
}: CommentsProps) => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Limpiar cualquier script previo de Utterances
    if (commentsRef.current) {
      commentsRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'leroy-s2/leroy-s2.github.io-apps-adventistas');
    script.setAttribute('issue-term', issueId);
    script.setAttribute('label', '💬 comentarios');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      // Cleanup al desmontar o cambiar issueId
      if (commentsRef.current) {
        commentsRef.current.innerHTML = '';
      }
    };
  }, [issueId]);

  return (
    <div className="glass-card rounded-2xl p-6 animate-fade-in">
      <h2 className="text-xl font-bold text-white mb-4 font-serif flex items-center gap-2">
        {title}
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        {description}
      </p>
      <div
        ref={commentsRef}
        className="utterances-container min-h-[200px]"
      />
    </div>
  );
};

export default Comments;
