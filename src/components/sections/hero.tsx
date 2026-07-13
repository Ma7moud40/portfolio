"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { profile, stats } from "@/data/profile";

const Hero3D = dynamic(
  () => import("@/components/hero-3d").then((m) => m.Hero3D),
  { ssr: false }
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <Hero3D />
      </div>

      {/* Grid + glow overlays */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container relative z-10 py-24 text-center md:py-32">
        {/* Profile avatar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-primary to-sky-500 opacity-70 blur-[6px]" />
            {/* Animated border */}
            <div className="relative rounded-full p-[2px] bg-gradient-to-br from-cyan-400/80 to-primary/40">
              <div className="relative overflow-hidden rounded-full h-28 w-28 md:h-32 md:w-32 bg-background">
                <Image
                  src="/avatar.jpg"
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 112px, 128px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            {/* Availability pulse dot */}
            <span className="absolute bottom-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-background">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.04] backdrop-blur-xl px-4 py-1.5 text-xs font-medium text-primary shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.06)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for opportunities
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">{profile.shortName}</span>
          <br />
          Embedded Systems <span className="text-stroke italic">Engineer</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          I build devices, robots, and electronic circuits — from firmware on
          microcontrollers to custom PCBs. 50+ projects shipped. Currently
          engineering at <strong className="text-foreground">Comet Lab</strong>.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link href="/#contact" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
            Get in touch
            <ArrowRight />
          </Link>

        </motion.div>

        <motion.ul
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4 rounded-2xl p-5 glass-card-strong"
        >
          {stats.map((s) => (
            <li key={s.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl font-bold text-primary md:text-3xl">
                {s.value}
              </span>
              <span className="text-[11px] text-muted-foreground sm:text-xs">
                {s.label}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
