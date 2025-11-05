import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://autoblogn8n.zooq.app/webhook/contact", {
        body: JSON.stringify(formData),
        method: "POST",
      });
      const data = await res.json();
      if (data) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
      }
    } catch (error) {
      toast({
        title: "Failed To Message Sent!",
        description: JSON.stringify(error),
      });
    } finally {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:shubham.v.kaniya30@gmail.com",
      color: "text-accent",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shubham-kaniya-8b4304210",
      color: "text-primary",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/sk-3323",
      color: "text-foreground",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary focus:neon-glow"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary focus:neon-glow"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background/50 border-primary/30 focus:border-primary focus:neon-glow resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let's Collaborate
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <div
                        className={`${link.color} group-hover:scale-110 transition-transform`}
                      >
                        {link.icon}
                      </div>
                      <span className="text-foreground/90 font-medium">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8 text-center">
                <p className="text-lg text-foreground/90 font-semibold mb-2">
                  Based in
                </p>
                <p className="text-2xl font-bold gradient-text">
                  Surat, Gujarat
                </p>
                <p className="text-muted-foreground mt-2">
                  Open to remote opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
