
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead the frontend development of the company's main SaaS product, resulting in a 30% increase in user engagement.",
        "Implemented complex UI components using React, TypeScript and Tailwind CSS, improving load times by 40%.",
        "Mentored junior developers and conducted code reviews to maintain code quality and best practices.",
        "Collaborated with UX/UI designers to implement responsive designs across all devices."
      ]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Innovations LLC",
      duration: "Mar 2020 - Dec 2021",
      location: "New York, NY",
      description: [
        "Developed and maintained multiple client-facing web applications using React and Redux.",
        "Refactored legacy code to modern React standards, reducing bundle size by 35%.",
        "Implemented automated testing with Jest and React Testing Library, achieving 80% code coverage.",
        "Worked in an agile team environment, participating in sprint planning and retrospectives."
      ]
    },
    {
      id: 3,
      role: "Web Developer Intern",
      company: "StartUp Vision",
      duration: "Jun 2019 - Feb 2020",
      location: "Boston, MA",
      description: [
        "Assisted in the development of responsive websites for various clients using HTML, CSS, and JavaScript.",
        "Created interactive UI components that improved user experience.",
        "Collaborated with senior developers to troubleshoot and fix bugs.",
        "Participated in client meetings and translated requirements into technical tasks."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-white">
      <div className="container-section">
        <h2 className="section-title">Experience</h2>
        <p className="max-w-3xl mb-12 text-muted-foreground text-lg">
          My professional journey has equipped me with valuable skills and 
          experiences in software development.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-muted -ml-px md:ml-0"></div>

          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:ml-auto md:pr-0 md:pl-10" : "md:mr-auto md:pl-0 md:pr-10"
              } md:w-1/2 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="hidden md:block absolute top-6 -right-6 w-6 h-0.5 bg-muted"></div>
              <div className="hidden md:block absolute top-6 -left-6 w-6 h-0.5 bg-muted"></div>
              
              <div className={`absolute top-6 ${
                index % 2 === 0 ? "md:-left-3 -left-3" : "md:-right-3 -left-3"
              } h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-md`}>
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary">{experience.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between mt-1 mb-4">
                    <p className="font-medium">{experience.company}</p>
                    <p className="text-muted-foreground">{experience.duration}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">{experience.location}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-foreground">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
