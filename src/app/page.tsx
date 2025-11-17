"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowBendDownRight,
  ArrowUpRight,
  Code,
  EnvelopeSimple,
  GithubLogo,
  Globe,
  Lightning,
  LinkedinLogo,
  Stack,
} from "@phosphor-icons/react";
import { Section } from "@/components/section";

const heroStats = [
  { label: "Anos construindo produtos", value: "08+" },
  { label: "Deploys/ano", value: "120" },
  { label: "Time zones atendidos", value: "04" },
  { label: "NPS médio", value: "79" },
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React 19", "Tailwind 4", "Framer Motion"],
  },
  {
    title: "Backend & Cloud",
    items: ["Node/Nest", "Edge & Serverless", "Postgres", "AWS/GCP"],
  },
  {
    title: "Product+",
    items: ["Design Systems", "Observabilidade", "Team Leadership", "Experimentação"],
  },
];

const projects = [
  {
    title: "Pulse Analytics",
    description:
      "Plataforma de dados em tempo real que orquestra telemetria IoT, previsões e workflows financeiros para varejo omnichannel.",
    stack: ["Next.js App Router", "Supabase", "Edge Functions", "Framer Motion"],
    link: "https://pulse.edsonvinicius.dev",
    highlight: "Insights em milissegundos",
  },
  {
    title: "Atlas Banking",
    description:
      "Super-app bancário white-label com onboarding guiado, módulos de crédito e integrações Pix/Open Finance.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Kafka"],
    link: "https://atlas.edsonvinicius.dev",
    highlight: "Core financeiro flexível",
  },
  {
    title: "Theta Ops",
    description:
      "Cockpit de observabilidade que correlaciona métricas, logs e experiência do usuário para operações distribuídas.",
    stack: ["Next.js", "Turborepo", "GraphQL", "Datadog"],
    link: "https://theta.edsonvinicius.dev",
    highlight: "Menos incidentes, mais foco",
  },
];

const experience = [
  {
    role: "Principal Full-stack Engineer",
    company: "Latitude X",
    period: "2022 — atual",
    summary:
      "Liderança técnica em squads globais, definindo design system, arquitetura edge-ready e rituais de DX.",
    stack: ["Next.js", "NestJS", "AWS", "GraphQL"],
  },
  {
    role: "Tech Lead",
    company: "Nébula Digital",
    period: "2019 — 2022",
    summary:
      "Escalei marketplace B2B com microsserviços Node + eventos, reduzindo time-to-market em 35%.",
    stack: ["Node", "Kubernetes", "Storybook", "GCP"],
  },
  {
    role: "Full-stack Engineer",
    company: "Incepta Labs",
    period: "2016 — 2019",
    summary:
      "Construção de MVPs para healthtechs e govtechs com foco em acessibilidade e dados.",
    stack: ["React", "Apollo", "Express", "Postgres"],
  },
];

const contactLinks = [
  {
    label: "Email",
    description: "Projetos, consultorias e collabs",
    href: "mailto:hello@edsonvinicius.dev",
    icon: EnvelopeSimple,
  },
  {
    label: "LinkedIn",
    description: "Updates e bastidores",
    href: "https://www.linkedin.com/in/edsonviniciusps",
    icon: LinkedinLogo,
  },
  {
    label: "GitHub",
    description: "Repos públicos e OSS",
    href: "https://github.com/EdsonViniciusPS",
    icon: GithubLogo,
  },
];

const navItems = [
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-deep-night text-soft-ice">
      <div className="pointer-events-none absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-linear-to-br from-[#414A6C]/40 via-[#809CC1]/30 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-15%] right-[-5%] h-[360px] w-[360px] rounded-full bg-linear-to-br from-[#2B3153]/35 via-[#86939B]/25 to-transparent blur-[130px]" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-14 sm:px-10 lg:px-14">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } }}
          className="grid gap-10 rounded-4xl border border-white/10 bg-white/5 p-10 soft-sheen"
        >
          <nav className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#EFEFEF]/60">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-2 text-[0.65rem] font-semibold transition hover:border-white/40"
              >
                {item.label}
                <ArrowBendDownRight className="text-[#809CC1] transition group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
              </Link>
            ))}
          </nav>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#86939B]">
              Edson Vinicius • Full-stack Engineer
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Produtos digitais que unem performance, narrativa e escala.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#EFEFEF]/70">
              Construo experiências end-to-end combinando Next.js, arquiteturas orientadas a eventos e um olhar afiado para DX. Acompanho métricas, feedbacks e storytelling para entregar software com propósito.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#projetos"
              className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#809CC1] via-[#414A6C] to-[#0C0516] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(65,74,108,0.45)] transition hover:scale-[1.01]"
            >
              Projetos em destaque
              <ArrowUpRight size={18} />
            </Link>
            <a
              href="mailto:hello@edsonvinicius.dev"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#EFEFEF] transition hover:border-white/60"
            >
              Convide para um bate-papo
              <Lightning size={18} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#86939B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.header>

        <Section
          id="stack"
          eyebrow="Stack fullstack"
          title="Do design system ao observability pipeline"
          description="Escolho tecnologias que potencializam times remotos, entregam previsibilidade para produto e permitem ajustes rápidos ao negócio."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {stackGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-[#86939B]">
                  <Stack size={18} /> {group.title}
                </div>
                <ul className="mt-6 space-y-3 text-sm text-[#EFEFEF]/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-[#809CC1] to-[#414A6C]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="projetos"
          eyebrow="Produtos em produção"
          title="Projetos que escalam sem perder a assinatura digital"
          description="Misturo storytelling com dados para criar experiências que traduzem métricas em decisões acionáveis."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="h-full w-full bg-linear-to-br from-[#261E3E]/40 via-transparent to-transparent" />
                </div>
                <div className="relative space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-[#86939B]">
                    {project.highlight}
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#EFEFEF]/70">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight size={24} className="text-[#809CC1] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-[#EFEFEF]/75">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section
          id="experiencia"
          eyebrow="Experiência"
          title="Guiei times multidisciplinares em diferentes estágios de produto"
          description="Do zero-to-one à escala global, mantenho foco em resiliência, feedback loops curtos e autonomia para squads."
          accent="secondary"
        >
          <div className="space-y-5">
            {experience.map((job) => (
              <div
                key={`${job.role}-${job.company}`}
                className="rounded-3xl border border-white/10 bg-[#2B3153]/20 p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-[#86939B]">
                      {job.period}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {job.role} · {job.company}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#EFEFEF]/75">
                    <Code size={18} /> leadership & craft
                  </span>
                </div>
                <p className="mt-4 text-sm text-[#EFEFEF]/75">{job.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-[#EFEFEF]/80">
                  {job.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/5 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="contato"
          eyebrow="Contato"
          title="Vamos desbloquear o próximo roadmap"
          description="Mentorias, consultorias estratégicas ou liderança hands-on em squads distribuídos."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              return (
                <Link
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#809CC1]/30 via-[#414A6C]/30 to-transparent text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-[#86939B]">
                      {contact.label}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {contact.description}
                    </p>
                  </div>
                  <ArrowUpRight className="text-[#809CC1] transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </Link>
              );
            })}
          </div>
        </Section>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-[#EFEFEF]/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} · Edson Vinicius. Criando software com sofisticação e impacto.</p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
            <a href="https://edsonvinicius.dev" className="inline-flex items-center gap-2 text-[#EFEFEF]/70">
              <Globe size={16} /> edsonvinicius.dev
            </a>
            <a href="mailto:hello@edsonvinicius.dev" className="inline-flex items-center gap-2 text-[#EFEFEF]/70">
              <EnvelopeSimple size={16} /> hello@edsonvinicius.dev
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
