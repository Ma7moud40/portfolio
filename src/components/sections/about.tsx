"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { MapPin, Building2, Cpu, Briefcase } from "lucide-react";

const facts = [
  { icon: Briefcase, label: "Role", value: profile.title },
  { icon: Building2, label: "Company", value: "Comet Lab" },
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: Cpu, label: "Focus", value: "Firmware · PCB · Robotics" },
];

export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-24 md:py-32">
      <SectionHeading num="01" title="About" kicker="Who I am." />

      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 text-lg leading-relaxed text-muted-foreground"
        >
          <p>{profile.longSummary}</p>
          <p>
            I thrive at the intersection of hardware and software — translating a
            schematic into a working device. Constantly self-learning, happy to
            own a project end-to-end, and comfortable shipping with a team.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative animated-border rounded-2xl bg-card/60 p-6 backdrop-blur-md"
        >
          <ul className="divide-y divide-border">
            {facts.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="flex items-center gap-4 py-4 first:pt-1 last:pb-1"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="text-sm font-semibold">{value}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
