"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  num: string;
  title: string;
  kicker?: string;
  className?: string;
};

export function SectionHeading({ num, title, kicker, className }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-12 max-w-2xl space-y-2", className)}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {num} <span className="text-muted-foreground">— section</span>
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {kicker && (
        <p className="text-base text-muted-foreground md:text-lg">{kicker}</p>
      )}
    </motion.header>
  );
}
