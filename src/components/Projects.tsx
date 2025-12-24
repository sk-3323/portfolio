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
      tech: ["Next.js", "Node.js", "MongoDB"],
      details: "A full-featured learning management system with video streaming, progress tracking, and interactive assessments. Built with scalable architecture to handle thousands of concurrent users.",
      image: "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766587089/Screenshot_2025-12-24_200640_oqo8ab.png",
      link: "https://academix-learning.netlify.app/",
      github: "https://github.com/sk-3323/Academix.git",
    },
    // {
    //   title: "ANS Website",
    //   description: "Corporate website with modern design and dynamic content management",
    //   tech: ["Next.js", "Express.js", "MongoDB", "Prisma"],
    //   details: "Modern corporate website featuring responsive design, dynamic content management, and optimized performance. Implemented SEO best practices and achieved 95+ Lighthouse score.",
    //   image: "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766587089/Screenshot_2025-12-24_200640_oqo8ab.png"
    // },
    // {
    //   title: "OneOps",
    //   description: "Employee leave management system with approval workflows",
    //   tech: ["React", "Node.js", "MongoDB", "Express.js"],
    //   details: "Streamlined leave management system with role-based access control, automated approval workflows, and real-time notifications. Reduced HR processing time by 60%.",
    //       image: "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766587089/Screenshot_2025-12-24_200640_oqo8ab.png"

    // },
    {
      title: "Auto Notes Backend",
      description: "AI-powered document summarizer using advanced NLP",
      tech: ["Node.js", "Express.js","LangChain",  "MongoDB", "RAG","Nginx"],
      details: "Intelligent document summarization tool leveraging AI to extract key insights from lengthy documents. Supports multiple file formats and provides customizable summary lengths.",
      link: "https://play.google.com/store/apps/details?id=com.autonotes.ainotemaker.aimeetingnotestaker&pcampaignid=web_share",
          image: "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766590909/ChatGPT_Image_Dec_24_2025_09_11_14_PM_eoeyqm.png"

    },
    {
      title: "Magic Stay Club",
      description: "Web scraping tool for extracting Disney World data",
      tech: ["Node.js", "Express.js","Next.js","Puppeteer", "Cheerio", "Supabase", "Postgresql","Nginx"],
      details: "Automated web scraping solution for collecting and analyzing Disney World attraction data. Includes scheduling, data validation, and export functionality.",
            image: "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766591182/Screenshot_2025-12-24_211559_fg2chr.png"

    },
    {
      title: "Gulf Laser Tag",
      description: "Booking and management system for laser tag arena",
      tech: ["Next.js", "Node.js","Express.js", "MongoDB","Nginx"],
      details: "Complete booking and management system with real-time availability, payment integration, and customer management. Increased booking efficiency by 40%.",
            image: "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766590574/Screenshot_2025-12-24_210552_ugrf1i.png",
            link: "https://www.gulflasertag.net/en"

    },
    {
      title: "Schema Curriculum",
      description: "I'm building a fully custom website with admin panel for a social studies curriculum designer and consultant who just launched her startup. The goal is to craft a clean, modern, and highly flexible site where she can showcase her expertise, manage content easily, and scale as her audience grows.",
      tech : ["Next.js","Node.js","Express.js","MongoDB","Nginx"],
      details: "I'm building a fully custom website with admin panel for a social studies curriculum designer and consultant who just launched her startup. The goal is to craft a clean, modern, and highly flexible site where she can showcase her expertise, manage content easily, and scale as her audience grows.",
      image: "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766590354/Screenshot_2025-12-24_205630_lfdrj4.png",
      link : "https://schemacurriculum.com/"
    },
    {
      title: "Telesmart",
      "description" : "This project involved building a fully customized website using WordPress CMS",
      "tech" : ["Wordpress","CMS","PHP","MySQL"],
      "details" : "",
      image:"https://res.cloudinary.com/dhwgztfgz/image/upload/v1766591284/Screenshot_2025-12-24_211749_rprekh.png",
      link : "http://telesmart.io/"
    }
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
                className="group relative rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up hover:scale-[1.02] transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(index)}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                  }}
                />
                
                {/* Gradient Overlay - darker at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/60 group-hover:from-background/98 group-hover:via-background/90 transition-all duration-500" />
                
                {/* Accent Gradient Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col justify-end min-h-[320px]">
                  {/* Top Badge - Shows on Hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full text-xs font-semibold text-primary neon-glow">
                      View Details
                    </div>
                  </div>

                  <div className="space-y-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 group-hover:text-foreground/90 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full text-xs font-medium text-accent group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full text-xs font-medium text-primary">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass border-primary/30 max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold gradient-text">
              {selectedProject !== null && projects[selectedProject].title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject !== null && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="relative rounded-xl overflow-hidden h-64 group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ 
                    backgroundImage: `url(${projects[selectedProject].image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Project Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  {projects[selectedProject].link && 
                    <Button
                      className="flex-1 bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground shadow-lg"
                      onClick={() => window.location.href = projects[selectedProject].link}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  }
                  {projects[selectedProject].github && 
                    <Button
                      variant="outline"
                      className="flex-1 border-accent/50 bg-accent/10 backdrop-blur-sm text-accent hover:bg-accent/20 shadow-lg"
                      onClick={() => window.location.href = projects[selectedProject].github}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  }
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed text-base">
                  {projects[selectedProject].details}
                </p>
                
                {/* Technologies Section */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
