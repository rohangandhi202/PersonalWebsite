import { GraduationCap, Building, Users, Code } from "lucide-react";

const Experiences = () => {
  const schoolExperiences = [
    {
      institution: "UCLA",
      role: "September 2021 - June 2025",
      description: "Graduated with B.S. in Computer Science & Engineering at UCLA, where I built a strong foundation in software development.",
      icon: <img src="/UclaLogo.png" alt="UCLA Logo" className="w-8 h-8 object-fill" />,
      period: "Alumni",
      tech: ["Computer Science", "Electrical Engineering"]
    },
    {
      institution: "Bartlett High School", 
      role: "September 2017 - June 2021",
      description: "Graduated top 2% of my class in the STEM academy.",
      icon: <img src="/bhs.jpeg" alt="Bartlett Logo" className="w-8 h-8 object-fill" />,
      period: "Alumni",
      tech: ["Engineering", "STEM"]
    }
  ];

  const internshipExperiences = [
    {
      company: "Hudl",
      role: "June 2024 - May 2025",
      description: "Led testing and automation efforts for Hudl Focus hardware and app.",
      tech: ["QA", "Automation", "Hardware", "TypeScript"],
      icon: <img src="/hudl.png" alt="Hudl Logo" className="w-8 h-8 object-fill" />,
      period: "Hardware QA Engineering Intern"
    },
    {
      company: "Hudl",
      role: "June 2023 - September 2023",
      description: "Owned QA for critical user-facing features like Auth0 and Team Profiles.",
      tech: ["QA", "Testing", "Cucumber", "Gherkin"],
      icon: <img src="/hudl.png" alt="Hudl Logo" className="w-8 h-8 object-cover" />,
      period: "Software QA Engineering Intern"
    },
    {
      company: "Chief",
      role: "December 2022 - January 2023", 
      description: "Built a NetSuite-integrated feature using Google Sheets API to automate data exports.",
      tech: ["API", "Authentication", "NetSuite", "JSON"],
      icon: <img src="/chief.jpeg" alt="Chief Logo" className="w-8 h-8 object-cover" />,
      period: "Information Technology Intern"
    },
    {
      company: "TechFabric",
      role: "June 2022 - September 2022",
      description: "Supported agile product development by leading client discovery, building roadmaps, and collaborating on sprint planning.",
      tech: ["Product Management", "Jira", "Agile"],
      icon: <img src="/techFabric.png" alt="TF Logo" className="w-8 h-8 object-cover" />,
      period: "Product Manager Intern"
    },
    {
      company: "Jewel-Osco",
      role: "June 2019 - September 2019",
      description: "Gained hands-on customer service experience by assisting shoppers with bagging and maintaining cart organization.",
      tech: ["Customer Experience", "Retail"],
      icon: <img src="/jewelOsco.jpeg" alt="Jewel Logo" className="w-8 h-8 object-cover" />,
      period: "Front End Clerk"
    }
  ];

  const organizationExperiences = [
    {
      organization: "Creative Labs",
      role: "May 2023 - June 2025",
      description: "Led project recruitment and outreach efforts, connecting UCLA students with teams to build innovative 8-week projects.",
      tech: ["Product Management", "Development", "Creative Tech"],
      icon: <img src="/cl.jpeg" alt="CL Logo" className="w-8 h-8 object-cover" />,
      period: "Projects Director",
    },
    {
      organization: "Engineering Society at UCLA",
      role: "September 2021 - June 2025", 
      description: "Organized professional events and managed industry outreach to connect students with alumni, faculty, and corporations.",
      tech: ["Engineering", "Leadership", "Networking"],
      icon: <img src="/esuc.png" alt="ESUC Logo" className="w-8 h-8 object-cover" />,
      period: "Corporate Director"
    },
    {
      organization: "DevX",
      role: "April 2023 - June 2024", 
      description: "Built and styled web pages in Next.js to help UCLA students find and apply to research opportunities.",
      tech: ["Frontend", "Next.js", "HTML/CSS"],
      icon: <img src="/devx.jpeg" alt="DEVX Logo" className="w-8 h-8 object-cover" />,
      period: "Web Developer"
    },
    {
      organization: "Bruin Racing Baja",
      role: "September 2021- June 2023", 
      description: "Led fundraising and business operations, securing $50,000 in sponsorships and presenting our development strategy.",
      tech: ["Engineering", "Public Speaking", "Sponsorships"],
      icon: <img src="/bracing.png" alt="Baja Logo" className="w-8 h-8 object-cover" />,
      period: "Business Lead"
    }
  ];

  const ExperienceCard = ({ experience, type }: { experience: any, type: string }) => {
    const isUCLA = experience.institution === "UCLA";
    const isBartlett = experience.institution === "Bartlett High School";
    const isHudl = experience.company === "Hudl";
    const isChief = experience.company === "Chief";
    const isTechFabric = experience.company === "TechFabric";
    const isJewelOsco = experience.company === "Jewel-Osco";
    const isCreativeLabs = experience.organization === "Creative Labs";
    const isESUC = experience.organization === "Engineering Society at UCLA";
    const isDevX = experience.organization === "DevX";
    const isBruinRacing = experience.organization === "Bruin Racing Baja";
    
    const cardContent = (
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
              <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full text-center">
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
    
    if (isUCLA) {
      return (
        <a 
          href="https://www.cs.ucla.edu/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isBartlett) {
      return (
        <a 
          href="https://bhs.u-46.org/academics/academy/academy-home-page" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isHudl) {
      return (
        <a 
          href="https://www.hudl.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isChief) {
      return (
        <a 
          href="https://www.chiefenterprises.com/?campaignid=21201956795&adgroupid=161370399059&keyword=chief%20enterprises&device=c&gad_source=1&gad_campaignid=21201956795&gbraid=0AAAAADxLHYi2A36cK1-_Qkagx3MM6U-XQ&gclid=CjwKCAjwy7HEBhBJEiwA5hQNokf7_wkAfly_9wEaCGeEPIlWKW-xXTiYmFJ2mSaXVsskQQsrC2cplhoC7JwQAvD_BwE" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isTechFabric) {
      return (
        <a 
          href="https://www.techfabric.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isJewelOsco) {
      return (
        <a 
          href="https://www.jewelosco.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isCreativeLabs) {
      return (
        <a 
          href="https://www.creativelabsucla.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isESUC) {
      return (
        <a 
          href="https://www.esuc.ucla.edu/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isDevX) {
      return (
        <a 
          href="https://ucladevx.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    if (isBruinRacing) {
      return (
        <a 
          href="https://www.bruinracing.org/baja" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    }
    
    return cardContent;
  };

  return (
    <div className="min-h-screen bg-background font-inter pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Experiences</span>
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