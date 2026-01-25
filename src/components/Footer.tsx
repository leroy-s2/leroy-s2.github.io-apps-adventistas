import { Heart, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <img
              src={`${import.meta.env.BASE_URL}image.png`}
              alt="AdventLink"
              className="h-8 w-auto"
            />
            <h3 className="text-lg font-bold text-white font-serif">AdventLink</h3>
          </div>

          {/* Social */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/leroy-s2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs text-center mb-4 max-w-2xl mx-auto">
            ⚠️ Este es un <strong>proyecto personal independiente</strong> creado por un miembro de la Iglesia Adventista del Séptimo Día.
            No es un sitio oficial ni está afiliado, patrocinado o respaldado por la organización oficial de la Iglesia Adventista del Séptimo Día.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-4 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            Hecho con <Heart size={14} className="text-red-500" /> para la comunidad adventista
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © {currentYear} Proyecto Personal. Software libre y gratuito.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
