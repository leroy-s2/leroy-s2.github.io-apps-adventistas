import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronDown, Music, Monitor, Apple } from 'lucide-react';
import { projects } from '../data/projects';

// Icono de Linux personalizado
const LinuxIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.897 1.132.218 0 .439-.027.654-.08.349-.084.645-.264.882-.494.141.092.313.137.476.143.226 0 .423-.064.607-.143.18-.079.332-.193.484-.318.026-.03.05-.06.076-.089.136-.066.266-.162.391-.279.4-.396.619-.879.676-1.39.057-.512-.012-1.063-.199-1.617-.06-.178-.11-.34-.163-.508-.038-.12-.072-.24-.101-.368-.016-.068-.034-.136-.048-.206-.015-.104-.028-.21-.028-.32 0-.106.016-.21.046-.317.03-.1.064-.199.103-.296.028-.062.058-.123.088-.183-.057-.106-.105-.22-.135-.341-.03-.12-.045-.246-.036-.373.02-.3.189-.59.456-.797.268-.201.63-.3 1.01-.3.264 0 .52.055.75.172.095.049.186.11.263.181.063-.16.109-.33.132-.51.028-.206.01-.42-.066-.636-.073-.22-.196-.426-.364-.612-.356-.396-.896-.662-1.502-.875-.573-.202-1.21-.356-1.867-.489-.315-.085-.614-.172-.902-.27-.286-.095-.56-.2-.802-.33a3.48 3.48 0 01-.298-.177.386.386 0 01-.108-.09.258.258 0 01-.053-.132.283.283 0 01.02-.14.55.55 0 01.072-.13.802.802 0 01.106-.119 3.33 3.33 0 00.32-.302c.182-.194.376-.43.55-.707.08-.134.154-.278.218-.432a4.61 4.61 0 00.166-.53c.029-.11.05-.222.067-.335a3.6 3.6 0 00.028-.363c0-.073-.002-.145-.006-.217a3.24 3.24 0 00-.06-.519 2.83 2.83 0 00-.122-.41 2.3 2.3 0 00-.16-.31 1.45 1.45 0 00-.127-.178c-.233-.26-.51-.4-.812-.46-.15-.026-.306-.037-.464-.037-.22 0-.443.027-.66.076a3.95 3.95 0 00-.644.202c-.122.05-.242.108-.358.176a3.3 3.3 0 00-.35.237c-.063.05-.124.104-.182.159a3.38 3.38 0 00-.34.396c-.037.051-.073.103-.107.156-.034.054-.065.11-.094.167a2.65 2.65 0 00-.154.39c-.022.07-.04.142-.055.214-.026.128-.04.258-.04.388 0 .065.002.131.008.196.012.13.037.258.076.382.027.087.06.172.1.255.012.03.025.058.04.086.042.079.09.155.144.228.028.038.058.075.09.11.065.072.137.139.214.201.04.032.08.063.123.092.086.058.178.11.276.156.066.03.134.057.204.082.14.048.29.086.447.114.157.028.322.046.492.054.113.006.228.009.345.009.078 0 .156-.002.235-.004.183-.008.369-.024.556-.049a8.2 8.2 0 00.591-.097c.055-.012.109-.024.163-.038-.002.016-.003.033-.004.05a1.32 1.32 0 00.012.228c.013.094.038.187.075.278.018.044.039.087.063.129.048.084.108.163.18.234.044.044.093.085.145.123.104.076.223.138.353.185.13.047.27.078.416.094.073.008.147.012.222.012.15 0 .3-.018.447-.055.073-.019.145-.042.214-.07.138-.057.266-.134.38-.228.057-.047.11-.098.16-.153.1-.11.183-.236.247-.374.032-.069.058-.141.078-.216.04-.149.06-.307.06-.469 0-.162-.02-.32-.06-.469-.02-.075-.046-.147-.078-.216-.064-.138-.147-.264-.247-.374-.05-.055-.103-.106-.16-.153-.114-.094-.242-.171-.38-.228-.069-.028-.141-.051-.214-.07-.147-.037-.298-.055-.447-.055-.075 0-.149.004-.222.012-.146.016-.286.047-.416.094-.13.047-.249.109-.353.185-.052.038-.101.079-.145.123-.072.071-.132.15-.18.234-.024.042-.045.085-.063.13-.037.09-.062.183-.075.277a1.32 1.32 0 00-.012.228c.001.017.002.034.004.05-.054-.014-.108-.026-.163-.038a8.2 8.2 0 01-.591-.097 6.02 6.02 0 01-.556-.049c-.079-.002-.157-.004-.235-.004-.117 0-.232.003-.345.009-.17.008-.335.026-.492.054-.157.028-.307.066-.447.114-.07.025-.138.052-.204.082-.098.046-.19.098-.276.156-.043.029-.083.06-.123.092-.077.062-.149.129-.214.201-.032.035-.062.072-.09.11-.054.073-.102.15-.144.228-.015.028-.028.056-.04.086-.04.083-.073.168-.1.255-.039.124-.064.252-.076.382-.006.065-.008.131-.008.196 0 .13.014.26.04.388.015.072.033.144.055.214.041.132.09.263.154.39.029.057.06.113.094.167.034.053.07.105.107.156.1.14.214.273.34.396.058.055.119.109.182.159.108.086.225.165.35.237.116.068.236.126.358.176.216.087.432.154.644.202.217.049.44.076.66.076.158 0 .314-.011.464-.037.302-.06.579-.2.812-.46.045-.047.088-.11.127-.178.054-.09.11-.197.16-.31.054-.124.092-.268.122-.41.024-.12.045-.253.06-.519.004-.072.006-.144.006-.217 0-.123-.01-.246-.028-.363a4.46 4.46 0 00-.067-.335 4.61 4.61 0 00-.166-.53 2.97 2.97 0 00-.218-.432 3.91 3.91 0 00-.55-.707 3.33 3.33 0 00-.32-.302.802.802 0 00-.106-.119.55.55 0 00-.072-.13.283.283 0 00-.02-.14.258.258 0 01.053-.132.386.386 0 01.108-.09c.09-.06.19-.121.298-.177.242-.13.516-.235.802-.33.288-.098.587-.185.902-.27.657-.133 1.294-.287 1.867-.489.606-.213 1.146-.479 1.502-.875.168-.186.291-.392.364-.612.076-.216.094-.43.066-.636-.023-.18-.069-.35-.132-.51-.077.071-.168.132-.263.181-.23.117-.486.172-.75.172-.38 0-.742-.099-1.01-.3-.267-.207-.436-.497-.456-.797-.009-.127.006-.253.036-.373.03-.121.078-.235.135-.341-.03.06-.06.121-.088.183-.039.097-.073.196-.103.296-.03.107-.046.211-.046.317 0 .11.013.216.028.32.014.07.032.138.048.206.029.128.063.248.101.368.053.168.103.33.163.508.187.554.256 1.105.199 1.617-.057.511-.276.994-.676 1.39-.125.117-.255.213-.391.279.026.029.05.059.076.089.152.125.304.239.484.318.184.079.381.143.607.143.163-.006.335-.051.476-.143.237.23.533.41.882.494.215.053.436.08.654.08.784 0 1.506-.354 1.897-1.132l.003-.003c.051-.135.089-.199.114-.333 1.003.067 1.878-.258 2.577-.2 1.03.065 1.673.331 2.26.334.238.482.682.83 1.208.946.75.2 1.69-.004 2.616-.47.864-.465 1.964-.4 2.774-.6.405-.131.766-.267.94-.601.174-.339.143-.804-.106-1.484-.076-.242-.018-.571.04-.97.028-.136.055-.337.055-.536.004-.208-.042-.413-.132-.602-.206-.411-.551-.544-.864-.68-.312-.133-.598-.201-.797-.4-.213-.239-.403-.571-.663-.839a.424.424 0 00-.11-.135c.123-.805-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileAppsRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Verificar si el clic fue dentro del dropdown de escritorio O del menú móvil de apps
      const isInsideDesktopDropdown = dropdownRef.current && dropdownRef.current.contains(target);
      const isInsideMobileApps = mobileAppsRef.current && mobileAppsRef.current.contains(target);

      if (!isInsideDesktopDropdown && !isInsideMobileApps) {
        setIsAppsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}image.png`}
              alt="AdventLink"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Inicio */}
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/')
                ? 'bg-adventist-accent text-adventist-dark font-semibold'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
            >
              <Home size={18} />
              <span>Inicio</span>
            </Link>

            {/* Dropdown de Apps */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsAppsOpen(!isAppsOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${location.pathname.includes('/project')
                  ? 'bg-adventist-accent text-adventist-dark font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                <Music size={18} />
                <span>Aplicaciones</span>
                <ChevronDown size={16} className={`transition-transform ${isAppsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isAppsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-card rounded-xl overflow-hidden animate-fade-in shadow-2xl">
                  {projects.map((project) => (
                    <div key={project.id} className="border-b border-white/10 last:border-0">
                      {/* Project Header */}
                      <Link
                        to={`/project/${project.id}`}
                        onClick={() => setIsAppsOpen(false)}
                        className="flex items-center gap-3 p-4 hover:bg-white/10 transition-colors"
                      >
                        {project.icon.includes('.') ? (
                          <img src={`${import.meta.env.BASE_URL}${project.icon}`} alt={project.name} className="w-10 h-10 rounded-lg" />
                        ) : (
                          <span className="text-3xl">{project.icon}</span>
                        )}
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{project.name}</h3>
                          <p className="text-gray-400 text-xs">{project.category}</p>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${project.status === 'available'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                          {project.status === 'available' ? 'Disponible' : 'Próximamente'}
                        </span>
                      </Link>

                      {/* Download Options */}
                      <div className="px-4 pb-3 flex gap-2">
                        {project.downloads.map((download) => (
                          <a
                            key={download.platform}
                            href={download.url || '#'}
                            target={download.url ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (!download.url || download.status !== 'available') {
                                e.preventDefault();
                              }
                              setIsAppsOpen(false);
                            }}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${download.status === 'available' && download.url
                              ? 'bg-adventist-accent/20 text-adventist-accent hover:bg-adventist-accent hover:text-adventist-dark'
                              : 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                              }`}
                            title={`${download.platform.charAt(0).toUpperCase() + download.platform.slice(1)} - ${download.status === 'available' ? (download.url ? 'Descargar' : 'Link pendiente') : 'Próximamente'
                              }`}
                          >
                            {download.platform === 'windows' && <Monitor size={14} />}
                            {download.platform === 'linux' && <LinuxIcon className="w-3.5 h-3.5" />}
                            {download.platform === 'mac' && <Apple size={14} />}
                            <span className="capitalize">{download.platform}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive('/')
                ? 'bg-adventist-accent text-adventist-dark font-semibold'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
            >
              <Home size={20} />
              <span>Inicio</span>
            </Link>

            {/* Apps en móvil */}
            <div className="mt-2" ref={mobileAppsRef}>
              <button
                onClick={() => setIsAppsOpen(!isAppsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-300"
              >
                <div className="flex items-center space-x-3">
                  <Music size={20} />
                  <span>Aplicaciones</span>
                </div>
                <ChevronDown size={16} className={`transition-transform ${isAppsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isAppsOpen && (
                <div className="pl-4 space-y-2 animate-fade-in">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/project/${project.id}`}
                      onClick={() => { setIsOpen(false); setIsAppsOpen(false); }}
                      className="glass-card rounded-xl p-3 ml-4 mr-2 block active:scale-[0.98] transition-transform"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {project.icon.includes('.') ? (
                          <img src={`${import.meta.env.BASE_URL}${project.icon}`} alt={project.name} className="w-8 h-8 rounded-lg" />
                        ) : (
                          <span className="text-2xl">{project.icon}</span>
                        )}
                        <div>
                          <h3 className="text-white font-semibold text-sm">{project.name}</h3>
                          <p className="text-gray-400 text-xs">{project.category}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 pointer-events-none">
                        {project.downloads.map((download) => (
                          <span
                            key={download.platform}
                            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium ${download.status === 'available'
                              ? 'bg-adventist-accent/30 text-adventist-accent'
                              : 'bg-gray-600/20 text-gray-500'
                              }`}
                          >
                            {download.platform === 'windows' && <Monitor size={14} />}
                            {download.platform === 'linux' && <LinuxIcon className="w-3.5 h-3.5" />}
                            {download.platform === 'mac' && <Apple size={14} />}
                            <span className="capitalize">{download.platform === 'mac' ? 'macOS' : download.platform}</span>
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
