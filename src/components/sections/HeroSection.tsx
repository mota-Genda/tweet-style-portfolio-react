
import React from "react";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const HeroSection = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
  ];

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-background">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-playfair">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Frontend Developer & UX Designer
            </h2>
            <p className="text-lg mb-8 max-w-lg text-muted-foreground">
              I build beautiful, interactive web experiences with modern
              technologies. Passionate about creating clean, user-friendly
              interfaces.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:bg-accent p-2 rounded-lg transition-colors"
                >
                  {link.icon}
                </a>
              ))}

              <a href="/resume.pdf" download>
                <Button variant="default" className="flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in">
            <div className="rounded-xl overflow-hidden shadow-xl bg-card">
              <video
                className="w-full aspect-video object-cover"
                controls
                poster="/placeholder.svg"
                preload="metadata"
              >
                <source src="/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-3 text-sm text-center text-muted-foreground">
              Watch my quick introduction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
