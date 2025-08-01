import { HeroButton } from "@/components/ui/hero-button";
import { Download, ArrowRight, Code, Globe, Monitor, GitBranch, Bug, Shield, Cloud, Puzzle, Brain } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Greeting */}
            <div className="mb-6 animate-fade-in">
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="block text-foreground">ROHAN GANDHI</span>
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                QA Engineer &
              </span>
              <span className="block bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                Aspiring Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Passionate about quality assurance, software development, and creating 
              meaningful digital experiences. Currently pursuing my journey from QA to 
              full-stack development.
            </p>

            {/* Call-to-Action Button */}
            <div className="flex justify-center animate-fade-in">
              <HeroButton 
                variant="outline" 
                size="lg"
                className="group"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Résumé
              </HeroButton>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 pt-8 border-t border-border/50">
              <div className="text-center animate-slide-in">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl font-bold text-primary">UCLA</div>
                <div className="text-sm text-muted-foreground">Alumni</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <Code className="w-8 h-8 text-primary/20" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <Globe className="w-6 h-6 text-primary/20" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
            <Download className="w-7 h-7 text-primary/20" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
            <GitBranch className="w-7 h-7 text-primary/20" />
          </div>
          <div className="absolute top-1/6 left-1/6 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3.8s' }}>
            <Bug className="w-5 h-5 text-primary/20" />
          </div>
          <div className="absolute bottom-1/6 right-1/6 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '4.2s' }}>
            <Shield className="w-6 h-6 text-primary/20" />
          </div>
          <div className="absolute top-2/3 left-1/4 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '3.2s' }}>
            <Cloud className="w-7 h-7 text-primary/20" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '4.8s' }}>
            <Puzzle className="w-6 h-6 text-primary/20" />
          </div>
          <div className="absolute top-1/5 right-1/5 animate-bounce" style={{ animationDelay: '2.2s', animationDuration: '3.6s' }}>
            <Brain className="w-6 h-6 text-primary/20" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;