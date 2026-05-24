import { useState } from "react";
import { ExternalLink, FileText, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  description: string;
  tech: string[];
  details: string;
  image: string;
  link?: string;
  github?: string;
  caseStudyEn?: string;
  caseStudyPt?: string;
  featured?: boolean;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Dr. Weidson — WhatsApp AI Agent",
      description:
        "Autonomous WhatsApp agent for a multi-city clinic: scheduling, payments & patient follow-up",
      tech: ["n8n", "Evolution API", "GPT-4o", "Supabase", "Google Calendar"],
      details:
        "A production WhatsApp AI agent that replaced manual receptionist workflows — handling appointment booking, payment links, CRM sync, and automated follow-ups across three cities. Built with n8n orchestration, Evolution API, and GPT-4o with tool calling.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      caseStudyEn: "/case-studies/whatsapp-chatbot-case-study-english.html",
      caseStudyPt: "/case-studies/whatsapp-chatbot-case-study-portuguese.html",
      featured: true,
    },
    {
      title: "Academix",
      description:
        "Comprehensive E-Learning platform with course management and interactive features",
      tech: ["Next.js", "Node.js", "MongoDB"],
      details:
        "A full-featured learning management system with video streaming, progress tracking, and interactive assessments. Built with scalable architecture to handle thousands of concurrent users.",
      image:
        "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766587089/Screenshot_2025-12-24_200640_oqo8ab.png",
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
      tech: ["Node.js", "Express.js", "LangChain", "MongoDB", "RAG", "Nginx"],
      details:
        "Intelligent document summarization tool leveraging AI to extract key insights from lengthy documents. Supports multiple file formats and provides customizable summary lengths.",
      link: "https://play.google.com/store/apps/details?id=com.autonotes.ainotemaker.aimeetingnotestaker&pcampaignid=web_share",
      image:
        "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766590909/ChatGPT_Image_Dec_24_2025_09_11_14_PM_eoeyqm.png",
    },
    {
      title: "Magic Stay Club",
      description: "Web scraping tool for extracting Disney World data",
      tech: [
        "Node.js",
        "Express.js",
        "Next.js",
        "Puppeteer",
        "Cheerio",
        "Supabase",
        "Postgresql",
        "Nginx",
      ],
      details:
        "Automated web scraping solution for collecting and analyzing Disney World attraction data. Includes scheduling, data validation, and export functionality.",
      image:
        "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766591182/Screenshot_2025-12-24_211559_fg2chr.png",
    },
    {
      title: "Gulf Laser Tag",
      description: "Booking and management system for laser tag arena",
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Nginx"],
      details:
        "Complete booking and management system with real-time availability, payment integration, and customer management. Increased booking efficiency by 40%.",
      image:
        "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766590574/Screenshot_2025-12-24_210552_ugrf1i.png",
      link: "https://www.gulflasertag.net/en",
    },
    {
      title: "Schema Curriculum",
      description:
        "I'm building a fully custom website with admin panel for a social studies curriculum designer and consultant who just launched her startup. The goal is to craft a clean, modern, and highly flexible site where she can showcase her expertise, manage content easily, and scale as her audience grows.",
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Nginx"],
      details:
        "I'm building a fully custom website with admin panel for a social studies curriculum designer and consultant who just launched her startup. The goal is to craft a clean, modern, and highly flexible site where she can showcase her expertise, manage content easily, and scale as her audience grows.",
      image:
        "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766590354/Screenshot_2025-12-24_205630_lfdrj4.png",
      link: "https://schemacurriculum.com/",
    },
    {
      title: "Telesmart",
      description:
        "This project involved building a fully customized website using WordPress CMS",
      tech: ["Wordpress", "CMS", "PHP", "MySQL"],
      details: "",
      image:
        "https://res.cloudinary.com/dhwgztfgz/image/upload/v1766591284/Screenshot_2025-12-24_211749_rprekh.png",
      link: "http://telesmart.io/",
    },
  ];

  const featuredProject = projects.find((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold gradient-text md:text-5xl">
              Project Showcase
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Real production work across automation, full-stack engineering, and
              business-focused product delivery.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
          </div>

          {featuredProject && (
            <div
              className="group relative overflow-hidden rounded-3xl border border-[#25D366]/40 bg-card/60 shadow-xl shadow-[#25D366]/10 backdrop-blur-sm"
              onClick={() => setSelectedProject(projects.indexOf(featuredProject))}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${featuredProject.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/60" />
              <div className="relative grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:p-10">
                <div className="space-y-5">
                  <span className="inline-flex rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#25D366]">
                    Featured Case Study
                  </span>
                  <h3 className="text-3xl font-bold text-foreground md:text-4xl">
                    {featuredProject.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-border/60 bg-background/60 p-5 backdrop-blur">
                  <p className="text-sm text-muted-foreground">
                    End-to-end AI receptionist system for high-volume clinic operations.
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Automation + CRM + Payments</span>
                    <span className="font-semibold text-primary">Open details</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularProjects.map((project, index) => {
              const projectIndex = projects.indexOf(project);

              return (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  onClick={() => setSelectedProject(projectIndex)}
                >
                  <div
                    className="h-44 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="space-y-4 p-5">
                    <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="glass max-h-[90vh] max-w-3xl overflow-y-auto border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold gradient-text">
              {selectedProject !== null && projects[selectedProject].title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject !== null && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="group relative h-64 overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${projects[selectedProject].image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Project Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                  {projects[selectedProject].caseStudyEn && (
                    <Button
                      className="flex-1 min-w-[140px] bg-[#25D366]/90 backdrop-blur-sm hover:bg-[#25D366] text-white shadow-lg"
                      onClick={() =>
                        window.open(
                          projects[selectedProject].caseStudyEn,
                          "_blank",
                        )
                      }
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Case Study (EN)
                    </Button>
                  )}
                  {projects[selectedProject].caseStudyPt && (
                    <Button
                      variant="outline"
                      className="flex-1 min-w-[140px] border-[#25D366]/50 bg-background/80 backdrop-blur-sm text-[#25D366] hover:bg-[#25D366]/10 shadow-lg"
                      onClick={() =>
                        window.open(
                          projects[selectedProject].caseStudyPt,
                          "_blank",
                        )
                      }
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Case Study (PT)
                    </Button>
                  )}
                  {projects[selectedProject].link && (
                    <Button
                      className="flex-1 min-w-[140px] bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground shadow-lg"
                      onClick={() =>
                        window.open(projects[selectedProject].link, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {projects[selectedProject].github && (
                    <Button
                      variant="outline"
                      className="flex-1 min-w-[140px] border-accent/50 bg-accent/10 backdrop-blur-sm text-accent hover:bg-accent/20 shadow-lg"
                      onClick={() =>
                        window.open(projects[selectedProject].github, "_blank")
                      }
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-foreground/90">
                  {projects[selectedProject].details ||
                    projects[selectedProject].description}
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
