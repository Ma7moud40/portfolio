"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Copy,
  Check,
  Send,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const cards = [
  {
    key: "email",
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    copy: profile.email,
  },
  {
    key: "phone",
    icon: Phone,
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    copy: profile.phone,
  },
  {
    key: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    copy: profile.linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 glass-section py-24 md:py-32"
    >
      <div className="container">
        <SectionHeading
          num="06"
          title="Let’s build something together"
          kicker="Open to full-time, contract, and collaborative projects."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div className="space-y-4">
            {cards.map(({ key, ...rest }, idx) => (
              <ContactCard key={key} {...rest} delay={idx * 0.08} />
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  copy,
  delay,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  copy: string;
  delay: number;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(copy);
      setCopied(true);
      toast.success(`${label} copied`);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn’t copy");
    }
  };

  const external = href.startsWith("http");

  return (
    <motion.a
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl glass-card p-5"
    >
      <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {label}
        </span>
        <span className="truncate text-sm font-semibold">{value}</span>
      </span>
      <button
        type="button"
        aria-label={`Copy ${label}`}
        onClick={handleCopy}
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md text-muted-foreground transition-all group-hover:border-primary/40 group-hover:text-primary",
          copied && "border-primary/60 text-primary"
        )}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </motion.a>
  );
}

function ContactForm() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setPending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Send failed");
      toast.success("Thanks — I'll get back to you soon.");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Send failed";
      // Fallback: open mailto if API is not configured
      if (msg.toLowerCase().includes("not configured")) {
        toast.message("Opening your email app…");
        const body = encodeURIComponent(
          `Hi Mahmoud,\n\n${payload.message}\n\n— ${payload.name}\n${payload.email}`
        );
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
          "Portfolio contact"
        )}&body=${body}`;
      } else {
        toast.error(msg);
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative animated-border space-y-4 rounded-2xl glass-card-strong p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          autoComplete="name"
          placeholder="Jane Engineer"
          required
        />
        <Field
          label="Your email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          required
        />
      </div>
      <Field
        label="Message"
        name="message"
        as="textarea"
        placeholder="Tell me about your project or role…"
        required
      />

      <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
        {pending ? (
          <>
            <Loader2 className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send />
            Send message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        Prefer a direct email? Write to{" "}
        <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
          {profile.email}
        </a>
        .
      </p>
    </motion.form>
  );
}

function Field({
  label,
  name,
  as,
  ...rest
}: {
  label: string;
  name: string;
  as?: "textarea";
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
)) {
  const baseClass =
    "w-full rounded-xl glass-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground";
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={5}
          className={cn(baseClass, "resize-y")}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          name={name}
          className={baseClass}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  );
}
