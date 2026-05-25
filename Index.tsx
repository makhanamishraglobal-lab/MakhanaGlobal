import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Truck, Sprout, ShieldCheck, Boxes, Tags, Package,
  Heart, Award, Sparkles, MapPin, Quote, ChevronDown, Phone, Mail,
} from "lucide-react";
import MgmMark from "@/components/site/MgmMark";
import SiteLayout from "@/components/site/SiteLayout";
import Reveal from "@/components/site/Reveal";
import ContactForm from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import hero from "@/assets/hero-makhana.jpg";
import farm from "@/assets/farm-bihar.jpg";
import warehouse from "@/assets/warehouse.jpg";
import raw from "@/assets/product-raw.jpg";
import roasted from "@/assets/product-roasted.jpg";
import graded from "@/assets/product-graded.jpg";
import flavored from "@/assets/product-flavored.jpg";

const trustBadges = [
  { icon: Sprout, label: "Direct Farmer Sourcing" },
  { icon: ShieldCheck, label: "Hygienic Processing" },
  { icon: Truck, label: "Pan-India Delivery" },
];

const whyUs = [
  { icon: Sprout, title: "Direct from Madhubani farms", desc: "Sourced from trusted growers in Saurath village, Bihar." },
  { icon: Award, title: "Premium handpicked quality", desc: "Each batch is sorted and inspected for size and crunch." },
  { icon: ShieldCheck, title: "Hygienic packing", desc: "Processed in clean facilities under strict quality controls." },
  { icon: Tags, title: "Competitive wholesale pricing", desc: "Best market rates across small and large quantities." },
  { icon: Boxes, title: "Reliable bulk supply", desc: "Consistent grading and on-time dispatch for traders." },
  { icon: Package, title: "Custom packaging", desc: "Loose, retail packs or your private-label branding." },
];

const products = [
  { img: raw, title: "Raw Makhana", tag: "Unprocessed", desc: "Natural, sun-dried fox nuts straight from the source." },
  { img: roasted, title: "Roasted Makhana", tag: "Ready-to-eat", desc: "Lightly roasted for a crisp, satisfying crunch." },
  { img: graded, title: "Graded Makhana", tag: "Size-sorted", desc: "Uniform sizes - small, medium, large or mixed." },
  { img: flavored, title: "Flavored Makhana", tag: "On request", desc: "Custom seasonings tailored to your brand profile." },
];

const process = [
  "Sourcing from local farmers",
  "Cleaning & sorting",
  "Grading by size",
  "Hygienic packing",
  "Dispatch & delivery",
];

const benefits = [
  "High in protein & fiber",
  "Low in fat & cholesterol",
  "Rich in antioxidants",
  "Great for weight management & heart health",
];

const faqs = [
  { q: "Do you supply pan-India?", a: "Yes, we deliver across India through trusted logistics partners and offer dedicated freight for bulk orders." },
  { q: "What grades/sizes are available?", a: "We supply small, medium and large grades, plus a mixed option. Custom grading is available for bulk orders." },
  { q: "Do you offer custom packaging / private label?", a: "Yes. We offer custom pack sizes, branded pouches and private-label production for distributors and exporters." },
  { q: "What is the typical lead time for bulk orders?", a: "Most bulk orders dispatch within 5-10 working days depending on quantity, packing and destination." },
  { q: "How should makhana be stored?", a: "Store in an airtight container in a cool, dry place away from direct sunlight to retain freshness and crunch." },
];

export default function Index() {
  return (
    <SiteLayout
      title="Mishra Global Makhana - Premium Fox Nuts from Madhubani, Bihar"
      description="Direct from Saurath, Madhubani - premium handpicked makhana for retail and bulk buyers across India. Hygienic processing, custom packing, reliable supply."
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-25">
          <img src={hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="container-tight relative grid gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-36">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" /> From the lotus ponds of Bihar
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Premium Quality Makhana from the <span className="text-accent">Heart of Bihar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg"
            >
              Direct from Saurath Village, Madhubani - Fresh, organic and handpicked
              fox nuts delivered across India for retail customers and bulk buyers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/products">Shop Retail <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/bulk">Wholesale Inquiry</Link>
              </Button>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-primary-foreground/85">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-8 rounded-[2rem] bg-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-primary-foreground/15 shadow-elegant">
              <img src={hero} alt="Premium makhana fox nuts in a wooden bowl" width={1536} height={1280} className="h-[520px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card flex items-center gap-3 px-4 py-3 text-foreground">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"><MgmMark className="h-5 w-5" /></div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Origin</p>
                <p className="text-sm font-semibold">Saurath, Madhubani</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-tight py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <p className="font-semibold text-primary">Trusted by Retailers & Distributors</p>
          <span className="hidden sm:inline text-muted-foreground">·</span>
          <p className="text-muted-foreground">Consistent Supply</p>
          <span className="hidden sm:inline text-muted-foreground">·</span>
          <p className="text-muted-foreground">Quality Grading</p>
          <span className="hidden sm:inline text-muted-foreground">·</span>
          <p className="text-muted-foreground">Custom Packing</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={farm} alt="Lotus pond at sunrise in Madhubani, Bihar" loading="lazy" width={1536} height={1024} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">About us</span>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
              Rooted in Madhubani. Built for reliable supply.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Mishra Global Makhana is a trusted supplier of premium-quality makhana
              (fox nuts), sourced directly from the fertile lands of Saurath Village,
              Madhubani, Bihar - globally known for producing some of the finest makhana.
              We serve both retail and wholesale customers with consistent grading,
              hygienic packing, and dependable delivery.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Our Process</p>
              <ol className="mt-4 space-y-3">
                {process.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{i + 1}</span>
                    <span className="text-sm font-medium text-foreground/90 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="section bg-gradient-warm">
        <div className="container-tight">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow">Why choose us</span>
              <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">A partner you can rely on</h2>
              <p className="mt-4 text-muted-foreground">From farm to packaging, every step is built to deliver consistency at scale.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="glass-card h-full p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container-tight">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <span className="eyebrow">Our products</span>
                <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">Crafted for every kind of buyer</h2>
                <p className="mt-3 text-muted-foreground">Available for Retail Customers · Distributors · Retailers · Exporters</p>
              </div>
              <Button asChild variant="outline" size="lg" className="hidden sm:inline-flex">
                <Link to="/products">View all products <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="group glass-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                    <h3 className="mt-1 text-lg font-semibold text-primary">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex sm:hidden justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">View all products <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BULK CTA */}
      <section className="section">
        <div className="container-tight">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 sm:p-12 lg:p-16 shadow-elegant">
              <div className="absolute inset-0 opacity-25">
                <img src={warehouse} alt="" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
              </div>
              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Wholesale & Bulk</span>
                  <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                    Need a reliable makhana supplier for bulk orders?
                  </h2>
                  <p className="mt-4 max-w-lg text-primary-foreground/80">
                    We provide consistent bulk supply, best market rates, flexible
                    quantities, and pan-India delivery. Share your requirement and
                    our team will respond quickly.
                  </p>
                  <div className="mt-7">
                    <Button asChild variant="hero" size="xl">
                      <Link to="/bulk">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
                <ul className="grid gap-3 sm:grid-cols-1">
                  {[
                    { t: "Flexible MOQ", d: "Order from small batches to multi-tonne loads." },
                    { t: "Custom packing & branding", d: "Private-label pouches in your size and design." },
                    { t: "Logistics support", d: "Pan-India shipping with reliable freight partners." },
                  ].map((b) => (
                    <li key={b.t} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur">
                      <p className="font-semibold text-accent">{b.t}</p>
                      <p className="mt-1 text-sm text-primary-foreground/80">{b.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HEALTH BENEFITS */}
      <section className="section bg-gradient-warm">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow"><Heart className="h-3.5 w-3.5" /> Health</span>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
              Superfood that supports a healthy lifestyle
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-soft">
                  <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
                  <span className="text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground italic">
              Disclaimer: Nutrition depends on preparation and portion size.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-elegant">
                <img src={roasted} alt="Roasted makhana - a healthy snack" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-4 glass-card px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Promise</p>
                <p className="text-sm font-semibold text-primary">Clean · Crunchy · Consistent</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR PROMISE + LOCATION */}
      <section className="section">
        <div className="container-tight grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full p-8 sm:p-10">
              <span className="eyebrow">Our promise</span>
              <h3 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">Quality is our commitment</h3>
              <p className="mt-4 text-muted-foreground">
                From farm to packaging, every step follows strict hygiene and sorting
                standards - so you receive clean, crunchy, and consistent makhana every time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card h-full p-8 sm:p-10">
              <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Origin</span>
              <h3 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">Saurath, Madhubani - Bihar</h3>
              <p className="mt-3 text-muted-foreground">Sourcing hub of India's finest makhana.</p>
              <div className="mt-5 overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Saurath Madhubani map"
                  src="https://www.google.com/maps?q=Saurath+Madhubani+Bihar&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.google.com/maps?q=Saurath+Madhubani+Bihar"
                target="_blank" rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Get Directions <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-secondary/40">
        <div className="container-tight">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow">What buyers say</span>
              <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">Trusted across India</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { q: "Excellent quality and timely delivery!", a: "Retail Buyer" },
              { q: "Best supplier for bulk makhana orders.", a: "Distributor" },
            ].map((t, i) => (
              <Reveal key={t.q} delay={i * 0.1}>
                <figure className="glass-card p-8">
                  <Quote className="h-8 w-8 text-accent" />
                  <blockquote className="mt-4 text-lg font-medium text-foreground">"{t.q}"</blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">- {t.a}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">Questions, answered</h2>
            <p className="mt-4 text-muted-foreground">Quick answers about supply, packing and delivery.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="glass-card divide-y divide-border">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-0 px-6">
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-gradient-warm">
        <div className="container-tight grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">Let's talk makhana</h2>
            <p className="mt-4 text-muted-foreground">Have a retail or bulk requirement? We're here to help.</p>
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><Phone className="h-4 w-4" /></span> Phone: <span className="font-semibold">+91-7061626429</span></li>
              <li className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><Mail className="h-4 w-4" /></span> Email: <span className="font-semibold">makhanamishraglobal@gmail.com</span></li>
              <li className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><MapPin className="h-4 w-4 text-accent" /></span> Location: <span className="font-semibold">Opposite to Madhveshwar Sthan, Near Saurath Post Office, Saurath Sabha Gachi, Madhubani - 847213</span></li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
