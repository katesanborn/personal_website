import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Publications } from './components/Publications';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/30 to-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Publications />
        <Awards />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>© 2025 Kate Sanborn. All rights reserved.</p>
      </footer>
    </div>
  );
}
