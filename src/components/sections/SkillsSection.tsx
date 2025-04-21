import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: "frontend" | "backend" | "design" | "other";
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: "HTML",
      level: 90,
      icon: "💻",
      category: "frontend",
    },
    {
      name: "CSS/SCSS",
      level: 85,
      icon: "🎨",
      category: "frontend",
    },
    {
      name: "JavaScript",
      level: 90,
      icon: "📱",
      category: "frontend",
    },
    {
      name: "TypeScript",
      level: 85,
      icon: "⚙️",
      category: "frontend",
    },
    {
      name: "React",
      level: 90,
      icon: "⚛️",
      category: "frontend",
    },
    {
      name: "Redux",
      level: 80,
      icon: "🔄",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: "🌬️",
      category: "frontend",
    },
    {
      name: "Node.js",
      level: 75,
      icon: "🟢",
      category: "backend",
    },
    {
      name: "Express",
      level: 70,
      icon: "🚂",
      category: "backend",
    },
    {
      name: "MongoDB",
      level: 65,
      icon: "🍃",
      category: "backend",
    },
    {
      name: "UI/UX Design",
      level: 75,
      icon: "🎯",
      category: "design",
    },
    {
      name: "Figma",
      level: 80,
      icon: "🖌️",
      category: "design",
    },
  ];

  const groupedSkills: Record<string, Skill[]> = skills.reduce(
    (acc, skill) => {
      const { category } = skill;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  const categories = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    design: "Design",
    other: "Other Skills",
  };

  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".progress-bar");
            progressBars.forEach((bar) => {
              bar.classList.add("animate-progress");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container-section">
        <h2 className="section-title">Skills</h2>
        <p className="max-w-3xl mb-12 text-muted-foreground text-lg">
          I've worked with a variety of technologies and tools. Here's an
          overview of my technical skills and proficiency levels.
        </p>

        <div className="grid gap-8" ref={skillsRef}>
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6">
                {categories[category as keyof typeof categories]}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <Card key={skill.name} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <h4 className="text-lg font-medium">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out progress-bar w-0"
                          style={{ "--target-width": `${skill.level}%` } as any}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span>Beginner</span>
                        <span>Advanced</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
