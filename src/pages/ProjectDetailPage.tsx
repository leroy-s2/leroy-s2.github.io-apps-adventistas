import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Download, ArrowLeft, Check, Monitor, Apple, Clock, FileText, ExternalLink, X, Minus, WifiOff, Music } from 'lucide-react';
import { getProjectById } from '../data/projects';
import Comments from '../components/Comments';

// Componente de flecha curva para anotaciones
const CurvedArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
    <path d="M20 80 Q 50 20, 80 30" strokeLinecap="round" />
    <path d="M70 20 L 80 30 L 70 40" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Icono de Linux personalizado
const LinuxIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.897 1.132.218 0 .439-.027.654-.08.349-.084.645-.264.882-.494.141.092.313.137.476.143.226 0 .423-.064.607-.143.18-.079.332-.193.484-.318.026-.03.05-.06.076-.089.136-.066.266-.162.391-.279.4-.396.619-.879.676-1.39.057-.512-.012-1.063-.199-1.617-.06-.178-.11-.34-.163-.508-.038-.12-.072-.24-.101-.368-.016-.068-.034-.136-.048-.206-.015-.104-.028-.21-.028-.32 0-.106.016-.21.046-.317.03-.1.064-.199.103-.296.028-.062.058-.123.088-.183-.057-.106-.105-.22-.135-.341-.03-.12-.045-.246-.036-.373.02-.3.189-.59.456-.797.268-.201.63-.3 1.01-.3.264 0 .52.055.75.172.095.049.186.11.263.181.063-.16.109-.33.132-.51.028-.206.01-.42-.066-.636-.073-.22-.196-.426-.364-.612-.356-.396-.896-.662-1.502-.875-.573-.202-1.21-.356-1.867-.489-.315-.085-.614-.172-.902-.27-.286-.095-.56-.2-.802-.33a3.48 3.48 0 01-.298-.177.386.386 0 01-.108-.09.258.258 0 01-.053-.132.283.283 0 01.02-.14.55.55 0 01.072-.13.802.802 0 01.106-.119 3.33 3.33 0 00.32-.302c.182-.194.376-.43.55-.707.08-.134.154-.278.218-.432a4.61 4.61 0 00.166-.53c.029-.11.05-.222.067-.335a3.6 3.6 0 00.028-.363c0-.073-.002-.145-.006-.217a3.24 3.24 0 00-.06-.519 2.83 2.83 0 00-.122-.41 2.3 2.3 0 00-.16-.31 1.45 1.45 0 00-.127-.178c-.233-.26-.51-.4-.812-.46-.15-.026-.306-.037-.464-.037-.22 0-.443.027-.66.076a3.95 3.95 0 00-.644.202c-.122.05-.242.108-.358.176a3.3 3.3 0 00-.35.237c-.063.05-.124.104-.182.159a3.38 3.38 0 00-.34.396c-.037.051-.073.103-.107.156-.034.054-.065.11-.094.167a2.65 2.65 0 00-.154.39c-.022.07-.04.142-.055.214-.026.128-.04.258-.04.388 0 .065.002.131.008.196.012.13.037.258.076.382.027.087.06.172.1.255.012.03.025.058.04.086.042.079.09.155.144.228.028.038.058.075.09.11.065.072.137.139.214.201.04.032.08.063.123.092.086.058.178.11.276.156.066.03.134.057.204.082.14.048.29.086.447.114.157.028.322.046.492.054.113.006.228.009.345.009.078 0 .156-.002.235-.004.183-.008.369-.024.556-.049a8.2 8.2 0 00.591-.097c.055-.012.109-.024.163-.038-.002.016-.003.033-.004.05a1.32 1.32 0 00.012.228c.013.094.038.187.075.278.018.044.039.087.063.129.048.084.108.163.18.234.044.044.093.085.145.123.104.076.223.138.353.185.13.047.27.078.416.094.073.008.147.012.222.012.15 0 .3-.018.447-.055.073-.019.145-.042.214-.07.138-.057.266-.134.38-.228.057-.047.11-.098.16-.153.1-.11.183-.236.247-.374.032-.069.058-.141.078-.216.04-.149.06-.307.06-.469 0-.162-.02-.32-.06-.469-.02-.075-.046-.147-.078-.216-.064-.138-.147-.264-.247-.374-.05-.055-.103-.106-.16-.153-.114-.094-.242-.171-.38-.228-.069-.028-.141-.051-.214-.07-.147-.037-.298-.055-.447-.055-.075 0-.149.004-.222.012-.146.016-.286.047-.416.094-.13.047-.249.109-.353.185-.052.038-.101.079-.145.123-.072.071-.132.15-.18.234-.024.042-.045.085-.063.13-.037.09-.062.183-.075.277a1.32 1.32 0 00-.012.228c.001.017.002.034.004.05-.054-.014-.108-.026-.163-.038a8.2 8.2 0 01-.591-.097 6.02 6.02 0 01-.556-.049c-.079-.002-.157-.004-.235-.004-.117 0-.232.003-.345.009-.17.008-.335.026-.492.054-.157.028-.307.066-.447.114-.07.025-.138.052-.204.082-.098.046-.19.098-.276.156-.043.029-.083.06-.123.092-.077.062-.149.129-.214.201-.032.035-.062.072-.09.11-.054.073-.102.15-.144.228-.015.028-.028.056-.04.086-.04.083-.073.168-.1.255-.039.124-.064.252-.076.382-.006.065-.008.131-.008.196 0 .13.014.26.04.388.015.072.033.144.055.214.041.132.09.263.154.39.029.057.06.113.094.167.034.053.07.105.107.156.1.14.214.273.34.396.058.055.119.109.182.159.108.086.225.165.35.237.116.068.236.126.358.176.216.087.432.154.644.202.217.049.44.076.66.076.158 0 .314-.011.464-.037.302-.06.579-.2.812-.46.045-.047.088-.11.127-.178.054-.09.11-.197.16-.31.054-.124.092-.268.122-.41.024-.12.045-.253.06-.519.004-.072.006-.144.006-.217 0-.123-.01-.246-.028-.363a4.46 4.46 0 00-.067-.335 4.61 4.61 0 00-.166-.53 2.97 2.97 0 00-.218-.432 3.91 3.91 0 00-.55-.707 3.33 3.33 0 00-.32-.302.802.802 0 00-.106-.119.55.55 0 00-.072-.13.283.283 0 00-.02-.14.258.258 0 01.053-.132.386.386 0 01.108-.09c.09-.06.19-.121.298-.177.242-.13.516-.235.802-.33.288-.098.587-.185.902-.27.657-.133 1.294-.287 1.867-.489.606-.213 1.146-.479 1.502-.875.168-.186.291-.392.364-.612.076-.216.094-.43.066-.636-.023-.18-.069-.35-.132-.51-.077.071-.168.132-.263.181-.23.117-.486.172-.75.172-.38 0-.742-.099-1.01-.3-.267-.207-.436-.497-.456-.797-.009-.127.006-.253.036-.373.03-.121.078-.235.135-.341-.03.06-.06.121-.088.183-.039.097-.073.196-.103.296-.03.107-.046.211-.046.317 0 .11.013.216.028.32.014.07.032.138.048.206.029.128.063.248.101.368.053.168.103.33.163.508.187.554.256 1.105.199 1.617-.057.511-.276.994-.676 1.39-.125.117-.255.213-.391.279.026.029.05.059.076.089.152.125.304.239.484.318.184.079.381.143.607.143.163-.006.335-.051.476-.143.237.23.533.41.882.494.215.053.436.08.654.08.784 0 1.506-.354 1.897-1.132l.003-.003c.051-.135.089-.199.114-.333 1.003.067 1.878-.258 2.577-.2 1.03.065 1.673.331 2.26.334.238.482.682.83 1.208.946.75.2 1.69-.004 2.616-.47.864-.465 1.964-.4 2.774-.6.405-.131.766-.267.94-.601.174-.339.143-.804-.106-1.484-.076-.242-.018-.571.04-.97.028-.136.055-.337.055-.536.004-.208-.042-.413-.132-.602-.206-.411-.551-.544-.864-.68-.312-.133-.598-.201-.797-.4-.213-.239-.403-.571-.663-.839a.424.424 0 00-.11-.135c.123-.805-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021z" />
  </svg>
);

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const project = getProjectById(id || '');
  const [highlightedPlatform, setHighlightedPlatform] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const platform = params.get('platform');

    if (platform) {
      setHighlightedPlatform(platform);
      // Scroll a la sección de descargas después de un pequeño delay
      setTimeout(() => {
        const downloadSection = document.getElementById('download-section');
        if (downloadSection) {
          downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);

      // Quitar el highlight después de 3 segundos
      setTimeout(() => {
        setHighlightedPlatform(null);
      }, 3000);
    }
  }, [location.search]);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block">😕</span>
          <h1 className="text-3xl font-bold text-white mb-4 font-serif">Proyecto no encontrado</h1>
          <p className="text-gray-400 mb-8">El proyecto que buscas no existe o ha sido eliminado.</p>
          <Link
            to="/downloads"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-adventist-accent text-adventist-dark font-semibold"
          >
            <ArrowLeft size={18} />
            <span>Ver todos los proyectos</span>
          </Link>
        </div>
      </div>
    );
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'windows':
        return <Monitor size={24} />;
      case 'linux':
        return <LinuxIcon className="w-6 h-6" />;
      case 'mac':
        return <Apple size={24} />;
      default:
        return <Download size={24} />;
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'windows':
        return 'Windows';
      case 'linux':
        return 'Linux';
      case 'mac':
        return 'macOS';
      default:
        return platform;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {project.icon.includes('.') ? (
              <img src={`${import.meta.env.BASE_URL}${project.icon}`} alt={project.name} className="w-20 h-20 rounded-2xl shadow-lg" />
            ) : (
              <span className="text-7xl">{project.icon}</span>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">{project.name}</h1>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'available'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                  {project.status === 'available' ? 'Disponible' : 'Próximamente'}
                </span>
              </div>
              <p className="text-adventist-accent mb-4">{project.category}</p>
              <p className="text-gray-300 text-lg">{project.description}</p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FileText size={16} />
                  <span>Versión {project.version}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Actualizado: {new Date(project.lastUpdate).toLocaleDateString('es-ES')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Gallery with Annotations */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-xl font-bold text-white mb-4 font-serif">Vista Previa de la Aplicación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Screenshot 1 - Pantalla inicial con anotaciones */}
              <div className="glass-card rounded-2xl p-4">
                <div className="relative">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.screenshots[0]}`}
                    alt="Pantalla inicial"
                    className="rounded-xl w-full"
                  />
                  {/* Anotación: Botón Cerrar */}
                  <div className="absolute top-0 right-0 translate-x-2 -translate-y-2">
                    <div className="flex items-start gap-1">
                      <div className="bg-red-500 rounded px-2 py-1 text-white text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <X size={12} />
                        <span>Cerrar</span>
                      </div>
                      <CurvedArrow className="w-8 h-8 text-red-400 rotate-90" />
                    </div>
                  </div>
                  {/* Anotación: Botón Minimizar - Parte inferior derecha */}
                  <div className="absolute bottom-4 right-0 translate-x-4">
                    <div className="flex items-end gap-1">
                      <div className="bg-yellow-500 rounded px-2 py-1 text-black text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Minus size={12} />
                        <span>Minimizar</span>
                      </div>
                      <CurvedArrow className="w-8 h-8 text-yellow-400 -rotate-45 scale-y-[-1]" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-3 text-center">Pantalla de inicio con listado de himnos</p>
              </div>

              {/* Screenshot 2 - Vista de reproducción */}
              {project.screenshots[1] && (
                <div className="glass-card rounded-2xl p-4">
                  <div className="relative">
                    <img
                      src={`${import.meta.env.BASE_URL}${project.screenshots[1]}`}
                      alt="Vista de reproducción"
                      className="rounded-xl w-full"
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-3 text-center">Reproductor con letra y controles de audio</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
          <h2 className="text-xl font-bold text-white mb-4 font-serif">Características Principales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Feature 1 - Offline */}
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <WifiOff className="text-green-400" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Sin Internet</h3>
              <p className="text-gray-400 text-xs">100% offline</p>
            </div>

            {/* Feature 2 - Letra */}
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="text-blue-400" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Modo Letra</h3>
              <p className="text-gray-400 text-xs">Lee los himnos</p>
            </div>

            {/* Feature 3 - Cantado */}
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Music className="text-purple-400" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Cantado</h3>
              <p className="text-gray-400 text-xs">Con voces</p>
            </div>

            {/* Feature 4 - Pista */}
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="w-12 h-12 bg-adventist-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Music className="text-adventist-accent" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Pista</h3>
              <p className="text-gray-400 text-xs">Instrumental</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-bold text-white mb-4 font-serif">Descripción</h2>
              <div className="text-gray-300 whitespace-pre-line">{project.longDescription}</div>
            </div>

            {/* Features */}
            <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl font-bold text-white mb-4 font-serif">Características</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-adventist-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-adventist-accent" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar - Downloads */}
          <div className="lg:col-span-1" id="download-section">
            <div className="glass-card rounded-2xl p-6 sticky top-24 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl font-bold text-white mb-6 font-serif">Descargar</h2>

              <div className="space-y-4">
                {project.downloads.map((download) => (
                  <div
                    key={download.platform}
                    className={`transition-all duration-500 rounded-xl ${highlightedPlatform === download.platform
                        ? 'ring-4 ring-adventist-accent ring-offset-2 ring-offset-adventist-dark animate-pulse'
                        : ''
                      }`}
                  >
                    {download.status === 'available' && download.url ? (
                      <a
                        href={download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-adventist-accent text-adventist-dark font-semibold download-btn w-full group"
                      >
                        <div className="flex items-center gap-3">
                          {getPlatformIcon(download.platform)}
                          <div className="text-left">
                            <div>{getPlatformName(download.platform)}</div>
                            <div className="text-xs opacity-75">{download.fileSize}</div>
                          </div>
                        </div>
                        <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : download.status === 'available' && !download.url ? (
                      <div className="flex items-center justify-between p-4 rounded-xl bg-blue-500/20 text-blue-400 w-full">
                        <div className="flex items-center gap-3">
                          {getPlatformIcon(download.platform)}
                          <div className="text-left">
                            <div>{getPlatformName(download.platform)}</div>
                            <div className="text-xs opacity-75">Link pendiente</div>
                          </div>
                        </div>
                        <Clock size={18} />
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-4 rounded-xl bg-gray-600/20 text-gray-400 w-full">
                        <div className="flex items-center gap-3">
                          {getPlatformIcon(download.platform)}
                          <div className="text-left">
                            <div>{getPlatformName(download.platform)}</div>
                            <div className="text-xs opacity-75">Próximamente</div>
                          </div>
                        </div>
                        <Clock size={18} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  💡 Las descargas se realizan a través de MEGA. Asegúrate de tener una conexión estable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8">
          <Comments issueId={project.id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
