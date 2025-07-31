import { Mail, Linkedin, Github, Download, MapPin, Coffee } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "your@email.com",
      href: "mailto:your@email.com",
      description: "Best way to reach me for opportunities"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/yourprofile",
      description: "Professional networking and updates"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/yourprofile",
      description: "Explore my projects and contributions"
    },
    {
      icon: <Download className="w-6 h-6" />,
      label: "Resume",
      value: "Download PDF",
      href: "/resume.pdf",
      description: "Complete professional background"
    }
  ];

  const ContactCard = ({ method, index }: { method: any, index: number }) => (
    <a
      href={method.href}
      target={method.href.startsWith('http') ? '_blank' : '_self'}
      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
      className="group bg-card hover:bg-card/80 rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant animate-fade-in block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
          {method.icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
            {method.label}
          </h3>
          <p className="text-primary text-sm font-medium mb-2">
            {method.value}
          </p>
          <p className="text-muted-foreground text-sm">
            {method.description}
          </p>
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen bg-background font-inter pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me & <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Contact</span>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Bio Section */}
          <div className="mb-16">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  <Coffee className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Who I Am
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a passionate QA Engineer and aspiring full-stack developer currently studying at UCLA. 
                      My journey began with a curiosity about how software works and evolved into a deep 
                      appreciation for both the quality assurance process and the art of building robust applications.
                    </p>
                    
                    <p>
                      Through internships at companies like Hudl, Chief, and TechFabric, I've gained hands-on 
                      experience in software testing, development workflows, and collaborative problem-solving. 
                      I'm particularly drawn to the intersection of sports technology, data analytics, and web development.
                    </p>
                    
                    <p>
                      When I'm not coding or testing, you can find me analyzing basketball statistics, 
                      contributing to student organizations, or exploring the latest developments in 
                      machine learning and web technologies.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Los Angeles, CA
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4" />
                      Always learning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Let's Connect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <ContactCard key={index} method={method} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;