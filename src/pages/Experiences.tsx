import { GraduationCap, Building, Users, Code } from "lucide-react";

const Experiences = () => {
  const schoolExperiences = [
    {
      institution: "UCLA",
      role: "September 2021 - June 2025",
      description: "Pursuing degree with focus on computer science and engineering principles",
      icon: <img src="/UclaLogo.png" alt="UCLA Logo" className="w-8 h-8 object-fill" />,
      period: "Alumni"
    },
    {
      institution: "Bartlett High School", 
      role: "September 2017 - June 2021",
      description: "Foundation in academics and early technology interests",
      icon: <GraduationCap className="w-6 h-6" />,
      period: "Alumni"
    }
  ];

  const internshipExperiences = [
    {
      company: "Hudl",
      role: "June 2024 - May 2025",
      description: "Sports technology platform - QA testing and development support",
      tech: ["QA", "Testing", "Sports Tech"],
      icon: <Building className="w-6 h-6" />,
      period: "Hardware QA Engineering Intern"
    },
    {
      company: "Hudl",
      role: "June 2023 - September 2023",
      description: "Sports technology platform - QA testing and development support",
      tech: ["QA", "Testing", "Sports Tech"],
      icon: <Building className="w-6 h-6" />,
      period: "Software QA Engineering Intern"
    },
    {
      company: "Chief",
      role: "December 2022 - January 2023", 
      description: "Professional network - technical and development work",
      tech: ["Development", "Web Tech"],
      icon: <Building className="w-6 h-6" />,
      period: "Information Technology Intern"
    },
    {
      company: "TechFabric",
      role: "June 2022 - September 2022",
      description: "Technology consulting and development projects",
      tech: ["Consulting", "Development"],
      icon: <Building className="w-6 h-6" />,
      period: "Product Manager Intern"
    }
  ];

  const organizationExperiences = [
    {
      organization: "Creative Labs",
      role: "Member",
      description: "UCLA's premier creative technology organization",
      tech: ["Design", "Development", "Creative Tech"],
      icon: <Users className="w-6 h-6" />
    },
    {
      organization: "Engineering Society at UCLA",
      role: "Member", 
      description: "Student organization focused on engineering excellence",
      tech: ["Engineering", "Leadership"],
      icon: <Code className="w-6 h-6" />
    }
  ];

  const ExperienceCard = ({ experience, type }: { experience: any, type: string }) => (
    <div className="group bg-card hover:bg-card/80 rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {experience.icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {experience.institution || experience.company || experience.organization}
            </h3>
            {experience.count && (
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                {experience.count}
              </span>
            )}
            {experience.period && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                {experience.period}
              </span>
            )}
          </div>
          
          {experience.role && (
            <p className="text-primary text-sm font-medium mb-2">{experience.role}</p>
          )}
          
          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
            {experience.description}
          </p>
          
          {experience.tech && (
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech: string, index: number) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-inter pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">My Experiences</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through education, internships, and student organizations
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center lg:justify-start gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                Education
              </h2>
            </div>
            
            <div className="space-y-6">
              {schoolExperiences.map((experience, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ExperienceCard experience={experience} type="school" />
                </div>
              ))}
            </div>
          </div>

          {/* Internships Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center lg:justify-start gap-3">
                <Building className="w-7 h-7 text-primary" />
                Internships & Jobs
              </h2>
            </div>
            
            <div className="space-y-6">
              {internshipExperiences.map((experience, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
                  <ExperienceCard experience={experience} type="internship" />
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Experience Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center lg:justify-start gap-3">
                <Users className="w-7 h-7 text-primary" />
                Leadership Experience
              </h2>
            </div>
            
            <div className="space-y-6">
              {organizationExperiences.map((experience, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
                  <ExperienceCard experience={experience} type="organization" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;