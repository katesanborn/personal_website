import { BookOpen, Code2, Languages, Calculator } from 'lucide-react';

export function About() {
  const skills = {
    "Programming Languages": ["Python", "C++", "JavaScript", "C", "SQL"],
    "Web Technologies": ["Angular", "HTML/CSS"],
    "Tools & Frameworks": ["Git", "Docker", "ROS"],
    "Professional Skills": ["Research", "Technical Writing", "Data Analysis", "Problem Solving"]
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-slate-900 mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              I am a second-year PhD student in Computer Science at Vanderbilt University.
            </p>
            <p className="text-slate-700 leading-relaxed">
              My research interests broadly explore the intersection of hardware and software, with a focus on cyber-physical systems. I have published work in areas including semantic data tagging, ROS visualization, and human-computer interaction.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Prior to my doctoral studies, I earned my MBA with a concentration in Business Analytics and BS in Computer Engineering and Computer Science from The University of Alabama, where I was recognized as the Outstanding Computer Science Senior.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl text-slate-900 mb-6">Skills & Expertise</h3>
            
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-slate-900 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}