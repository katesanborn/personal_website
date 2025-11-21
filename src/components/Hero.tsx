import { ChevronDown } from 'lucide-react';
import headshot from 'figma:asset/8ce4c23de139776c7552aeca798c262428b05591.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-rose-50 via-white to-slate-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-rose-100">
              <img 
                src={headshot} 
                alt="Kate Sanborn"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="inline-block px-4 py-2 bg-rose-100 text-rose-800 rounded-full mb-4">
            PhD Student in Computer Science
          </div>
          
          <h1 className="text-6xl md:text-7xl text-slate-900">
            Kate Sanborn
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            Researching at the intersection of computer science, software engineering, and intelligent systems
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-6">
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm text-slate-700">Vanderbilt University</span>
          </div>
        </div>
      </div>
    </section>
  );
}