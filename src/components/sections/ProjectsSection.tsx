
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform built with React and Node.js, featuring product filtering, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://yourdemosite.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity app with drag-and-drop task organization, reminders, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://yourdemosite.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that provides real-time forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://yourdemosite.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects and skills, built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["React", "Tailwind CSS", "Vite", "TypeScript"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourdemosite.com",
    },
  ];

  return (
    <section id="projects" className="bg-background">
      <div className="container-section">
        <h2 className="section-title">Projects</h2>
        <p className="max-w-3xl mb-12 text-muted-foreground text-lg">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-primary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 pt-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="flex gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
