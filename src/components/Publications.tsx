import { FileText, ExternalLink, Calendar, Users, Copy, Check, Github } from 'lucide-react';
import { useState } from 'react';

interface PublicationProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  url?: string;
  githubLinks?: string[];
  bibtex: string;
}

function PublicationItem({ title, authors, venue, year, doi, url, githubLinks, bibtex }: PublicationProps) {
  const [copied, setCopied] = useState(false);
  const link = url || (doi ? `https://doi.org/${doi}` : undefined);
  
  const handleCopyBibtex = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Fallback copy method for environments where clipboard API is blocked
    const textArea = document.createElement('textarea');
    textArea.value = bibtex;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    textArea.remove();
  };
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-rose-100 rounded-lg flex-shrink-0">
          <FileText className="w-5 h-5 text-rose-700" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-3">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="group">
                <h3 className="text-slate-900 group-hover:text-rose-700 transition-colors">
                  {title}
                </h3>
              </a>
            ) : (
              <h3 className="text-slate-900">{title}</h3>
            )}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleCopyBibtex}
                className="p-1.5 rounded hover:bg-rose-100 transition-colors"
                title="Copy BibTeX"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400 hover:text-rose-700" />
                )}
              </button>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-rose-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors" />
                </a>
              )}
              {githubLinks && githubLinks.map((githubLink, index) => (
                <a href={githubLink} key={index} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-rose-100 transition-colors">
                  <Github className="w-4 h-4 text-slate-400 hover:text-rose-700 transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-slate-600">
              <Users className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{authors}</span>
            </div>
            
            <div className="text-sm text-slate-700">
              {venue}
            </div>
            
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{year}</span>
            </div>
            
            {doi && (
              <div className="text-xs text-slate-500 font-mono break-all">
                DOI: {doi}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Publications() {
  const publications = [
    {
      title: "Visual Modeling of ROS Launch Files",
      authors: "Kate Sanborn, Vakul Nath, Tanuj Kenchannavar, Jonathan Sprinkle",
      venue: "Proceedings of the 7th Workshop on Design Automation for CPS and IoT (DESTION '25)",
      year: "2025",
      doi: "10.1145/3722573.3727832",
      url: "https://doi.org/10.1145/3722573.3727832",
      githubLinks: [
        "https://github.com/katesanborn/mic_fall24_ros_continued",
        "https://github.com/katesanborn/ROSConfigGenerator"
      ],
      bibtex: `@inproceedings{sanborn2025visual,
  title={Visual Modeling of ROS Launch Files},
  author={Sanborn, Kate and Nath, Vakul and Kenchannavar, Tanuj and Sprinkle, Jonathan},
  booktitle={Proceedings of the 7th Workshop on Design Automation for CPS and IoT},
  year={2025},
  doi={10.1145/3722573.3727832}
}`
    },
    {
      title: "Intelligent Structuring and Semantic Mapping of Dash Camera Footage and CAN Bus Data",
      authors: "Alex Richardson, Kate Sanborn, Jonathan Sprinkle",
      venue: "2022 2nd Workshop on Data-Driven and Intelligent Cyber-Physical Systems for Smart Cities Workshop (DI-CPS)",
      year: "2022",
      doi: "10.1109/DI-CPS56137.2022.00010",
      bibtex: `@inproceedings{richardson2022intelligent,
  title={Intelligent Structuring and Semantic Mapping of Dash Camera Footage and CAN Bus Data},
  author={Richardson, Alex and Sanborn, Kate and Sprinkle, Jonathan},
  booktitle={2022 2nd Workshop on Data-Driven and Intelligent Cyber-Physical Systems for Smart Cities Workshop (DI-CPS)},
  year={2022},
  doi={10.1109/DI-CPS56137.2022.00010}
}`
    },
    {
      title: "Semantic Tagging of CAN and Dash Camera Data from Naturalistic Drives",
      authors: "Kate Sanborn, Alex Richardson, Jonathan Sprinkle",
      venue: "2022 ACM/IEEE 13th International Conference on Cyber-Physical Systems (ICCPS)",
      year: "2022",
      doi: "10.1109/ICCPS54341.2022.00047",
      bibtex: `@inproceedings{sanborn2022semantic,
  title={Semantic Tagging of CAN and Dash Camera Data from Naturalistic Drives},
  author={Sanborn, Kate and Richardson, Alex and Sprinkle, Jonathan},
  booktitle={2022 ACM/IEEE 13th International Conference on Cyber-Physical Systems (ICCPS)},
  year={2022},
  doi={10.1109/ICCPS54341.2022.00047}
}`
    },
    {
      title: "AirFlute: a virtual flute and tutoring system",
      authors: "Kate Sanborn",
      venue: "Proceedings of the 2021 ACM Southeast Conference (ACMSE '21)",
      year: "2021",
      doi: "10.1145/3409334.3452087",
      url: "https://doi.org/10.1145/3409334.3452087",
      githubLinks: ["https://github.com/katesanborn/AirFlute"],
      bibtex: `@inproceedings{sanborn2021airflute,
  title={AirFlute: a virtual flute and tutoring system},
  author={Sanborn, Kate},
  booktitle={Proceedings of the 2021 ACM Southeast Conference},
  year={2021},
  doi={10.1145/3409334.3452087}
}`
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-white/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-slate-900 mb-12">Publications</h2>
        
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <PublicationItem key={index} {...pub} />
          ))}
        </div>
      </div>
    </section>
  );
}