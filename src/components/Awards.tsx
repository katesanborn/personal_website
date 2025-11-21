import { Award, Trophy, Star, ExternalLink, Calendar, Building2 } from 'lucide-react';

interface AwardItemProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
  icon: 'award' | 'trophy' | 'star';
}

function AwardItem({ title, issuer, date, description, link, icon }: AwardItemProps) {
  const IconComponent = icon === 'trophy' ? Trophy : icon === 'star' ? Star : Award;
  
  const content = (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all h-full">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-rose-100 rounded-lg flex-shrink-0">
          <IconComponent className="w-6 h-6 text-rose-700" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-slate-900">{title}</h3>
            {link && <ExternalLink className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors flex-shrink-0" />}
          </div>
          
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-slate-600">
              <Building2 className="w-4 h-4" />
              <span className="text-sm">{issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
          
          {description && (
            <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        {content}
      </a>
    );
  }

  return content;
}

export function Awards() {
  const awards = [
    {
      title: "Provost Graduate Fellowship",
      issuer: "Vanderbilt University",
      date: "2024",
      description: "Prestigious fellowship awarded to outstanding incoming doctoral students demonstrating exceptional academic achievement and research potential.",
      icon: "trophy" as const
    },
    {
      title: "Capstone Engineering Society Outstanding Computer Science Senior",
      issuer: "Capstone Engineering Society",
      date: "April 2023",
      description: "An outstanding student is selected from each department in the College of Engineering based on academic performance, professional and technical activities, College leadership, external leadership and other activities.",
      icon: "trophy" as const
    },
    {
      title: "HKN Outstanding Junior Award",
      issuer: "Department of Electrical and Computer Engineering",
      date: "April 2022",
      icon: "star" as const
    },
    {
      title: "Outstanding Computer Science Junior",
      issuer: "Department of Computer Science",
      date: "April 2022",
      icon: "star" as const
    },
    {
      title: "NCWIT Collegiate Award Finalist",
      issuer: "National Center for Women & Information Technology",
      date: "December 2021",
      link: "https://www.aspirations.org/2022-ncwit-collegiate-award-finalists-announced",
      icon: "trophy" as const
    },
    {
      title: "Excellence in Research",
      issuer: "Undergraduate Research and Creative Activity Conference",
      date: "April 2021",
      icon: "star" as const
    },
    {
      title: "Tarif Haque Award",
      issuer: "Department of Computer Science",
      date: "April 2021",
      icon: "award" as const
    },
    {
      title: "First Place in Undergraduate Presentation Competition",
      issuer: "ACM Mid-Southeast Conference",
      date: "November 2020",
      description: "First place in undergraduate competition for presentation on AirFlute: A Virtual Flute and Tutoring System",
      link: "https://www.youtube.com/watch?v=nJ5HKG6dJSw&t=4s",
      icon: "trophy" as const
    },
    {
      title: "National Merit Scholar",
      issuer: "National Merit Scholarship Corporation",
      date: "January 2019",
      icon: "trophy" as const
    }
  ];

  return (
    <section id="awards" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-slate-900 mb-12">Honors & Awards</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <AwardItem key={index} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
}