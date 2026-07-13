"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 p-4 md:p-6">
      <div
        className={cn(
          "mx-auto max-w-5xl transition-all duration-500",
          open
            ? "glass rounded-3xl border border-white/[0.12] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)] px-6"
            : scrolled
              ? "glass rounded-full border border-white/[0.12] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] px-6"
              : "bg-transparent px-4"
        )}
      >
        <nav className="flex h-14 items-center justify-between gap-4 md:h-16">
          <Link
            href="/"
            className="group flex items-center gap-3 font-display font-bold"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-cyan-600 text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_6px_20px_hsl(var(--primary)/0.35)] transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold">{profile.initials}</span>
            </span>
            <span className="hidden sm:inline-block text-sm">{profile.shortName}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-all hover:text-foreground hover:bg-white/[0.06] hover:backdrop-blur-md hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] text-foreground backdrop-blur-md bg-white/[0.04] md:hidden transition-all hover:border-white/[0.15] hover:bg-white/[0.08]"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-white/[0.08] md:hidden"
            >
              <ul className="flex flex-col gap-1 py-4">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base text-muted-foreground transition-all hover:bg-white/[0.06] hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
