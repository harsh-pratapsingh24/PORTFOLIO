import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "NutriGuard",
    subtitle: "AI Nutritional Analysis App",
    year: "2025",
    description:
      "A consumer-focused application designed to identify misleading food labels and provide accurate nutritional insights. Features real-time dietary tracking, calorie estimation, and AI-powered healthier alternatives.",
    highlights: [
      "Top Project Recognition at BMU",
      "ML-powered nutritional analysis",
      "Personalized dietary guidance",
    ],
    techStack: ["Python", "Streamlit", "ML APIs"],
    github: "https://github.com/harsh-pratapsingh24",
    demo: "https://harshpratap-nutriguard.streamlit.app/",
  },
  {
    title: "Stock Price Forecasting",
    subtitle: "ML-Based Prediction System",
    year: "2025",
    description:
      "A predictive modeling application using Facebook Prophet for time-series analysis. Users can select stocks, visualize trends, seasonality patterns, and generate future price predictions with 90%+ backtesting accuracy.",
    highlights: [
      "50+ concurrent ticker support",
      "30-day forecasts with Prophet",
      "Interactive Plotly visualizations",
    ],
    techStack: ["Python", "Prophet", "yfinance", "Plotly", "Streamlit"],
    github: "https://github.com/harsh-pratapsingh24",
    demo: "https://stock-forecasting-harsh-pratapsingh24.streamlit.app/",
  },
  {
    title: "Deadline Buddy",
    subtitle: "Smart Task Tracking App",
    year: "2024",
    description:
      "A smart college task-tracking web application that helps students stay on top of assignments, quizzes, and exams. Features a clean dashboard with subject-wise organization and an intuitive checklist system.",
    highlights: [
      "Subject-wise task organization",
      "Clean dashboard interface",
      "MongoDB-powered persistence",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/harsh-pratapsingh24",
    demo: "https://deadline-buddyy-z6ckn5ggi-harsh-pratapsingh24s-projects.vercel.app/login",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Projects That
              <span className="text-gradient"> Showcase Impact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world applications demonstrating technical depth and problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass border-border/50 hover-lift group flex flex-col overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/80">{project.subtitle}</p>
                </CardHeader>

                <CardContent className="flex-1 pb-4">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
