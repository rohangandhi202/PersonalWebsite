import { ExternalLink, Github, Code, Database, Brain, Smartphone, UserCircle, MapPin } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Projects = () => {
  const projects = [
    {
      title: "AI + Python Digit Recognition",
      description: "Built a digit recognition system using the scikit-learn dataset to compare multiple machine learning models.",
      tech: ["Python", "Sci-Kit", "Machine Learning"],
      icon: <img src="/python.jpeg" alt="Python Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/rohangandhi202/AI-Python"
    },
    {
      title: "Data Pipeline (Basketball Reference)",
      description: "Full data pipeline that scrapes, cleans, and structures live NBA stats from Basketball Reference, preparing the data for analysis and modeling",
      tech: ["Python", "Data Pipeline", "Web Scraping"],
      icon: <img src="/bball.webp" alt="Bball Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/rohangandhi202/Data-Pipeline"
    },
    {
      title: "Snowflake + SQL Basketball Data",
      description: "End-to-end NBA analytics pipeline using Snowflake and SQL to load, query, and analyze player stats for performance insights.",
      tech: ["SQL", "Snowflake", "Data Analytics"],
      icon: <img src="/snowflake.jpg" alt="snowflake Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/rohangandhi202/SQL-SnowFlake"
    },
    {
      title: "Morse Code Translator",
      description: "Implements a hardware-software system on an FPGA that decodes Morse signals via buttons and a keypad into readable text with interactive game functionality.",
      tech: ["Embedded Systems", "Verilog", "SDK"],
      icon: <img src="/morse2.png" alt="Morse Logo" className="w-8 h-8 object-cover" />,
      demo: "https://docs.google.com/presentation/d/1BORb1QtzTYJ1w2D4dRg4Tv3IdFnGXkOB/edit?usp=sharing&ouid=116843038587369030320&rtpof=true&sd=true"
    },
    {
      title: "Energy Delay Product Optimization",
      description: "Focused on improving the balance between power consumption and processing speed in digital circuits",
      tech: ["Digital Electronics", "Cadence"],
      icon: <img src="/ece.jpeg" alt="ECE Logo" className="w-8 h-8 object-cover" />,
      demo: "https://docs.google.com/document/d/1I9O8HPGuq7A6mIrtsxfh47pdeKs_ogL45R1BPkcFkF4/edit?usp=sharing"
    },
    {
      title: "Chief Extension",
      description: "Developed a Chrome extension that enables employees to export Saved Search data directly to Google Sheets.",
      tech: ["JSON", "Chrome Extension", "Web APIs"],
      icon: <img src="/chief.jpeg" alt="Chief Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/rohangandhi202/ChiefChromeExtenstion"
    },
    {
      title: "BSwipe",
      description: "A marketplace that lets UCLA students easily buy and sell meal swipes for affordable campus dining.",
      tech: ["JavaScript", "CSS", "MERN Stack"],
      icon: <img src="/bswipe.png" alt="BSwipe Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/vikrampuliyadi/swipes_app"
    },
    {
      title: "BResearch",
      description: "Student-led platform at UCLA that connects undergraduates with research opportunities across campus.",
      tech: ["React", "Node.js", "Tailwind.css"],
      icon: <img src="/bresearch.png" alt="BResearch Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/ucladevx/bresearch",
      demo: "https://www.instagram.com/bresearch_ucla/"
    },
    {
      title: "ClothesLine",
      description: "Mobile application that allows UCLA students to buy and rent clothes",
      tech: ["App Development", "Project Management"],
      icon: <img src="/clothes.png" alt="ClothesLine Logo" className="w-8 h-8 object-cover" />,
      demo: "https://docs.google.com/presentation/d/1tp2lGsl1PPEt2aSWsbM0JS-tdUQpRCYguyz1I_t0aRY/edit?usp=sharing"
    },
    {
      title: "Pong",
      description: "Classic Pong game implementation with modern features.",
      tech: ["Python", "Game Development"],
      icon: <img src="/pong.png" alt="Pong Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/rohangandhi202/PersonalProject-Pong"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with current temperature and forecasting for all locations",
      tech: ["JavaScript", "Weather API", "HTML"],
      icon: <img src="/weather.webp" alt="Weather Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/rohangandhi202/PersonalProject-WeatherApp"
    },
    {
      title: "RecommendIFY",
      description: "API that recommends new artists and songs based on your saved music.",
      tech: ["Pug", "Spotify API", "CSS"],
      icon: <img src="/spotify.png" alt="Spotify Logo" className="w-8 h-8 object-cover" />,
      github: "https://github.com/rohangandhi202/PersonalProject-RecommendIFY"
    },
    {
      title: "Local Find",
      description: "Website that recommended Local restuarants and food to share with friends",
      tech: ["Web Development", "Project Management"],
      icon: <MapPin className="w-6 h-6" />,
      github: "https://github.com/tyu-hi/LocalFind",
      demo: "https://docs.google.com/presentation/d/11NFOhnzzSPHhyCm773oVj50ZoiB7Sern/edit?usp=sharing&ouid=102845754310807717254&rtpof=true&sd=true"
    },
    {
      title: "Quadcopter",
      description: "Designed and built a quadcopter for High School class and attached a GoPro to record footage",
      tech: ["Design and Technology", "Electronics"],
      icon: <img src="/ece.jpeg" alt="Quadcopter Logo" className="w-8 h-8 object-cover" />,
      demo: "https://docs.google.com/presentation/d/1hOG2VuuM7dEhe8NNy-I6gCsbajCTkFy4Fp7ECbdlRw0/edit?usp=sharing"
    },
    {
      title: "High School Website Project",
      description: "A website about myself I made during high school.",
      tech: ["HTML", "CSS"],
      icon: <UserCircle className="w-6 h-6" />,
      github: "https://github.com/rohangandhi202/2021Spring-WebsiteProject"
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
            A collection of projects spanning web development, data analysis, and more
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HeroButton 
              variant="outline" 
              onClick={() => window.open('https://github.com/rohangandhi202', '_blank')}
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
