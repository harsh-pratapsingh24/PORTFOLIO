import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "JavaScript", "SQL (PostgreSQL)"],
    color: "primary" as const,
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js", "Express.js"],
    color: "secondary" as const,
  },
  {
    title: "Data Science & ML",
    skills: ["NumPy", "Pandas", "Scikit-learn", "Time Series Analysis", "Facebook Prophet", "yfinance", "Plotly"],
    color: "primary" as const,
  },
  {
    title: "Tools & Platforms",
    skills: ["Streamlit", "MongoDB", "Git & GitHub"],
    color: "secondary" as const,
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "Data Preprocessing", "EDA", "OOP"],
    color: "primary" as const,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Technical Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Technologies I
              <span className="text-gradient"> Work With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through coursework, personal projects, and hands-on experience
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass rounded-xl p-6 hover-lift"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant={category.color === "primary" ? "default" : "secondary"}
                      className="px-4 py-2 text-sm font-medium transition-transform hover:scale-105"
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
