import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import MgmMark from "@/components/site/MgmMark";

export default function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-tight py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
              <MgmMark className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-lg font-bold">Mishra Global Makhana</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent">Saurath - Madhubani - Bihar</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-primary-foreground/75">
            Mishra Global Makhana - Bringing Bihar's Finest to Your Doorstep.
            Premium fox nuts sourced directly from farmers, hygienically packed,
            delivered pan-India for retail and bulk buyers.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-accent" to="/">Home</Link></li>
            <li><Link className="hover:text-accent" to="/products">Products</Link></li>
            <li><Link className="hover:text-accent" to="/bulk">Bulk Supply</Link></li>
            <li><Link className="hover:text-accent" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Reach Us</p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> +91-7061626429</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> makhanamishraglobal@gmail.com</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Opposite to Madhveshwar Sthan, Near Saurath Post Office, Saurath Sabha Gachi, Madhubani - 847213</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Mishra Global Makhana. All rights reserved.</p>
          <p>Crafted with care in Bihar, India.</p>
        </div>
      </div>
    </footer>
  );
}
