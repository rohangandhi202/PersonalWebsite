import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "experiences", label: "Experiences", href: "/experiences" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    // Update active section based on current route
    const currentPath = location.pathname;
    if (currentPath === "/") setActiveSection("home");
    else if (currentPath.startsWith("/experiences")) setActiveSection("experiences");
    else if (currentPath.startsWith("/projects")) setActiveSection("projects");
    else if (currentPath.startsWith("/contact")) setActiveSection("contact");
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Logo/Brand */}

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`relative px-3 py-2 text-base font-bold font-inter transition-smooth ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-muted-foreground hover:text-primary transition-smooth">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;