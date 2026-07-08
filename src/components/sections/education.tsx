"use client";

import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, languages } from "@/data/profile";

const icons = [GraduationCap, Star];

export function Education() {
  return (
    <section id="education" className="container scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        num="05"
        title="Education & Languages"
        kicker="Where I studied and what I speak."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, idx) => {
          const Icon = icons[idx] ?? GraduationCap;
          return (
            <motion.article
              key={e.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-start gap-4 rounded-2xl glass-card p-6"
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {e.degree}
                </h3>
                <p className="mt-1 font-mono text-xs text-primary">
                  {e.school}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-16 max-w-xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Languages
        </p>
        <ul className="space-y-5">
          {languages.map((l, idx) => (
            <motion.li
              key={l.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium">{l.name}</span>
                <span className="font-mono text-xs text-primary">{l.level}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full glass-badge">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.percent}%` }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + idx * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block h-full rounded-full bg-gradient-to-r from-primary to-cyan-600"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
