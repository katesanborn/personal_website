import { Mail, Linkedin, MapPin, Github, Youtube } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-slate-900 mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <a 
            href="mailto:kate.l.sanborn@vanderbilt.edu"
            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-rose-100 rounded-full group-hover:bg-rose-200 transition-colors">
                <Mail className="w-8 h-8 text-rose-700" />
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 text-xs break-words">kate.l.sanborn@vanderbilt.edu</p>
              </div>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/kate-sanborn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-rose-100 rounded-full group-hover:bg-rose-200 transition-colors">
                <Linkedin className="w-8 h-8 text-rose-700" />
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">LinkedIn</h3>
                <p className="text-slate-600">Connect with me</p>
              </div>
            </div>
          </a>

          <a 
            href="https://github.com/katesanborn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-rose-100 rounded-full group-hover:bg-rose-200 transition-colors">
                <Github className="w-8 h-8 text-rose-700" />
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">GitHub</h3>
                <p className="text-slate-600">@katesanborn</p>
              </div>
            </div>
          </a>

          <a 
            href="https://www.youtube.com/@katesanborn5753"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-rose-100 rounded-full group-hover:bg-rose-200 transition-colors">
                <Youtube className="w-8 h-8 text-rose-700" />
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">YouTube</h3>
                <p className="text-slate-600">@katesanborn5753</p>
              </div>
            </div>
          </a>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-rose-100 rounded-full">
                <MapPin className="w-8 h-8 text-rose-700" />
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Location</h3>
                <p className="text-slate-600">Franklin, Tennessee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}