"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 glass-section py-24 md:py-32"
    >
      <div className="container">
        <SectionHeading
          num="02"
          title="Experience"
          kicker="Where I've built things."
        />

        <ol className="relative space-y-6 pl-8">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"
            aria-hidden
          />
          {experiences.map((exp, idx) => (
            <motion.li
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span
                className="absolute -left-[30px] top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
                aria-hidden
              />
              <article className="group rounded-2xl glass-card p-6 md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <Badge variant={idx === 0 ? "accent" : "default"}>{exp.period}</Badge>
                  <span className="font-mono text-xs text-muted-foreground">
                    @ {exp.company}
                  </span>
                </div>
                <h3 className="mb-4 font-display text-xl font-semibold">
                  {exp.role}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
