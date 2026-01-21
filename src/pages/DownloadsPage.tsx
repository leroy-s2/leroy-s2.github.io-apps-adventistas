import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Package } from 'lucide-react';

const DownloadsPage = () => {
  const availableProjects = projects.filter(p => p.status === 'available');
  const comingSoonProjects = projects.filter(p => p.status === 'coming-soon');

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mb-8 px-4 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-center animate-fade-in">
          <p className="text-yellow-400 text-sm">
            ⚠️ <strong>Proyecto personal independiente.</strong> Este sitio y sus aplicaciones no son oficiales ni están afiliados a la Iglesia Adventista del Séptimo Día. Son herramientas creadas por un miembro de la iglesia para la comunidad.
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-adventist-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="text-adventist-accent" size={36} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Centro de Descargas
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Aplicaciones gratuitas creadas con amor para la comunidad adventista. 
            Descarga de forma segura.
          </p>
        </div>

        {/* Available Projects */}
        {availableProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-serif flex items-center gap-3">
              <span className="w-2 h-8 bg-green-500 rounded-full"></span>
              Disponibles para Descargar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Coming Soon Projects */}
        {comingSoonProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 font-serif flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Próximamente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comingSoonProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-in opacity-75" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Info Box */}
        <div className="mt-16 glass-card rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-4 font-serif">📋 Información Importante</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="text-adventist-accent font-semibold mb-2">Requisitos del Sistema</h4>
              <ul className="space-y-1 text-sm">
                <li>• Windows 10/11 (64-bit)</li>
                <li>• Linux (Ubuntu 18.04+, Debian, Fedora)</li>
                <li>• macOS 10.15+ (Próximamente)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-adventist-accent font-semibold mb-2">¿Necesitas ayuda?</h4>
              <p className="text-sm">
                Si tienes problemas con la instalación o el uso de alguna aplicación, 
                no dudes en contactarnos. Estamos aquí para ayudarte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
