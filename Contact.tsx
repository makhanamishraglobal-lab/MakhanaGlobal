import { Phone, Mail, MapPin } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import Reveal from "@/components/site/Reveal";
import ContactForm from "@/components/site/ContactForm";

export default function Contact() {
  return (
    <SiteLayout
      title="Contact - Mishra Global Makhana"
      description="Get in touch with Mishra Global Makhana for retail orders, bulk inquiries and partnerships."
    >
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container-tight py-20 sm:py-28">
          <Reveal>
            <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact</span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              We'd love to <span className="text-accent">hear from you</span>
            </h1>
            <p className="mt-5 max-w-2xl text-primary-foreground/80">
              Reach out for retail orders, wholesale quotes, partnerships, or any
              questions about our makhana.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+91-7061626429" },
                { icon: Mail, label: "Email", value: "makhanamishraglobal@gmail.com" },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Opposite to Madhveshwar Sthan, Near Saurath Post Office, Saurath Sabha Gachi, Madhubani - 847213",
                },
              ].map((c) => (
                <div key={c.label} className="glass-card p-5 flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="mt-0.5 font-semibold text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
              <div className="glass-card overflow-hidden">
                <iframe
                  title="Madhveshwar Sthan, Saurath map"
                  src="https://www.google.com/maps?q=Opposite+to+Madhveshwar+Sthan+Near+Saurath+Post+Office+Saurath+Sabha+Gachi+Madhubani+847213&output=embed"
                  loading="lazy"
                  className="h-64 w-full"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
