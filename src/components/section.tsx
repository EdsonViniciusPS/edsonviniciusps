"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const glowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 0.5, scale: 1, transition: { duration: 1.2 } },
};

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  accent?: "primary" | "secondary";
  children: ReactNode;
};

const accentClasses = {
  primary: "from-[#261E3E] via-[#414A6C] to-[#809CC1]",
  secondary: "from-[#2B3153] via-[#505870] to-[#EFEFEF]",
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  accent = "primary",
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="relative isolate"
    >
      <motion.div
        variants={glowVariants}
        className={`pointer-events-none absolute inset-0 -z-10 rounded-4xl opacity-40 blur-3xl ${accent === "primary" ? "bg-linear-to-br from-[#261E3E] via-[#414A6C] to-transparent" : "bg-linear-to-br from-[#2B3153] via-[#86939B] to-transparent"}`}
      />
      <div className="glass-panel relative rounded-4xl border border-white/10 p-10 sm:p-12">
        <div className="flex flex-col gap-4">
          {eyebrow && (
            <span className="inline-flex max-w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#EFEFEF]/70">
              <span className={`h-2 w-2 rounded-full bg-linear-to-br ${accentClasses[accent]}`} />
              {eyebrow}
            </span>
          )}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="max-w-2xl text-base leading-relaxed text-[#EFEFEF]/70">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="mt-10 grid gap-6">{children}</div>
      </div>
    </motion.section>
  );
}
