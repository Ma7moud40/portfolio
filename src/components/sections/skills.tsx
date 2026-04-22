"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { technicalSkills, tools, softSkills } from "@/data/profile";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-y border-border bg-card/20 py-24 md:py-32"
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
                className="rounded-lg border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
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
  items: readonly { name: string; glyph: string }[];
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
          show: { transition: { staggerChildren: 0.05 } },
        }}
        className="grid gap-2.5 sm:grid-cols-2"
      >
        {items.map((s) => (
          <motion.li
            key={s.name}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
              {s.glyph}
            </span>
            <span className="text-sm font-medium">{s.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
