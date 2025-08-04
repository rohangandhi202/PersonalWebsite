import { HeroButton } from "@/components/ui/hero-button";
import { Download, ArrowRight, Code, Globe, Monitor, GitBranch, Bug, Shield, Cloud, Puzzle, Brain } from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const fullText = "Computer Scientist & Engineer";
  
  // Subtitle paragraphs split into words
  const subtitle1 = "Driven and ambitious Engineer with hands on Quality Assurance Engineering experience".split(" ");
  const subtitle2 = "Built a strong technical foundation at UCLA, earning a degree in Computer Science & Engineering".split(" ");
  const subtitle3 = "Seeking an entry-level role in software engineering or product management to drive meaningful product improvements".split(" ");
  const buttonText = "Download Resume".split(" ");
  
  useEffect(() => {
    // Make name bounce in after a short delay
    const nameTimer = setTimeout(() => {
      setNameVisible(true);
    }, 500); // 0.5 seconds after page load

    // Calculate delay for typewriter (give time for name to bounce in)
    const startDelay = 2800; // 2.8 seconds 
    
    const delayTimer = setTimeout(() => {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index <= fullText.length) {
          setTypewriterText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeTimer);
          // Start subtitle animations after typewriter completes
          setTimeout(() => setShowSubtitles(true), 200);
        }
      }, 150); // Adjust typing speed here (lower = faster)
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(nameTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center pb-8">
            {/* Animated Greeting */}
            <div className="mb-6 animate-fade-in">
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ lineHeight: '1.1' }}>
              <span className={`block text-foreground transition-all duration-700 ${nameVisible ? 'animate-bounce opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                ROHAN GANDHI
              </span>
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent min-h-[1.2em]" style={{ lineHeight: '1.2' }}>
                {typewriterText}
                <span className="animate-blink">|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-5xl mx-auto leading-relaxed">
              {showSubtitles && subtitle1.map((word, index) => (
                <span
                  key={`p1-${index}`}
                  className="inline-block animate-fade-in mr-1"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {showSubtitles && subtitle2.map((word, index) => (
                <span
                  key={`p2-${index}`}
                  className="inline-block animate-fade-in mr-1"
                  style={{
                    animationDelay: `${(subtitle1.length + index) * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {showSubtitles && subtitle3.map((word, index) => (
                <span
                  key={`p3-${index}`}
                  className="inline-block animate-fade-in mr-1"
                  style={{
                    animationDelay: `${(subtitle1.length + subtitle2.length + index) * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {word}
                </span>
              ))}
            </p>

            {/* Call-to-Action Button */}
            <div className="flex justify-center">
              <HeroButton 
                variant="outline" 
                size="lg"
                className="group"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                {showSubtitles && buttonText.map((word, index) => (
                  <span
                    key={`btn-${index}`}
                    className="inline-block animate-fade-in mr-1"
                    style={{
                      animationDelay: `${(subtitle1.length + subtitle2.length + subtitle3.length + index) * 0.2}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </HeroButton>
            </div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-3/4 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <Code className="w-8 h-8 text-primary/20" />
          </div>
          <div className="absolute top-1/3 right-3/4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <Globe className="w-6 h-6 text-primary/20" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '3.2s' }}>
            <Download className="w-7 h-7 text-primary/20" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '4.8s' }}>
            <Puzzle className="w-6 h-6 text-primary/20" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;