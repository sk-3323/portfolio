const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5/CSS3",
        "Redux",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Prisma",
        "RabbitMQ",
        "Nginx",
        "n8n",
        "make.com",
        "Redis",
        "Supabase",
        "RAG"
      ],
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git/GitHub",
        "Docker",
        "Vercel",
        "AWS",
        "LangChain",
        "Puppeteer",
        "Cheerio",
        "Postman",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-accent mb-6 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-foreground hover:bg-primary/20 hover:border-primary/50 hover:neon-glow transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 glass rounded-2xl p-8 text-center animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Constantly learning and exploring new technologies to build better, 
              faster, and more scalable applications. Currently diving deep into{" "}
              <span className="text-primary font-semibold">AI/ML integration</span> and{" "}
              <span className="text-accent font-semibold">cloud architecture</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
