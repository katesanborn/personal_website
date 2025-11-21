import { GraduationCap, Mail, Linkedin } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-rose-700" />
            <span className="font-semibold text-slate-900">Kate Sanborn</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-rose-700 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-rose-700 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('education')} className="text-slate-700 hover:text-rose-700 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('publications')} className="text-slate-700 hover:text-rose-700 transition-colors">
              Publications
            </button>
            <button onClick={() => scrollToSection('awards')} className="text-slate-700 hover:text-rose-700 transition-colors">
              Awards
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-rose-700 transition-colors">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:klsanborn1@crimson.ua.edu" className="text-slate-600 hover:text-rose-700 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/kate-sanborn" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-rose-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
