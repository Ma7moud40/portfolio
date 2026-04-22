import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-cyan-600 font-display font-bold text-primary-foreground">
                {profile.initials}
              </span>
              <div>
                <p className="font-display font-semibold">{profile.shortName}</p>
                <p className="text-xs text-muted-foreground">{profile.title}</p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Building devices, robots, and electronics — from firmware to PCB.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Sitemap
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-primary" href="/#about">About</Link></li>
              <li><Link className="hover:text-primary" href="/#experience">Experience</Link></li>
              <li><Link className="hover:text-primary" href="/#projects">Projects</Link></li>
              <li><Link className="hover:text-primary" href="/#skills">Skills</Link></li>
              <li><Link className="hover:text-primary" href="/#education">Education</Link></li>
              <li><Link className="hover:text-primary" href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Connect
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Mail className="size-4" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Phone className="size-4" /> {profile.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="size-4" /> LinkedIn <ArrowUpRight className="size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="font-mono">
            Built with Next.js · Framer Motion · Three.js
          </span>
        </div>
      </div>
    </footer>
  );
}
