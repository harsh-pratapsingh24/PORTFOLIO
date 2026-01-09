import { ArrowDown, Download, FolderOpen, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to Internship Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up opacity-0 stagger-1">
            Harsh Pratap
            <span className="text-gradient"> Singh</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up opacity-0 stagger-2">
            Computer Science Undergraduate | Web & ML Developer | Problem Solver
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 stagger-3">
            <Button size="lg" className="gap-2 animate-pulse-glow" asChild>
              <a href="/Harsh_Singh_Resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="#projects">
                <FolderOpen className="h-4 w-4" />
                View Projects
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0 stagger-4">
            <a
              href="https://github.com/harsh-pratapsingh24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-lift hover:border-primary/50"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/harshpratapsingh333"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-lift hover:border-primary/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:harsh.psingh2005@gmail.com"
              className="p-3 rounded-full glass hover-lift hover:border-primary/50"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};
