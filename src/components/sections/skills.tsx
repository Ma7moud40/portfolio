"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { technicalSkills, tools, softSkills } from "@/data/profile";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 glass-section py-24 md:py-32"
    >
      <div className="container">
        <SectionHeading
          num="04"
          title="Skills & Tools"
          kicker="What I work with."
        />

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <SkillGroup title="Technical" items={technicalSkills} />
          <SkillGroup title="Tools" items={tools} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Soft skills
          </p>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((s) => (
              <span
                key={s}
                className="rounded-lg glass-badge px-4 py-2 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.1)]"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: readonly { name: string; glyph: string; level: number }[];
}) {
  return (
    <div>
      <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {title}
      </h3>
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.07 } },
        }}
        className="flex flex-col gap-3"
      >
        {items.map((s) => (
          <motion.li
            key={s.name}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col gap-2.5 rounded-xl glass-card p-4"
          >
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {s.glyph}
                </span>
                <span className="text-sm font-medium">{s.name}</span>
              </div>
              <span className="font-mono text-xs font-semibold text-primary/80">
                {s.level}%
              </span>
            </div>

            {/* Animated bar */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                style={{
                  boxShadow: "0 0 10px hsl(188 95% 53% / 0.45)",
                }}
              />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
