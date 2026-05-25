import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import Reveal from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

import raw from "@/assets/product-raw.jpg";
import roasted from "@/assets/product-roasted.jpg";
import graded from "@/assets/product-graded.jpg";
import flavored from "@/assets/product-flavored.jpg";

const retail = [
  { img: roasted, title: "Roasted Snack Pack", size: "100 g · ready-to-eat", desc: "Lightly roasted classic salted makhana - the perfect everyday snack." },
  { img: flavored, title: "Masala Makhana Pack", size: "100 g · spiced", desc: "Crunchy masala-flavored makhana with hand-blended Indian spices." },
  { img: raw, title: "Family Pouch", size: "250 g · raw", desc: "Premium handpicked raw makhana - perfect for kheer, curries and snacks." },
];

const bulk = [
  { img: graded, title: "Grade A - Large", desc: "5 sutta+ uniform large fox nuts. Premium export grade." },
  { img: graded, title: "Grade B - Medium", desc: "Consistent medium-size makhana, popular for retail packing." },
  { img: raw, title: "Grade C - Small / Mix", desc: "Cost-efficient option for snacking blends and bulk usage." },
  { img: roasted, title: "Roasted Bulk", desc: "Pre-roasted bulk makhana ready for repacking and distribution." },
];

export default function Products() {
  return (
    <SiteLayout
      title="Products - Mishra Global Makhana | Retail & Bulk Fox Nuts"
      description="Browse premium retail packs and bulk grades of makhana from Madhubani, Bihar. Raw, roasted, graded and flavored options available."
    >
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container-tight py-20 sm:py-28">
          <Reveal>
            <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Products</span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              From everyday snacks to <span className="text-accent">bulk-ready grades</span>
            </h1>
            <p className="mt-5 max-w-2xl text-primary-foreground/80">
              Whether you're stocking your pantry or sourcing for your business - we
              offer consistent quality across every category.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <Reveal>
            <span className="eyebrow">Retail packs</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">For homes & retail buyers</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {retail.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <ProductCard {...p} ctaLabel="Inquire" to="/contact" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-warm">
        <div className="container-tight">
          <Reveal>
            <span className="eyebrow">Bulk grades</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">For distributors, retailers & exporters</h2>
            <p className="mt-3 text-muted-foreground">Custom MOQ, packaging and grading available on request.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bulk.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <ProductCard {...p} ctaLabel="Request quote" to="/bulk" />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/bulk">Start a bulk inquiry <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ProductCard({
  img, title, size, desc, ctaLabel, to,
}: { img: string; title: string; size?: string; desc: string; ctaLabel: string; to: string }) {
  return (
    <article className="group glass-card overflow-hidden h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} loading="lazy" width={1024} height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        {size && <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">{size}</span>}
        <h3 className="mt-1 text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        <Button asChild variant="outline" size="sm" className="mt-5 self-start">
          <Link to={to}>{ctaLabel} <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </article>
  );
}
