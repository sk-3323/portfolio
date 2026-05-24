import {
  Apple,
  Building2,
  Car,
  Dumbbell,
  ExternalLink,
  GraduationCap,
  MessageCircle,
  Scale,
  Scissors,
  Sparkles,
  Stethoscope,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/contact";

const CASE_STUDY_EN = "/case-studies/whatsapp-chatbot-case-study-english.html";
const CASE_STUDY_PT =
  "/case-studies/whatsapp-chatbot-case-study-portuguese.html";

const industries = [
  { name: "Nutritionists", icon: Apple },
  { name: "Dentists", icon: Stethoscope },
  { name: "Fitness Coaches", icon: Dumbbell },
  { name: "Aesthetic Clinics", icon: Sparkles },
  { name: "Real Estate", icon: Building2 },
  { name: "Immigration & Visa Consultants", icon: Plane },
  { name: "Educational Institutes / Coaching", icon: GraduationCap },
  { name: "Salons & Aesthetic Clinics", icon: Scissors },
  { name: "Car Detailers / Customization", icon: Car },
  { name: "Law Firms / Legal Consultation", icon: Scale },
];

const highlights = [
  "24/7 automated replies on WhatsApp",
  "Appointment booking & payment links",
  "CRM sync, follow-ups & multi-language support",
  "Built with n8n, AI agents & your business tools",
];

const WhatsAppAgentService = () => {
  return (
    <section id="whatsapp-service" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#25D366]/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] mb-4">
              <MessageCircle className="w-4 h-4" />
              Featured Service
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              WhatsApp AI Agent Development
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#25D366] to-accent mx-auto mb-6" />
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              I build custom WhatsApp agents that handle inquiries, book
              appointments, collect payments, and follow up with clients — so
              your team stops drowning in messages and starts closing more
              business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-2xl p-8 border border-[#25D366]/20 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What your agent can do
              </h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground/85"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#25D366]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-6 w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get your WhatsApp agent
                </a>
              </Button>
            </div>

            <div
              className="glass rounded-2xl p-8 border border-primary/20 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Live case study
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Dr. Weidson&apos;s multi-city clinic — a fully autonomous
                WhatsApp agent for scheduling, payments, and patient follow-up
                across three cities.
              </p>
              <div className="rounded-xl overflow-hidden border border-white/10 mb-5 aspect-video bg-gradient-to-br from-[#0b1219] via-[#131b24] to-[#0d1117] flex items-center justify-center p-6">
                <div className="text-center space-y-2">
                  <p className="text-[#25D366] font-mono text-xs tracking-widest uppercase">
                    Healthcare · n8n · GPT-4o
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-white">
                    Dr. Weidson AI WhatsApp Agent
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Appointment booking · Payments · Follow-ups
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10"
                >
                  <a
                    href={CASE_STUDY_EN}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Case study (English)
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-accent/40 text-accent hover:bg-accent/10"
                >
                  <a
                    href={CASE_STUDY_PT}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Case study (Português)
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground">
              Built for your industry
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Same powerful automation stack — tailored workflows, tone, and
              integrations for how your business actually runs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industries.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="glass rounded-xl p-4 text-center hover:border-[#25D366]/40 hover:scale-[1.03] transition-all duration-300 border border-transparent group"
                >
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground/90 leading-snug">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAgentService;
