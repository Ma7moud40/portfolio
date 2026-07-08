import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ProjectIcon } from "@/components/project-icon";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.short,
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 md:pt-36">
        <article className="container">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>

          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start md:gap-14">
            <header className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">{project.categoryLabel}</Badge>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                <span className="text-gradient">{project.title}</span>
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {project.short}
              </p>

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    `About: ${project.title}`
                  )}`}
                  className={cn(buttonVariants({ variant: "primary" }))}
                >
                  <Mail />
                  Ask about this project
                </a>
                <Link
                  href="/#projects"
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Browse all projects
                  <ArrowUpRight />
                </Link>
              </div>
            </header>

            <aside className="relative overflow-hidden rounded-2xl glass-card-strong">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative grid aspect-square place-items-center p-12">
                <ProjectIcon
                  slug={project.slug}
                  className="size-40 text-primary"
                />
              </div>
              <div className="relative border-t border-white/[0.06] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Summary
                </p>
                <p className="mt-2 text-sm">{project.short}</p>
              </div>
            </aside>
          </div>

          <nav className="mt-16 grid gap-4 border-t border-white/[0.06] pt-8 sm:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-1 rounded-xl glass-card p-5"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                ← Previous
              </span>
              <span className="font-semibold">{prev.title}</span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-end gap-1 rounded-xl glass-card p-5 text-right"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Next →
              </span>
              <span className="font-semibold">{next.title}</span>
            </Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
