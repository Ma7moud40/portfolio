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
  moreProjectsTeaser,
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

      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
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

      <motion.div
        layout
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, idx) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)]"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View ${p.title}`}
              />
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-gradient-to-br from-card to-secondary">
                <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110">
                  <div className="absolute inset-0 grid-bg" />
                </div>
                <div className="absolute inset-0 grid place-items-center text-primary">
                  <ProjectIcon
                    slug={p.slug}
                    className="size-20 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>
                <div className="absolute left-4 top-4 z-20">
                  <Badge variant="accent" size="sm">
                    {p.categoryLabel}
                  </Badge>
                </div>
                <div className="absolute right-4 top-4 z-20 grid h-8 w-8 place-items-center rounded-full border border-border bg-background/80 text-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-display text-lg font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {p.short}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <Badge key={t} size="sm" variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-md md:p-8"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          + {moreProjectsTeaser.length} more projects
        </p>
        <div className="flex flex-wrap gap-2">
          {moreProjectsTeaser.slice(0, 18).map((m) => (
            <span
              key={m}
              className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground"
            >
              {m}
            </span>
          ))}
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            … and more
          </span>
        </div>
      </motion.div>
    </section>
  );
}
