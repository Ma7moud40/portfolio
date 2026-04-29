"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";
import { ProjectIcon } from "@/components/project-icon";

type Filter = ProjectCategory | "all";

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="container scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        num="03"
        title="Projects"
        kicker="Selected work from 50+ delivered builds — robotics, medical, power, embedded tooling, industrial."
      />

      {/* ── Category Filter ─────────────────────────────────── */}
      <div className="mb-12 flex flex-wrap gap-2" role="tablist">
        {projectCategories.map((c) => (
          <button
            key={c.value}
            role="tab"
            aria-selected={filter === c.value}
            onClick={() => setFilter(c.value)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-all",
              filter === c.value
                ? "border-primary/50 bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* ── Bento Grid ──────────────────────────────────────── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, idx) => {
            // Make every 7th item span 2 columns and rows to create a bento effect on large screens
            const isFeatured = idx % 7 === 0;

            return (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  isFeatured ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                )}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-card/60 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className={cn(
                        "grid flex-none place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110",
                        isFeatured ? "h-14 w-14" : "h-12 w-12"
                      )}>
                        <ProjectIcon slug={p.slug} className={isFeatured ? "size-7" : "size-6"} />
                      </div>
                      <div className="grid h-8 w-8 flex-none place-items-center rounded-full border border-border bg-background/50 text-muted-foreground opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 group-hover:border-primary/40 group-hover:text-primary">
                        <ArrowUpRight className="size-4" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <Badge variant="accent" size="sm" className="mb-2">
                        {p.categoryLabel}
                      </Badge>
                      <h3 className={cn(
                        "font-display font-semibold leading-tight text-foreground transition-colors group-hover:text-primary",
                        isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                      )}>
                        {p.title}
                      </h3>
                    </div>

                    <p className={cn(
                      "mb-6 text-muted-foreground",
                      isFeatured ? "text-base line-clamp-4" : "text-sm line-clamp-3"
                    )}>
                      {p.short}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                      {p.tech.slice(0, isFeatured ? 6 : 3).map((t) => (
                        <Badge key={t} size="sm" variant="outline" className="bg-background/50">
                          {t}
                        </Badge>
                      ))}
                      {p.tech.length > (isFeatured ? 6 : 3) && (
                        <Badge size="sm" variant="outline" className="bg-background/50 text-muted-foreground">
                          +{p.tech.length - (isFeatured ? 6 : 3)}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
