import { Link } from "react-router-dom";
import { ArrowRight, Crown, Hand, Package, Ruler } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import Reveal from "@/components/site/Reveal";
import ProductPouch from "@/components/site/ProductPouch";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { products, gradeFamilies, formatInr } from "@/lib/products";

const gradeExplainers = [
  {
    icon: Ruler,
    title: "What does 6+ / 5+ / 5 / 4+ mean?",
    desc: "It's the kernel size on the sutta scale - the bigger the number, the larger the popped makhana. 6+ is our biggest, most premium kernel; 4+ is the standard, value-friendly size.",
  },
  {
    icon: Hand,
    title: "Hand Pick vs Non Hand Pick?",
    desc: "Hand Pick lots are sorted kernel by kernel for the cleanest, whitest selection. Non Hand Pick lots are machine-graded - usually priced below their hand-picked counterparts.",
  },
];

export default function Products() {
  return (
    <SiteLayout
      title="Products - Mishra Global Makhana | Quality Grades & Price List"
      description="Explore our makhana quality hierarchy - ten grades from 6+ Handpicked Supreme to 4+ Exclusive Grade, with transparent per-kg pricing from Madhubani, Bihar."
    >
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container-tight py-20 sm:py-28">
          <Reveal>
            <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Quality Grades</span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              From premium luxury selection to <span className="text-accent">wholesale grade solutions</span>
            </h1>
            <p className="mt-5 max-w-2xl text-primary-foreground/80">
              Every grade is carefully crafted to deliver purity, quality and
              consistency you can trust. One source. Multiple grades. Unlimited possibilities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRADES EXPLAINED */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-8 grid gap-4 md:grid-cols-2">
          {gradeExplainers.map((e) => (
            <div key={e.title} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <e.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-primary">{e.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUALITY HIERARCHY */}
      <section className="section">
        <div className="container-tight">
          <Reveal>
            <span className="eyebrow">Product quality hierarchy</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Ten grades, one standard of care</h2>
            <p className="mt-3 text-muted-foreground">Ranked from premium luxury to wholesale grade.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <article className="group glass-card relative flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="relative grid place-items-center bg-gradient-warm py-7">
                    <span className="absolute left-4 top-4 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">#{p.rank}</span>
                    {p.rank === 1 && (
                      <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">
                        <Crown className="h-4 w-4" />
                      </span>
                    )}
                    <ProductPouch product={p} className="h-52 w-auto transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">{p.tagline}</span>
                    <h3 className="mt-1 text-lg font-semibold text-primary leading-snug">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        {p.type === "Hand Pick" ? <Hand className="h-3 w-3" /> : <Package className="h-3 w-3" />}
                        {p.type}
                      </span>
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-bold text-accent">
                        {formatInr(p.pricePerKg)} / kg
                      </span>
                    </div>
                    <Button asChild variant="outline" size="sm" className="mt-5 self-start">
                      <Link to="/bulk">Request quote <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE LIST */}
      <section className="section bg-gradient-warm">
        <div className="container-tight">
          <Reveal>
            <span className="eyebrow">Price list</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Transparent per-kg pricing</h2>
            <p className="mt-3 text-muted-foreground">Prices are indicative and may vary with market conditions and order volume.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 glass-card overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-primary">Product</TableHead>
                    <TableHead className="font-semibold text-primary">Grade</TableHead>
                    <TableHead className="font-semibold text-primary">Type</TableHead>
                    <TableHead className="text-right font-semibold text-primary">Price / kg</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((p) => (
                    <TableRow key={p.name}>
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell>{p.grade}</TableCell>
                      <TableCell>{p.type}</TableCell>
                      <TableCell className="text-right font-semibold text-primary">{formatInr(p.pricePerKg)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UNDERSTANDING GRADING */}
      <section className="section">
        <div className="container-tight">
          <Reveal>
            <span className="eyebrow">Understanding makhana grading</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Which grade is right for you?</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gradeFamilies.map((g, i) => (
              <Reveal key={g.grade} delay={i * 0.06}>
                <div className="glass-card h-full p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 font-display text-lg font-bold text-primary">
                    {g.grade}
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent">{g.bestFor}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.benefit}</p>
                </div>
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
