import { Code2, GraduationCap, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: GraduationCap,
    title: "CS Undergraduate",
    description: "B.Tech in CSE at BML Munjal University with 8.06 CGPA",
  },
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description: "Building end-to-end web applications with modern tech stacks",
  },
  {
    icon: Lightbulb,
    title: "ML Enthusiast",
    description: "Applying machine learning to solve real-world problems",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Strong foundations in DSA and competitive programming",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Passionate About Building
              <span className="text-gradient"> Impactful Solutions</span>
            </h2>
          </div>

          {/* About Text */}
          <div className="glass rounded-2xl p-8 mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Computer Science undergraduate at{" "}
              <span className="text-foreground font-medium">BML Munjal University</span>,
              with a passion for building software that makes a difference. My journey spans
              from crafting intuitive web applications with Node.js and Express to developing
              machine learning models for real-world predictions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              I believe in writing clean, maintainable code and constantly push myself to learn
              new technologies. Currently, I'm focused on exploring the intersection of
              <span className="text-foreground font-medium"> web development</span> and
              <span className="text-foreground font-medium"> data science</span>, building
              projects that demonstrate both technical depth and practical utility.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="glass border-border/50 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
