import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Academix",
      description: "Comprehensive E-Learning platform with course management and interactive features",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      details: "A full-featured learning management system with video streaming, progress tracking, and interactive assessments. Built with scalable architecture to handle thousands of concurrent users.",
      link: "https://academix-learning.netlify.app/",
      github: "https://github.com/sk-3323/Academix.git",
    },
    {
      title: "ANS Website",
      description: "Corporate website with modern design and dynamic content management",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      details: "Modern corporate website featuring responsive design, dynamic content management, and optimized performance. Implemented SEO best practices and achieved 95+ Lighthouse score.",
    },
    {
      title: "OneOps",
      description: "Employee leave management system with approval workflows",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      details: "Streamlined leave management system with role-based access control, automated approval workflows, and real-time notifications. Reduced HR processing time by 60%.",
    },
    {
      title: "Auto Notes Backend",
      description: "AI-powered document summarizer using advanced NLP",
      tech: ["Next.js", "LangChain", "OpenAI", "Supabase"],
      details: "Intelligent document summarization tool leveraging AI to extract key insights from lengthy documents. Supports multiple file formats and provides customizable summary lengths.",
      link: "https://play.google.com/store/apps/details?id=com.autonotes.ainotemaker.aimeetingnotestaker&pcampaignid=web_share",
    },
    {
      title: "Disney World Scraper",
      description: "Web scraping tool for extracting Disney World data",
      tech: ["Node.js", "Puppeteer", "Cheerio", "MongoDB"],
      details: "Automated web scraping solution for collecting and analyzing Disney World attraction data. Includes scheduling, data validation, and export functionality.",
      
    },
    {
      title: "Gulf Laser Tag",
      description: "Booking and management system for laser tag arena",
      tech: ["React", "Express", "MongoDB", "Stripe"],
      details: "Complete booking and management system with real-time availability, payment integration, and customer management. Increased booking efficiency by 40%.",
      
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex gap-3 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass border-primary/30 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              {selectedProject !== null && projects[selectedProject].title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject !== null && (
            <div className="space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                {projects[selectedProject].details}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                {projects[selectedProject].link && 
                <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.location.href = projects[selectedProject].link}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              }
               {projects[selectedProject].github && 
                <Button
                variant="outline"
                className="flex-1 border-accent text-accent hover:bg-accent/10"
                 onClick={() => window.location.href = projects[selectedProject].github}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              }
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
