import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/email";
import { productNames } from "@/lib/products";

const gradeOptions = ["Not sure yet", ...productNames];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  type: z.enum(["Retail", "Bulk"]),
  grade: z.string().max(60).optional(),
  quantity: z.string().max(40).optional(),
  message: z.string().max(800).optional(),
});

export default function ContactForm({ defaultType = "Retail" as "Retail" | "Bulk" }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email") || "",
      type: fd.get("type") || defaultType,
      grade: fd.get("grade") || "",
      quantity: fd.get("quantity") || "",
      message: fd.get("message") || "",
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await sendContactEmail({
        name: parsed.data.name,
        phone: parsed.data.phone,
        email: parsed.data.email || undefined,
        requirement: parsed.data.type,
        grade: parsed.data.grade === "Not sure yet" ? undefined : parsed.data.grade || undefined,
        quantity: parsed.data.quantity || undefined,
        message: parsed.data.message || undefined,
      });
      setSubmitted(true);
      toast.success("Thank you! We'll get back to you shortly.");
    } catch (error) {
      toast.error("Sorry, something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center animate-fade-in">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-primary">Message received</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out. Our team will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card p-6 sm:p-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} required />
        <Field label="Email" name="email" type="email" error={errors.email} />
        <div className="space-y-2">
          <Label>Requirement</Label>
          <Select name="type" defaultValue={defaultType}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Retail">Retail</SelectItem>
              <SelectItem value="Bulk">Bulk</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Product / Grade</Label>
          <Select name="grade" defaultValue={gradeOptions[0]}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {gradeOptions.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <Field label="Quantity (optional)" name="quantity" placeholder="e.g. 10 kg, 5 packs" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Tell us briefly about your requirement…" />
      </div>
      <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending..." : "Contact Us Now"}
      </Button>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, error, required,
}: { label: string; name: string; type?: string; placeholder?: string; error?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>
        {label}{required && <span className="text-accent"> *</span>}
      </Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} aria-invalid={!!error} />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
