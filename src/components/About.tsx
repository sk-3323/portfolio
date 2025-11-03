import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const About = () => {
  const timeline = [
    // {
    //   icon: <GraduationCap className="w-5 h-5" />,
    //   title: "B.Tech in Computer Engineering",
    //   organization: "P.P. Savani University",
    //   period: "2020 - 2024",
    //   description: "CGPA: 8.59/10",
    // },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "MERN Stack Developer",
      organization: "10Turtle, Surat",
      period: "May 2025 - Present",
      description: "Building scalable web applications with MERN stack",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "MERN Stack Developer Intern",
      organization: "ANS IT India Pvt Ltd",
      period: "Nov 2024 - May 2025",
      description: "Developed and deployed multiple production applications",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="glass rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer from{" "}
              <span className="text-primary font-semibold">Surat, Gujarat</span>, 
              specializing in building modern web applications with the MERN stack. 
              With a strong foundation in both frontend and backend development, 
              I focus on writing clean, maintainable code and creating seamless user experiences.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My expertise includes automation integration, real-world project deployment, 
              and working with cutting-edge technologies like Next.js, Prisma, and AI tools. 
              I'm passionate about turning complex problems into elegant, scalable solutions.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Journey & Experience
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center gap-3 mb-2" style={{ 
                          justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' 
                        }}>
                          <div className="text-accent">{item.icon}</div>
                          <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                        </div>
                        <p className="text-primary font-semibold mb-1">{item.organization}</p>
                        <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                        <p className="text-foreground/80">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background neon-glow"></div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
