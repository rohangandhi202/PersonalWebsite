import { ExternalLink, Github, Code, Database, Brain, Smartphone } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Projects = () => {
  const projects = [
    {
      title: "BSwipe",
      description: "Basketball analytics and scouting platform with swipe-based interface",
      tech: ["React", "TypeScript", "Basketball Analytics"],
      icon: <Smartphone className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Snowflake + SQL Basketball Data",
      description: "Advanced basketball statistics analysis using Snowflake data warehouse",
      tech: ["SQL", "Snowflake", "Data Analytics", "Sports"],
      icon: <Database className="w-6 h-6" />,
      github: "#"
    },
    {
      title: "Data Pipeline (Basketball Reference)",
      description: "Automated data extraction and processing pipeline from Basketball Reference",
      tech: ["Python", "Data Pipeline", "Web Scraping", "ETL"],
      icon: <Code className="w-6 h-6" />,
      github: "#"
    },
    {
      title: "AI + Python Digit Recognition",
      description: "Machine learning model for handwritten digit recognition using neural networks",
      tech: ["Python", "TensorFlow", "Machine Learning", "AI"],
      icon: <Brain className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "BResearch",
      description: "Basketball research and analytics dashboard for advanced metrics",
      tech: ["React", "D3.js", "Sports Analytics"],
      icon: <Database className="w-6 h-6" />,
      github: "#"
    },
    {
      title: "Chief Extension",
      description: "Browser extension for Chief platform enhancement and productivity",
      tech: ["JavaScript", "Chrome Extension", "Web APIs"],
      icon: <Code className="w-6 h-6" />,
      github: "#"
    },
    {
      title: "Pong",
      description: "Classic Pong game implementation with modern features",
      tech: ["JavaScript", "Canvas API", "Game Development"],
      icon: <Code className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with beautiful UI and forecasting",
      tech: ["React", "Weather API", "CSS3"],
      icon: <Code className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "RecommendIFY",
      description: "Spotify-based music recommendation system using collaborative filtering",
      tech: ["Python", "Spotify API", "Recommendation Engine"],
      icon: <Brain className="w-6 h-6" />,
      github: "#"
    },
    {
      title: "High School Website Project",
      description: "Full website development project completed during high school",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: <Code className="w-6 h-6" />,
      github: "#"
    },
    {
      title: "Morse Code Translator",
      description: "Bidirectional Morse code translator with audio functionality",
      tech: ["JavaScript", "Web Audio API", "DOM"],
      icon: <Code className="w-6 h-6" />,
      github: "#",
      demo: "#"
    },
    {
      title: "Energy Delay Product Optimization",
      description: "Research project optimizing energy-delay trade-offs in computing systems",
      tech: ["Python", "Optimization", "Research"],
      icon: <Brain className="w-6 h-6" />,
      github: "#"
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div 
      className="group bg-card hover:bg-card/80 rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Icon & Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {project.icon}
        </div>
        
        <div className="flex gap-2">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Details */}
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string, techIndex: number) => (
          <span 
            key={techIndex}
            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border hover:border-primary/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-inter pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of projects spanning web development, data analysis, machine learning, and more
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HeroButton 
              variant="outline" 
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </HeroButton>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
