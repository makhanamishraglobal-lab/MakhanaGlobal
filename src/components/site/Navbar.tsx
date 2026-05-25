import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MgmMark from "@/components/site/MgmMark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/bulk", label: "Bulk Supply" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform group-hover:rotate-[-6deg]">
            <MgmMark className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-primary">Mishra Global</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Makhana</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/products">Shop Retail</Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/bulk">Bulk Order</Link>
          </Button>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-background"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-tight py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-3 rounded-lg text-sm font-medium",
                    isActive ? "bg-secondary text-primary" : "text-foreground/80",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-3">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/products">Shop Retail</Link>
              </Button>
              <Button asChild variant="hero" className="flex-1">
                <Link to="/bulk">Bulk Order</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
