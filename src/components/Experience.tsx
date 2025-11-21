import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

function ExperienceItem({ company, role, duration, location, description }: ExperienceItemProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-6">
        <div className="p-3 bg-rose-100 rounded-lg flex-shrink-0">
          <Briefcase className="w-6 h-6 text-rose-700" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl text-slate-900 mb-1">{role}</h3>
          <p className="text-lg text-rose-700 mb-3">{company}</p>
          
          <div className="flex flex-wrap gap-4 mb-4 text-slate-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          
          {description.length > 0 && (
            <ul className="space-y-2">
              {description.map((item, index) => (
                <li key={index} className="text-slate-700 flex items-start gap-2">
                  <span className="text-rose-700 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Institute for Software Integrated Systems, Vanderbilt University",
      role: "Graduate Research Assistant",
      duration: "August 2024 - Present",
      location: "Nashville, Tennessee",
      description: []
    },
    {
      company: "Dynetics, Inc.",
      role: "Technical Intern",
      duration: "May 2024 - August 2024",
      location: "Huntsville, Alabama",
      description: []
    },
    {
      company: "Institute of Data & Analytics",
      role: "Graduate Research Assistant",
      duration: "October 2023 - May 2024",
      location: "Tuscaloosa, Alabama",
      description: [
        "Recorded and maintained inventory data to develop a comprehensive database for food bank research and analysis",
        "Supervised and assisted student study participants throughout the food preference research study",
        "Conducted advanced data cleaning, analysis, and summarization of study results using Excel"
      ]
    },
    {
      company: "Dynetics, Inc.",
      role: "Technical Intern",
      duration: "May 2023 - August 2023",
      location: "Huntsville, Alabama",
      description: [
        "Built the front end and back end of a simulation analysis software tool using PyQt, Pandas, and Matplotlib libraries",
        "Presented development and applications of software tool",
        "Conducted regular progress meetings with supervisor, incorporating feedback to drive appropriate adjustments"
      ]
    },
    {
      company: "Ulta Beauty",
      role: "IT Process Automation Intern",
      duration: "June 2022 - August 2022",
      location: "Remote",
      description: [
        "Automated tax process using Blue Prism, reducing manual processing time by 20 hours annually",
        "Created documentation to provide support for automation throughout the project lifecycle",
        "Researched and presented a solution to a business problem as a team of interns"
      ]
    },
    {
      company: "University of Arizona",
      role: "Cognitive and Autonomous Testbed Vehicle REU Participant",
      duration: "June 2021 - August 2021",
      location: "Remote",
      description: [
        "Created Python scripts to annotate 25 hours of dash camera footage with sensor data and produce 17 hours of useful clips",
        "Worked with team to meet deadlines, set goals, and present findings",
        "Researched and learned new skills and tools to complete assignments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-slate-900 mb-12">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}