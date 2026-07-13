"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/profile";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 glass-section py-24 md:py-32"
    >
      <div className="container">
        <SectionHeading
          num="05"
          title="Testimonials"
          kicker="What colleagues & collaborators say."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-card p-6 md:p-7">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Quote icon + stars */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Quote className="size-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    {/* Avatar initials */}
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan-400/20 to-primary/30 ring-1 ring-primary/20">
                      <span className="font-mono text-xs font-bold text-primary">
                        {t.initials}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">
                        {t.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
