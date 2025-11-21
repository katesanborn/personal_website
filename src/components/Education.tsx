import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItemProps {
  school: string;
  degree: string;
  field?: string;
  duration: string;
}

function EducationItem({ school, degree, field, duration }: EducationItemProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start gap-6">
        <div className="p-3 bg-rose-100 rounded-lg flex-shrink-0">
          <GraduationCap className="w-6 h-6 text-rose-700" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl text-slate-900 mb-1">{degree}</h3>
          {field && <p className="text-slate-600 mb-2">{field}</p>}
          <p className="text-lg text-rose-700 mb-3">{school}</p>
          
          <div className="flex items-center gap-1 text-slate-600">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  const education = [
    {
      school: "Vanderbilt University",
      degree: "Doctor of Philosophy (PhD)",
      field: "Computer Science",
      duration: "August 2024 - May 2029"
    },
    {
      school: "The University of Alabama",
      degree: "Master of Business Administration (MBA)",
      field: "Concentration in Business Analytics",
      duration: "May 2022 - May 2024"
    },
    {
      school: "The University of Alabama",
      degree: "Bachelor of Science (BS)",
      field: "Double Major: Computer Engineering & Computer Science | Minors: Mathematics & Spanish",
      duration: "August 2019 - May 2023"
    },
    {
      school: "Franklin High School",
      degree: "High School Diploma",
      duration: "2015 - 2019"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-slate-900 mb-12">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}