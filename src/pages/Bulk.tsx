import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Boxes, Tags, Truck, Package, Phone, Mail, MapPin } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import Reveal from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { sendBulkEmail } from "@/lib/email";
import { productNames } from "@/lib/products";

const schema = z.object({
  fullName: z.string().trim().min(2, "Required").max(80),
  business: z.string().trim().max(120).optional().or(z.literal("")),
  gst: z.string().trim().max(20).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Required").max(20),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  buyerType: z.enum(["Distributor", "Retailer", "Exporter", "Other"]),
  grade: z.enum(productNames),
  quantity: z.string().trim().min(1, "Required").max(40),
  city: z.string().trim().min(2, "Required").max(60),
  state: z.string().trim().min(2, "Required").max(60),
  message: z.string().max(800).optional(),
});

const benefits = [
  { icon: Tags, title: "Best market rates", desc: "Competitive pricing for any volume." },
  { icon: Boxes, title: "Consistent grading", desc: "Reliable size sorting across batches." },
  { icon: Package, title: "Custom packing", desc: "Loose, retail packs or private label." },
  { icon: Truck, title: "Pan-India delivery", desc: "Trusted logistics, on-time dispatch." },
];

const faqs = [
  { q: "What is the minimum order quantity?", a: "We accommodate flexible MOQs starting from small trial orders to multi-tonne shipments." },
  { q: "Can you provide private-label packaging?", a: "Yes, we offer custom branded packaging with your logo, design and pack sizes." },
  { q: "What payment terms do you support?", a: "Standard terms are advance for first orders; credit terms can be discussed for repeat buyers." },
  { q: "Do you ship internationally?", a: "We work with export-grade buyers and can coordinate documentation and freight on request." },
];

export default function Bulk() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      toast.error("Please complete the required fields");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await sendBulkEmail({
        fullName: parsed.data.fullName,
        business: parsed.data.business || undefined,
        gst: parsed.data.gst || undefined,
        phone: parsed.data.phone,
        email: parsed.data.email || undefined,
        buyerType: parsed.data.buyerType,
        grade: parsed.data.grade,
        quantity: parsed.data.quantity,
        city: parsed.data.city,
        state: parsed.data.state,
        message: parsed.data.message || undefined,
      });
      setSubmitted(true);
      toast.success("Inquiry sent");
    } catch (error) {
      toast.error("Sorry, something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SiteLayout
      title="Bulk & Wholesale Supply - Mishra Global Makhana"
      description="Request a wholesale quote for premium makhana from Madhubani. Flexible MOQ, custom packing, pan-India delivery."
    >
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container-tight py-20 sm:py-28">
          <Reveal>
            <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Wholesale</span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Bulk & wholesale supply, <span className="text-accent">made simple</span>
            </h1>
            <p className="mt-5 max-w-2xl text-primary-foreground/80">
              Share your requirement and our team will respond within 24-48 hours
              with rates, grades and dispatch timelines.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <p className="mt-3 font-semibold">{b.title}</p>
                <p className="mt-1 text-sm text-primary-foreground/75">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="eyebrow">Request a quote</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Tell us what you need</h2>
            <p className="mt-4 text-muted-foreground">
              Fill in the form and our wholesale team will get in touch with pricing,
              packaging and dispatch details tailored to your requirement.
            </p>
            <div className="mt-8 glass-card p-6">
              <p className="text-sm font-semibold text-primary">Direct contact</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> <span className="min-w-0">Phone: <span className="font-semibold text-foreground">+91-7061626429</span></span></li>
                <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> <span className="min-w-0">Email: <span className="font-semibold text-foreground break-all">makhanamishraglobal@gmail.com</span></span></li>
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> <span className="min-w-0">Location: <span className="font-semibold text-foreground">Opposite to Madhveshwar Sthan, Near Saurath Post Office, Saurath Sabha Gachi, Madhubani - 847213</span></span></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="glass-card p-10 text-center animate-fade-in">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-primary">Inquiry received</h3>
                <p className="mt-3 text-muted-foreground">We'll contact you within 24-48 hours with a detailed quote.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="glass-card p-6 sm:p-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="fullName" label="Full name" error={errors.fullName} required />
                  <Field name="business" label="Business name" />
                  <Field name="gst" label="GST (optional)" />
                  <Field name="phone" label="Phone" type="tel" error={errors.phone} required />
                  <Field name="email" label="Email" type="email" error={errors.email} />
                  <SelectField name="buyerType" label="Buyer type" options={["Distributor","Retailer","Exporter","Other"]} />
                  <SelectField name="grade" label="Grade" options={productNames} />
                  <Field name="quantity" label="Quantity (kg)" placeholder="e.g. 100" error={errors.quantity} required />
                  <Field name="city" label="Delivery city" error={errors.city} required />
                  <Field name="state" label="State" error={errors.state} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} placeholder="Any specific requirement, branding or timeline…" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? "Sending..." : "Send inquiry"}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section bg-gradient-warm">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Wholesale questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="glass-card divide-y divide-border">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`f-${i}`} className="border-0 px-6">
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ name, label, type = "text", placeholder, error, required }:
  { name: string; label: string; type?: string; placeholder?: string; error?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}{required && <span className="text-accent"> *</span>}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} aria-invalid={!!error} />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select name={name} defaultValue={options[0]}>
        <SelectTrigger><SelectValue /></SelectTrigger>
        <SelectContent>
          {options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}
